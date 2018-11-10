using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Threading.Tasks;
using Newtonsoft.Json;
using Portal2Boards.Extensions;
using SteamCommunity;

namespace nekzor.github.io
{
    internal class WebPageBuilder
    {
        private List<Map> _wrs;
        private List<Player> _players;
        private Statistics _stats;

        private readonly SteamCommunityClient _client;

        public WebPageBuilder(string userAgent)
        {
            _players = new List<Player>();
            _stats = new Statistics("lp_stats.json");

            _client = new SteamCommunityClient(userAgent, false);
            _client.Log += Logger.LogSteamCommunityClient;

            _wrs = JsonConvert.DeserializeObject<List<Map>>(File.ReadAllText("lp_wrs.json"));
        }

        public async Task Initialize()
        {
            var game = await _client.GetLeaderboardsAsync("Portal 2");

            var excluded = _wrs
                .Where(x => x.Excluded)
                .Select(x => x.Id);
            var sp = game.Entries
                .Where(lb => lb.Name.StartsWith("challenge_portals_sp"))
                .Where(lb => !excluded.Contains((ulong)lb.Id));
            var mp = game.Entries
                .Where(lb => lb.Name.StartsWith("challenge_portals_mp"))
                .Where(lb => !excluded.Contains((ulong)lb.Id));

            // Local function
            async Task GetPlayers(IEnumerable<IStatsLeaderboardEntry> leaderboards)
            {
                var maps = new Dictionary<IStatsLeaderboardEntry, List<CacheItem>>();
                foreach (var lb in leaderboards)
                {
                    var entries = new List<CacheItem>();
                    var wr = _wrs.First(x => x.Id == (ulong)lb.Id).WorldRecord;

                    var cache = $"{App.Cache}{lb.Id}.json";
                    if (!File.Exists(cache)
                        || score = JsonConvert.DeserializeObject<ScoreItem>(await File.ReadAllTextAsync(cache)) == null)
                    {
                        var page = await _client.GetLeaderboardAsync("Portal 2", lb.Id);
                        foreach (var entry in page.Entries)
                            entries.Add(new CacheItem() { Id = entry.Id, Score = entry.Score });
                        await File.WriteAllTextAsync(cache, JsonConvert.SerializeObject(entries, Formatting.Indented));
                        await Task.Delay(1000);
                        Console.Write("[DOWNLOADED] ");
                    }
                    else
                    {
                        entries = JsonConvert.DeserializeObject<List<CacheItem>>(await File.ReadAllTextAsync(cache));
                        Console.Write("[FROM CACHE] ");
                    }

                    // Check if we need a second page
                    if (entries.Last().Score == wr)
                        Console.Write($" [LIMITED] ");

                    foreach (var cheater in entries.Where(entry => entry.Score < wr))
                        _stats.AddCheater(cheater.Id);

                    Console.WriteLine(lb.Id);
                    maps.Add(lb, entries);
                }

                var current = 1;
                foreach (var map in maps)
                {
                    var lb = map.Key;
                    var entries = map.Value;
                    var wr = _wrs.First(x => x.Id == (ulong)lb.Id).WorldRecord;

                    var ties = 0;
                    foreach (var entry in entries.Where(entry => entry.Score >= wr))
                    {
                        if (_stats.IsCheater(entry.Id))
                            continue;

                        if (entry.Score == wr)
                            ties++;

                        var player = _players.FirstOrDefault(p => p.Id == entry.Id);
                        if (player == null)
                            _players.Add(player = new Player(entry.Id, excluded));

                        player.Update(lb.Id, entry.Score);
                    }

                    _stats.SetRecordCount((ulong)lb.Id, ties);

                    Console.WriteLine($"[{lb.Id}] {lb.DisplayName} -> {ties} ({current}/{maps.Count})");
                    current++;
                }

                _players.RemoveAll(p => _stats.IsCheater(p.Id));
            }

            await GetPlayers(sp);
            await GetPlayers(mp);
        }
        public Task Filter()
        {
            foreach (var player in _players)
                player.CalculateTotalScore();

            var before = _players.Count;
            _players.RemoveAll(p => !p.IsSinglePlayer && !p.IsCooperative);
            var after = _players.Count;

            Console.WriteLine($"Filtered {after} from {before} players.");
            Console.WriteLine();
            return Task.CompletedTask;
        }
        public async Task Export(string file)
        {
            if (File.Exists(file)) File.Delete(file);
            await File.WriteAllTextAsync(file, JsonConvert.SerializeObject(_players, Formatting.Indented));
            await _stats.Export();
        }
        public async Task Import(string file)
        {
            if (!File.Exists(file)) return;
            _players = JsonConvert.DeserializeObject<List<Player>>(await File.ReadAllTextAsync(file));
            await _stats.Import();

            foreach (var player in _players)
                player.CalculateTotalScore();
        }
        public async Task Build(string file, int maxRank = 10)
        {
            if (File.Exists(App.Destination + file)) File.Delete(App.Destination + file);

            var cache = new Dictionary<ulong, IPublicProfile>();
            var profilecache = new List<ulong>();

            // Local function 1
            async Task<List<string>> BuildRows(IEnumerable<Player> players, int perfectScore, Portal2MapType mode)
            {
                var rank = 0;
                var current = 0;
                var rows = new List<string>();
                foreach (var player in players
                    .OrderBy(p => p.GetTotalScore(mode))
                    .ThenBy(p => p.Id))
                {
                    if (current != player.GetTotalScore(mode))
                    {
                        rank++;
                        if (rank > maxRank) break;
                        current = player.GetTotalScore(mode);
                    }

                    // Download Steam profile to resolve name
                    if (!cache.ContainsKey(player.Id))
                    {
                        var profile = await _client.GetProfileAsync(player.Id);
                        cache.Add(player.Id, profile);
                        await Task.Delay(1000);
                        Console.WriteLine($"[{player.Id}] {player.GetTotalScore(mode)} by {cache[player.Id].Name}");
                    }

                    rows.Add(FillRow(player, cache[player.Id], perfectScore, rank, mode));
                }
                return rows;
            }
            // Local function 2
            Task<List<string>> BuildProfileRows(IEnumerable<Player> players)
            {
                var rows = new List<string>();
                foreach (var player in players)
                {
                    if (!cache.ContainsKey(player.Id) || profilecache.Contains(player.Id)) continue;
                    profilecache.Add(player.Id);
                    rows.Add(FillProfileRow(player, cache[player.Id]));
                }
                return Task.FromResult(rows);
            }
            // Local function 3
            Task<List<string>> BuildRecordRows()
            {
                var rows = new List<string>();
                foreach (var map in Portal2.CampaignMaps.Where(m => m.IsOfficial))
                {
                    var record = _wrs.First(m => m.Id == map.BestPortalsId);
                    rows.Add(FillRecordRow(record, _stats.GetRecordCount(record.Id)));
                }
                return Task.FromResult(rows);
            }

            var maxsp = _wrs
                .Where(x => x.Mode == Portal2MapType.SinglePlayer)
                .Where(x => !x.Excluded)
                .Sum(x => x.WorldRecord);
            var maxmp = _wrs
                .Where(x => x.Mode == Portal2MapType.Cooperative)
                .Where(x => !x.Excluded)
                .Sum(x => x.WorldRecord);

            var sp = await BuildRows(_players.Where(p => p.IsSinglePlayer), (int)maxsp, Portal2MapType.SinglePlayer);
            var mp = await BuildRows(_players.Where(p => p.IsCooperative), (int)maxmp, Portal2MapType.Cooperative);
            var ov = await BuildRows(_players.Where(p => p.IsOverall), (int)(maxsp + maxmp), Portal2MapType.Unknown);
            var rc = await BuildRecordRows();
            var pr = await BuildProfileRows(_players.Where(x => cache.ContainsKey(x.Id)));

            await File.WriteAllTextAsync(App.Destination + file, GetPage(sp, mp, ov, rc, pr));
        }

        private string GetPage(
            IEnumerable<string> singlePlayerRows,
            IEnumerable<string> cooperativeRows,
            IEnumerable<string> overallRows,
            IEnumerable<string> recordRows,
            IEnumerable<string> profileRows)
        {
            return
$@"<!-- {App.Version} -->
<!DOCTYPE html>
<html>
	<head>
		<title>Least Portals | nekzor.github.io</title>
		<link href=""https://fonts.googleapis.com/css?family=Roboto"" rel=""stylesheet"">
		<link href=""https://fonts.googleapis.com/icon?family=Material+Icons"" rel=""stylesheet"">
		<link href=""https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0-alpha.4/css/materialize.min.css"" rel=""stylesheet"">
		<meta name=""viewport"" content=""width=device-width, initial-scale=1.0"" />
		<style>.link {{ color: white }} .link:hover {{ color: aquamarine }} .steam-link {{ color: white }} .steam-link:hover {{ color: black }}</style>
	</head>
	<body class=""white-text blue-grey darken-4"">
		<nav class=""nav-extended blue-grey darken-3"">
			<div class=""nav-wrapper"">
				<div class=""col s12 hide-on-small-only"">
                    <a href=""#"" data-target=""slide-out"" class=""sidenav-trigger show-on-large""><i class=""material-icons"">menu</i></a>
                    <a href=""index.html"">&nbsp;&nbsp;&nbsp;nekzor.github.io</a>
                    <a class=""breadcrumb""></a>
                    <a href=""lp.html"">Least Portals</a>
                </div>
                <div class=""col s12 hide-on-med-and-up"">
                    <a href=""#"" data-target=""slide-out"" class=""sidenav-trigger""><i class=""material-icons"">menu</i></a>
                    <a href=""lp.html"" class=""brand-logo center"">LP</a>
                </div>
			</div>
			<div class=""nav-content"">
				<ul class=""tabs tabs-transparent"">
					<li class=""tab""><a href=""#sp"">Single Player</a></li>
					<li class=""tab""><a href=""#mp"">Cooperative</a></li>
					<li class=""tab""><a href=""#all"">Overall</a></li>
					<li class=""tab""><a href=""#records"">Records</a></li>
					<li class=""tab""><a href=""#about"">About</a></li>
				</ul>
			</div>
		</nav>
		<ul id=""slide-out"" class=""sidenav"">
			<li><a href=""index.html"">nekzor.github.io</a></li>
            <li><a href=""glitches.html"">Glitches</a></li>
			<li><a href=""lp.html"">Least Portals</a></li>
		</ul>
		<div id=""sp"">
			<div class=""row"">
				<div class=""col s12 m12 l8 push-l2"">
					<table>
						<thead>
							<tr>
								<th>Player</th>
								<th>Portals<sup>1</sup></th>
							</tr>
						</thead>
						<tbody>
{string.Join("\n", singlePlayerRows)}
						</tbody>
					</table>
				</div>
			</div>
			<div class=""row"">
				<div class=""col s12"" align=""center"">
					<small><sup>1</sup> Excluding Smooth Jazz, Dual Lasers, Fizzler Intro, Turret Intro, Laser Relays, Jail Break and Neurotoxin Sabotage.</small>
				</div>
			</div>
		</div>
		<div id=""mp"">
			<div class=""row"">
				<div class=""col s12 m12 l8 push-l2"">
					<table>
						<thead>
							<tr>
								<th>Player</th>
								<th>Portals</th>
							</tr>
						</thead>
						<tbody>
{string.Join("\n", cooperativeRows)}
						</tbody>
					</table>
				</div>
			</div>
		</div>
		<div id=""all"">
			<div class=""row"">
				<div class=""col s12 m12 l8 push-l2"">
					<table>
						<thead>
							<tr>
								<th>Player</th>
								<th>Portals</th>
							</tr>
						</thead>
						<tbody>
{string.Join("\n", overallRows)}
						</tbody>
					</table>
				</div>
			</div>
		</div>
		<div id=""records"">
			<div class=""row""></div>
			<div class=""row"">
				<div class=""col s12 m12 l2 push-l2"">
					<input id=""search-box"" class=""search white-text"" placeholder=""Search"" />
				</div>
				<div class=""col s12 m12 l1 push-l2"">
					<br>
					<label>
						<input id=""cbx-map"" type=""checkbox"" checked=""checked"" onclick=""updateFilter()"" />
						<span>Map</span>
					</label>
				</div>
				<div class=""col s12 m12 l1 push-l2"">
					<br>
					<label>
						<input id=""cbx-portals"" type=""checkbox"" checked=""checked"" onclick=""updateFilter()"" />
						<span>Portals</span>
					</label>
				</div>
			</div>
			<div class=""row"">
				<div class=""col s12 m12 l8 push-l2"">
					<table>
						<thead>
							<tr>
								<th>Map</th>
								<th>Portals</th>
								<th>Ties</th>
								<th>Video</th>
							</tr>
						</thead>
						<tbody class=""list"">
{string.Join("\n", recordRows)}
						</tbody>
					</table>
				</div>
			</div>
		</div>
		<div id=""about"">
			<div class=""row""></div>
			<div class=""row"">
				<div class=""col s12 m12 l8 push-l2"">
					<h3>Who's the lp king?</h3>
					<p>
						This leaderboard includes all legit players who care about least portal records in Portal 2.
					</p>
					<br>
					<h6>How it works:</h6>
					<p>
						- Page generator will fetch 5k entries per leaderboard due to the limit for one API call.
					</p>
					<p>
						- Some leaderboards are excluded because more than 5k players tied 1st, 2nd rank etc.
					</p>
					<p>
						- Users who tied the world record will be prioritized and cheaters with invalid scores will be ignored.
					</p>
					<br>
					<h6>Made with <a class=""link"" href=""https://github.com/NeKzor/SteamCommunity.Net"">SteamCommunity.Net</a></h6>
					<br>
					<h6>Number of detected cheaters: {_stats.Cheaters.Count}</h6>
                    <br>
					<h6>Last Update: {DateTime.UtcNow.ToString("yyyy-MM-dd HH:mm:ss '(UTC)'")}</h6>
				</div>
			</div>
		</div>
		<div id=""profiles"">
{string.Join("\n", profileRows)}
		</div>
		<script src=""https://code.jquery.com/jquery-3.3.1.min.js"" integrity=""sha256-FgpCb/KJQlLNfOu91ta32o/NMZxltwRo8QtmkMRdAu8="" crossorigin=""anonymous""></script>
		<script src=""https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0-alpha.4/js/materialize.min.js""></script>
		<script>
			$(document).ready(function(){{
				$('.tabs').tabs();
				$('.sidenav').sidenav();
				$('.modal').modal();
			}});
		</script>
		<script src=""https://cdnjs.cloudflare.com/ajax/libs/list.js/1.5.0/list.min.js""></script>
		<script>
			var records = new List('records', {{ valueNames: [ 'map', 'portals' ] }});

			function updateFilter() {{
				var filter = [];
				if (document.getElementById(""cbx-map"").checked) filter.push(""map"");
				if (document.getElementById(""cbx-portals"").checked) filter.push(""portals"");
				records.valueNames = filter;
				records.search();
				records.reIndex();
				records.search(document.getElementById(""search-box"").value);
			}}
		</script>
	</body>
</html>";
        }
        private string FillRow(Player player, IPublicProfile profile, int possible, int rank, Portal2MapType mode)
        {
            var stats = (player.GetTotalScore(mode) - possible != 0) ? $" ({possible}+{player.GetTotalScore(mode) - possible})" : string.Empty;
            return
$@"							<tr class=""white-text modal-trigger"" href=""#{profile.Id}"">
								<td class=""valign-wrapper"">
									<img class=""circle responsive-img"" src=""{profile.AvatarIcon}"">
									&nbsp;&nbsp;&nbsp;{profile.Name}
								</td>
								<td title=""{(int)(((double)possible / player.GetTotalScore(mode)) * 100)}%{stats}"">{player.GetTotalScore(mode)}</td>
							</tr>";
        }
        private string FillProfileRow(Player player, IPublicProfile profile)
        {
            var rows = new List<string>();
            foreach (var entry in player.Entries)
            {
                var map = _wrs.First(x => (ulong)x.Id == entry.Id);
                var delta = (entry.Score - map.WorldRecord) ?? 0;
                rows.Add
                (
$@"									<tr>
										<th><a class=""steam-link"" href=""https://steamcommunity.com/stats/Portal2/leaderboards/{map.Id}"">{map.Name}</a></th>
										<th>{((entry.Score == default) ? "Unknown" : $"{entry.Score}")}</th>
										<th>{((delta == 0) ? "-" : $"+{delta}")}</th>
									</tr>"
                    );
            }

            return
$@"			<div id=""{profile.Id}"" class=""modal blue-grey darken-3"">
				<div class=""modal-content"">
					<div class=""valign-wrapper"">
						<img class=""circle responsive-img"" src=""{profile.AvatarIcon}"">
						<a class=""white-text"" href=""https://steamcommunity.com/profiles/{profile.Id}"">&nbsp;&nbsp;&nbsp;{profile.Name}</a></td>
					</div>
					<br>
					<div class=""row"">
						<div class=""col s10 push-s1"">
							<table>
								<thead>
									<tr>
										<th>Map</th>
										<th>Portals</th>
										<th>ΔWR</th>
									</tr>
								</thead>
								<tbody>
{string.Join("\n", rows)}
								</tbody>
							</table>
						</div>
					</div>
				</div>
			</div>";
        }
        private string FillRecordRow(Map map, int ties)
        {
            var youtube = "https://www.youtube.com/results?search_query=Portal+2+"
                + map.Name.Replace(' ', '+')
                + "+in+" + map.WorldRecord + "+Portal" + ((map.WorldRecord == 1) ? string.Empty : "s");
            return
$@"							<tr>
								<th><a class=""steam-link map"" href=""https://steamcommunity.com/stats/Portal2/leaderboards/{map.Id}"">{map.Name}</a></th>
								<th class=""portals"">{map.WorldRecord}</th>
								<th>{((ties != 0) ? $"{ties:N0}" : "-")}</th>
								<th><a class=""btn-floating waves-effect waves-light red"" title=""Search Record on YouTube"" href=""{youtube}"" target=""_blank""><i class=""material-icons"">play_arrow</i></a></td></th>
							</tr>";
        }
    }
}
