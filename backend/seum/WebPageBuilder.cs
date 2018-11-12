using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Threading.Tasks;
using Newtonsoft.Json;
using Portal2Boards;
using Portal2Boards.Extensions;
using SteamCommunity;

namespace nekzor.github.io
{
    /*
        Klooger Today at 08:31
        @NeKz can you alter those leaderboards you used to use this formula? its the one we currrently use in seum
        
        def calculate_score(rank1_time, rank10_time, player_rank, player_time):
            if (player_time == rank1_time):
                level_score = 10000
            else:
                level_score = (int(((((rank1_time / player_time) / (1.007 - (rank1_time / player_time)) * (
                    rank10_time / rank1_time)) / 1.4425 / 1.75) + (100 / (player_rank / 1.375) * 1.8)) * 50))
            return (level_score)
    */

    internal class WebPageBuilder
    {
        private IStatsLeaderboard _game;
        private List<Player> _players;
        private IEnumerable<Portal2Map> _campaign;
        private Dictionary<ulong, ScoreItem> _scores;

        private readonly SteamCommunityClient _steam;
        private readonly Portal2BoardsClient _iverb;

        public WebPageBuilder(string userAgent)
        {
            _players = new List<Player>();
            _scores = new Dictionary<ulong, ScoreItem>();

            _steam = new SteamCommunityClient(userAgent, true);
            _steam.Log += Logger.LogSteamCommunityClient;

            _iverb = new Portal2BoardsClient(userAgent, true);
            _iverb.Log += Logger.LogPortal2BoardsClient;

            var excluded = new List<ulong>()
            {
                47817, // Propulsion Catch
            };
            _campaign = Portal2.CampaignMaps
                .Where(x => x.IsOfficial)
                .Where(x => !excluded.Contains((ulong)x.BestTimeId));
        }

        private (decimal, decimal) GetRankTimes(uint id)
        {
            return (_scores[id].Ranks.First(), _scores[id].Ranks.ElementAt(9));
        }
        public int GetPoints(uint chamberId, decimal playerTime, decimal playerRank)
        {
            // Algorithm
            var (rankOneTime, rankTenTime) = GetRankTimes(chamberId);
            return (rankOneTime == playerTime)
                ? (int)10000
                : (int)(((((rankOneTime / playerTime)
                    / (1.007m - (rankOneTime / playerTime))
                        * (rankTenTime / rankOneTime))
                            / 1.4425m / 1.75m)
                                + (100 / (playerRank / 1.375m) * 1.8m))
                                    * 50m);
        }

        public async Task Dump()
        {
            var file = "dump.csv";
            if (File.Exists(file))
                File.Delete(file);

            var dump = new Dump();
            _scores.Clear();

            foreach (var mapId in _campaign
                .Select(m => (ulong)m.BestTimeId))
            {
                var cache = $"{App.Cache}seum_{mapId}.json";
                var item = JsonConvert.DeserializeObject<ScoreItem>(await File.ReadAllTextAsync(cache));
                Logger.Log($"{mapId} -> {item.Ranks.First()} & {item.Ranks.ElementAt(9)}");

                _scores.Add(mapId, item);

                var lastscore = 0u;
                var scores = new List<(uint, int)>();
                var rank = 0;
                foreach (var score in item.Ranks)
                {
                    if (lastscore != score)
                    {
                        scores.Add((score, GetPoints((uint)mapId, score, ++rank)));
                    }
                    lastscore = score;
                }
                dump.Data.Add(mapId, new DumpItem() { ItemData = scores });
            }

            await File.WriteAllTextAsync(file, dump.ToString());

            var minranks = dump.Data.Min(x => x.Value.ItemData.Count);
            var max = dump.Data.First();
            var min = dump.Data.First();
            var maxavg = max.Value.Average(minranks);
            var minavg = maxavg;
            foreach (var data in dump.Data.Skip(1))
            {
                if (data.Value.Average(minranks) > maxavg)
                {
                    maxavg = data.Value.Average(minranks);
                    max = data;
                }
                if (data.Value.Average(minranks) < minavg)
                {
                    minavg = data.Value.Average(minranks);
                    min = data;
                }
            }

            Logger.Log($"From Rank 1-{minranks}:");
            Logger.Log($"MaxAvg = {maxavg} ({Portal2Map.Search(max.Key).Alias})");
            Logger.Log($"MinAvg = {minavg} ({Portal2Map.Search(min.Key).Alias})");
        }
        public async Task Fetch(int max = 5)
        {
            _game = await _steam.GetLeaderboardsAsync("Portal 2");
            Logger.Log("Fetched Portal 2 leaderboard");

            _scores.Clear();

            // Fetch all rank times
            foreach (var mapId in _campaign
                .Select(m => (ulong)m.BestTimeId))
            {
                var cache = $"{App.Cache}seum_{mapId}.json";
                var score = default(ScoreItem);
                var logmsg = string.Empty;
                if (!File.Exists(cache)
                    || (score = JsonConvert.DeserializeObject<ScoreItem>(await File.ReadAllTextAsync(cache))) == null)
                {
                    score = new ScoreItem()
                    {
                        Ranks = new List<uint>()
                    };

                    var leaderboard = await _iverb.GetChamberAsync(mapId);
                    var rank = 0;
                    foreach (var entry in leaderboard.Entries)
                    {
                        if (rank == 200)
                            break;

                        if (rank + 1 == entry.ScoreRank)
                        {
                            rank++;
                            score.Ranks.Add((uint)entry.Score);
                        }
                    }

                    await File.WriteAllTextAsync(cache, JsonConvert.SerializeObject(score, Formatting.Indented));
                    await Task.Delay(1337);
                    logmsg = "[DOWNLOADED] ";
                }
                else
                {
                    score = JsonConvert.DeserializeObject<ScoreItem>(await File.ReadAllTextAsync(cache));
                    logmsg = "[FROM CACHE] ";
                }
                Logger.Log($"{logmsg}{mapId} -> {score.Ranks.First()} & {score.Ranks.ElementAt(9)}");
                _scores.Add(mapId, score);
            }

            // Local function
            async Task InternalFetch(AggregatedMode mode)
            {
                var entries = await _iverb.GetAggregatedAsync(mode);
                Logger.Log($"Fetched aggregated leaderboard: {mode}");
                foreach (var entry in entries.Points.Take(max))
                {
                    var id = (entry.Player as SteamUser).Id;
                    if (_players.Any(p => p.Id == id)) continue;

                    var profile = await _iverb.GetProfileAsync(id);
                    var player = new Player(profile, _campaign);

                    Logger.Log($"[{player.Id}] {player.Name}");

                    // Merge all chapters
                    var chapters = profile.Times.SinglePlayerChapters.Chambers
                        .ToDictionary(x => x.Key, x => x.Value);
                    foreach (var chapter in profile.Times.CooperativeChapters.Chambers)
                    {
                        chapters.Add(chapter.Key, chapter.Value);
                    }

                    foreach (var chapter in chapters
                        .Select(x => x.Value))
                    {
                        foreach (var (chamberId, playerTime, playerRank) in chapter.Data
                            .Select(x => (x.Key, (decimal)(x.Value.Score ?? 0), (decimal)(x.Value.ScoreRank ?? 0))))
                        {
                            if (_campaign.Any(x => x.BestTimeId == chamberId))
                            {
                                if (playerRank != 0)
                                {
                                    player.Update(chamberId, GetPoints(chamberId, playerTime, playerRank));
                                }
                            }
                        }
                    }
                    player.CalculateTotalScore();
                    _players.Add(player);
                }

                // Some rate limit I guess (or we quickly get 500 internal server error xd)
                await Task.Delay(1337);
            }

            await InternalFetch(AggregatedMode.SinglePlayer);
            await InternalFetch(AggregatedMode.Cooperative);

            Logger.Log($"Fetched {_players.Count} profiles!");
        }
        public async Task Build(string file, int max = 10)
        {
            Logger.Log("Building page...");
            if (File.Exists(App.Destination + file)) File.Delete(App.Destination + file);

            // Local function 1
            Task<List<string>> BuildRows(IEnumerable<Player> players, int perfectScore, Portal2MapType mode)
            {
                var rank = 0;
                var current = 0m;
                var rows = new List<string>();
                foreach (var player in players
                    .OrderByDescending(p => p.GetTotalScore(mode))
                    .ThenBy(p => p.Id))
                {
                    if (current != player.GetTotalScore(mode))
                    {
                        rank++;
                        if (rank > max) break;
                        current = player.GetTotalScore(mode);
                    }

                    rows.Add(FillRow(player, perfectScore, rank, mode));
                }
                return Task.FromResult(rows);
            }
            // Local function 2
            Task<List<string>> BuildProfileRows(IEnumerable<Player> players)
            {
                var rows = new List<string>();
                foreach (var player in players)
                {
                    rows.Add(FillProfileRow(player));
                }
                return Task.FromResult(rows);
            }

            var maxsp = Portal2.CampaignMaps
                .Where(x => x.Type == Portal2MapType.SinglePlayer && x.IsOfficial)
                .Sum(x => 10000);
            var maxmp = Portal2.CampaignMaps
                .Where(x => x.Type == Portal2MapType.Cooperative && x.IsOfficial)
                .Sum(x => 10000);

            var sp = await BuildRows(_players.Where(p => p.IsSinglePlayer), (int)maxsp, Portal2MapType.SinglePlayer);
            var mp = await BuildRows(_players.Where(p => p.IsCooperative), (int)maxmp, Portal2MapType.Cooperative);
            var ov = await BuildRows(_players.Where(p => p.IsOverall), (int)(maxsp + maxmp), Portal2MapType.Unknown);
            var pr = await BuildProfileRows(_players);

            await File.WriteAllTextAsync(App.Destination + file, GetPage(sp, mp, ov, pr));
            Logger.Log($"Done: {file}");
        }

        private string GetPage(
            IEnumerable<string> singlePlayerRows,
            IEnumerable<string> cooperativeRows,
            IEnumerable<string> overallRows,
            IEnumerable<string> profileRows)
        {
            return
$@"<!-- {App.Version} -->
<!DOCTYPE html>
<html>
	<head>
		<title>SEUM | nekzor.github.io</title>
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
                    <a href=""seum.html"">SEUM</a>
                </div>
                <div class=""col s12 hide-on-med-and-up"">
                    <a href=""#"" data-target=""slide-out"" class=""sidenav-trigger""><i class=""material-icons"">menu</i></a>
                    <a href=""seum.html"" class=""brand-logo center"">SEUM</a>
                </div>
			</div>
			<div class=""nav-content"">
				<ul class=""tabs tabs-transparent"">
					<li class=""tab""><a href=""#sp"">Single Player</a></li>
					<li class=""tab""><a href=""#mp"">Cooperative</a></li>
					<li class=""tab""><a href=""#all"">Overall</a></li>
					<li class=""tab""><a href=""#about"">About</a></li>
				</ul>
			</div>
		</nav>
		<ul id=""slide-out"" class=""sidenav"">
            <li><a href=""index.html"">nekzor.github.io</a></li>
            <li><a href=""stats.html"">Statistics</a></li>
            <li><a href=""history.html"">History</a></li>
            <li><a href=""skill.html"">Skill Points</a></li>
            <li><a href=""seum.html"">SEUM</a></li>
            <li><a href=""yearly.html"">Yearly</a></li>
        </ul>
		<div id=""sp"">
			<div class=""row"">
				<div class=""col s12 m12 l8 push-l2"">
					<table>
						<thead>
							<tr>
								<th>Player</th>
								<th title=""Excluding Propulsion Catch"">Points<sup>1</sup></th>
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
					<small><sup>1</sup> Excluding Propulsion Catch.</small>
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
								<th>Points</th>
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
								<th>Points<sup>1</sup></th>
							</tr>
						</thead>
						<tbody>
{string.Join("\n", overallRows)}
						</tbody>
					</table>
				</div>
			</div>
            <div class=""row"">
				<div class=""col s12"" align=""center"">
					<small><sup>1</sup> Excluding Propulsion Catch.</small>
				</div>
			</div>
		</div>
		<div id=""about"">
			<div class=""row""></div>
			<div class=""row"">
				<div class=""col s12 m12 l8 push-l2"">
					<h3>SEUM Points Calculation</h3>
                    <br>
					<img src=""images/algorithm.png"" />
                    <h6>
                        *First rank gets 10,000 points.
                    </h6>
                    <br>
					<br>
					<h6>Made with <a class=""link"" href=""https://github.com/NeKzor/SteamCommunity.Net"">SteamCommunity.Net</a> and <a class=""link"" href=""https://github.com/NeKzor/Portal2Boards.Net"">Portal2Boards.Net</a></h6>
					<br>
					<h6>Number of calculated profiles: {_players.Count}</h6>
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
	</body>
</html>";
        }
        private string FillRow(Player player, int possible, int rank, Portal2MapType mode)
        {
            var total = player.GetTotalScore(mode);
            var delta = possible - total;
            var stats = (delta != 0)
                ? $" ({possible:N0} - {delta:N0})"
                : string.Empty;
            return
$@"							<tr class=""white-text modal-trigger"" href=""#{player.Id}"">
								<td class=""valign-wrapper"">
									<img class=""circle responsive-img"" src=""{player.Avatar}"">
									&nbsp;&nbsp;&nbsp;{player.Name}
								</td>
								<td title=""{(int)((total / (decimal)possible) * 100)}%{stats}"">{total:N0}</td>
							</tr>";
        }
        private string FillProfileRow(Player player)
        {
            var rows = new List<string>();
            foreach (var entry in player.Entries)
            {
                var map = _campaign.First(m => m.BestTimeId == entry.Id);
                var ptb = 10000;
                var delta = ptb - entry.Score;
                rows.Add
                (
$@"									<tr>
										<th><a class=""steam-link"" href=""https://steamcommunity.com/stats/Portal2/leaderboards/{map.BestTimeId}"">{map.Alias}</a></th>
										<th>{((entry.Score == default) ? "Unknown" : $"{entry.Score:N0}")}</th>
										<th>{((delta > 0) ? $"-{delta:N0}" : "0")}</th>
									</tr>"
                    );
            }

            return
$@"			<div id=""{player.Id}"" class=""modal blue-grey darken-3"">
				<div class=""modal-content"">
					<div class=""valign-wrapper"">
						<img class=""circle responsive-img"" src=""{player.Avatar}"">
						<a class=""white-text"" href=""https://steamcommunity.com/profiles/{player.Id}"">&nbsp;&nbsp;&nbsp;{player.Name}</a></td>
					</div>
					<br>
					<div class=""row"">
						<div class=""col s10 push-s1"">
							<table>
								<thead>
									<tr>
										<th>Map</th>
										<th>Points</th>
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
    }
}
