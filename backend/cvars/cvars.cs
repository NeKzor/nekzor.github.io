using System;
using System.Collections.Generic;
using System.Collections.Concurrent;
using System.Linq;
using System.Threading.Tasks;
using System.Web;

namespace nekzor.github.io
{
    internal class App
    {
        public static readonly string Version = "nekzor.github.io/1.0";
        public static readonly string Destination = "../../cvars/";
        public static readonly string Data = "../data/";

        internal static async Task Main()
        {
            var builder = new PageBuilder(OperatingSystem.Linux);
            var windows = new PageBuilder(OperatingSystem.Windows);

            Console.WriteLine("Portal 2");
            await builder.Import("p2_linux.cvars");
            await windows.Import("p2_windows.cvars");
            //await builder.FindRealUnique(windows);
            await builder.MergeUnique(windows);
            await builder.Build("p2.html", "Portal 2", "P2");
            Console.WriteLine();

            Console.WriteLine("Half-Life 2");
            await builder.Import("hl2_linux.cvars");
            await windows.Import("hl2_windows.cvars");
            //await builder.FindRealUnique(windows);
            await builder.MergeUnique(windows);
            await builder.Build("hl2.html", "Half-Life 2", "HL2");
            Console.WriteLine();

            Console.WriteLine("The Stanley Parable");
            await builder.Import("tsp_linux.cvars");
            await windows.Import("tsp_windows.cvars");
            //await builder.FindRealUnique(windows);
            await builder.MergeUnique(windows);
            await builder.Build("tsp.html", "The Stanley Parable", "TSP");
            Console.WriteLine();

            Console.WriteLine("The Beginners Guide");
            await builder.Import("tbg_linux.cvars");
            await windows.Import("tbg_windows.cvars");
            //await builder.FindRealUnique(windows);
            await builder.MergeUnique(windows);
            await builder.Build("tbg.html", "The Beginners Guide", "TBG");
            Console.WriteLine();

            Console.WriteLine("Portal");
            await builder.Import("p1_linux.cvars");
            await windows.Import("p1_windows.cvars");
            //await builder.FindRealUnique(windows);
            await builder.MergeUnique(windows);
            await builder.Build("p1.html", "Portal", "P1");
            Console.WriteLine();
        }
    }

    [Flags]
    public enum FCVAR
    {
        NONE = 0,
        UNREGISTERED = (1 << 0), // 1
        DEVELOPMENTONLY = (1 << 1), // 2
        GAMEDLL = (1 << 2), // 4 (xx)
        CLIENTDLL = (1 << 3), // 8 (xx)
        HIDDEN = (1 << 4), // 16
        PROTECTED = (1 << 5), // 32 (xx)
        SPONLY = (1 << 6), // 64 (xx)
        ARCHIVE = (1 << 7), // 128 (xx)
        NOTIFY = (1 << 8), // 256 (xx)
        USERINFO = (1 << 9), // 512 (xx)
        PRINTABLEONLY = (1 << 10), // 1024 (xx)
        UNLOGGED = (1 << 11), // 2048 (xx)
        NEVER_AS_STRING = (1 << 12), // 4096 (xx)
        REPLICATED = (1 << 13), // 8192 (xx)
        CHEAT = (1 << 14), // 16384 (xx)
        SS = (1 << 14), // 32768 (x)
        DEMO = (1 << 16), // 65536 (xx)
        DONTRECORD = (1 << 17), // 131072 (xx)
        SS_ADDED = (1 << 18), // 262144 (x)
        RELEASE = (1 << 19), // ?
        RELOAD_MATERIALS = (1 << 20), // ?
        RELOAD_TEXTURES = (1 << 21), // ?
        NOT_CONNECTED = (1 << 22), // ?
        MATERIAL_SYSTEM_THREAD = (1 << 23), // ?
        ARCHIVE_XBOX = (1 << 24), // ?
        ACCESSIBLE_FROM_THREADS = (1 << 25), // ?
        NETWORKSYSTEM = (1 << 26), // ?
        VPHYSICS = (1 << 27), // ?
        SERVER_CAN_EXECUTE = (1 << 28), // 268435456 (xx)
        SERVER_CANNOT_QUERY = (1 << 29), // ?
        CLIENTCMD_CAN_EXECUTE = (1 << 30) // 1073741824 (xx)
    }

    public enum OperatingSystem
    {
        Windows,
        Linux,
        Both
    }

    public class Cvar
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public string DefaultValue { get; set; }
        public int FlagsValue { get; set; }
        public IEnumerable<string> Flags { get; set; }
        public OperatingSystem Os { get; set; }
        public string HelpText { get; set; }
    }

    public class PageBuilder
    {
        public List<Cvar> Cvars { get; set; }
        public OperatingSystem Os { get; set; }

        public PageBuilder(OperatingSystem os)
        {
            Cvars = new List<Cvar>();
            Os = os;
        }

        public Task FindRealUnique(PageBuilder source)
        {
            var unique = new List<Cvar>();
            foreach (var match in source.Cvars)
            {
                var found = Cvars.FirstOrDefault(c => c.Name == match.Name);
                if (found != null && found.DefaultValue != match.DefaultValue)
                {
                    Console.Write($"{found.Name} -> ");
                    Console.Write($"{source.Os.ToString()}:{match.DefaultValue} ");
                    Console.Write($"{Os.ToString()}:{found.DefaultValue}");
                    Console.WriteLine();
                    unique.Add(match);
                }
            }

            Console.WriteLine($"Found {unique.Count} real unique cvars.");
            return Task.CompletedTask;
        }

        public Task MergeUnique(PageBuilder source)
        {
            var unique = new List<Cvar>();
            foreach (var match in source.Cvars)
            {
                if (Cvars.FirstOrDefault(c => c.Name == match.Name) == null)
                {
                    Console.WriteLine($"[{source.Os.ToString()}] {match.Name}");
                    match.Os = source.Os;
                    unique.Add(match);
                }
            }
            foreach (var match in Cvars)
            {
                if (source.Cvars.FirstOrDefault(c => c.Name == match.Name) == null)
                {
                    Console.WriteLine($"[{Os.ToString()}] {match.Name}");
                    match.Os = Os;
                }
            }

            Cvars.AddRange(unique);
            Console.WriteLine($"Merged {unique.Count} cvars.");
            return Task.CompletedTask;
        }

        public Task Import(string file)
        {
            Cvars.Clear();

            using (var fs = System.IO.File.OpenRead(App.Data + file))
            using (var sr = new System.IO.StreamReader(fs))
            {
                var text = sr.ReadToEnd();
                foreach (var cvar in text.Split(new string[] { "[end_of_cvar]" }, StringSplitOptions.RemoveEmptyEntries))
                {
                    var values = cvar.Split(new string[] { "[cvar_data]" }, StringSplitOptions.None);
                    if (values.Length != 4)
                        break;

                    var flags = new List<string>();
                    var flagsval = (FCVAR)int.Parse(values[2]);
                    if (flagsval.HasFlag(FCVAR.UNREGISTERED)) flags.Add("UNREGISTERED");
                    if (flagsval.HasFlag(FCVAR.DEVELOPMENTONLY)) flags.Add("DEVELOPMENTONLY");
                    if (flagsval.HasFlag(FCVAR.GAMEDLL)) flags.Add("GAMEDLL");
                    if (flagsval.HasFlag(FCVAR.CLIENTDLL)) flags.Add("CLIENTDLL");
                    if (flagsval.HasFlag(FCVAR.HIDDEN)) flags.Add("HIDDEN");
                    if (flagsval.HasFlag(FCVAR.PROTECTED)) flags.Add("PROTECTED");
                    if (flagsval.HasFlag(FCVAR.SPONLY)) flags.Add("SPONLY");
                    if (flagsval.HasFlag(FCVAR.ARCHIVE)) flags.Add("ARCHIVE");
                    if (flagsval.HasFlag(FCVAR.NOTIFY)) flags.Add("NOTIFY");
                    if (flagsval.HasFlag(FCVAR.USERINFO)) flags.Add("USERINFO");
                    if (flagsval.HasFlag(FCVAR.PRINTABLEONLY)) flags.Add("PRINTABLEONLY");
                    if (flagsval.HasFlag(FCVAR.UNLOGGED)) flags.Add("UNLOGGED");
                    if (flagsval.HasFlag(FCVAR.NEVER_AS_STRING)) flags.Add("NEVER_AS_STRING");
                    if (flagsval.HasFlag(FCVAR.REPLICATED)) flags.Add("REPLICATED");
                    if (flagsval.HasFlag(FCVAR.CHEAT)) flags.Add("CHEAT");
                    if (flagsval.HasFlag(FCVAR.SS)) flags.Add("SS");
                    if (flagsval.HasFlag(FCVAR.DEMO)) flags.Add("DEMO");
                    if (flagsval.HasFlag(FCVAR.DONTRECORD)) flags.Add("DONTRECORD");
                    if (flagsval.HasFlag(FCVAR.SS_ADDED)) flags.Add("SS_ADDED");
                    if (flagsval.HasFlag(FCVAR.RELEASE)) flags.Add("RELEASE");
                    if (flagsval.HasFlag(FCVAR.RELOAD_MATERIALS)) flags.Add("RELOAD_MATERIALS");
                    if (flagsval.HasFlag(FCVAR.RELOAD_TEXTURES)) flags.Add("RELOAD_TEXTURES");
                    if (flagsval.HasFlag(FCVAR.NOT_CONNECTED)) flags.Add("NOT_CONNECTED");
                    if (flagsval.HasFlag(FCVAR.MATERIAL_SYSTEM_THREAD)) flags.Add("MATERIAL_SYSTEM_THREAD");
                    if (flagsval.HasFlag(FCVAR.ARCHIVE_XBOX)) flags.Add("ARCHIVE_XBOX");
                    if (flagsval.HasFlag(FCVAR.ACCESSIBLE_FROM_THREADS)) flags.Add("ACCESSIBLE_FROM_THREADS");
                    if (flagsval.HasFlag(FCVAR.NETWORKSYSTEM)) flags.Add("NETWORKSYSTEM");
                    if (flagsval.HasFlag(FCVAR.VPHYSICS)) flags.Add("VPHYSICS");
                    if (flagsval.HasFlag(FCVAR.SERVER_CAN_EXECUTE)) flags.Add("SERVER_CAN_EXECUTE");
                    if (flagsval.HasFlag(FCVAR.SERVER_CANNOT_QUERY)) flags.Add("SERVER_CANNOT_QUERY");
                    if (flagsval.HasFlag(FCVAR.CLIENTCMD_CAN_EXECUTE)) flags.Add("CLIENTCMD_CAN_EXECUTE");

                    Cvars.Add(new Cvar()
                    {
                        Name = values[0],
                        DefaultValue = values[1],
                        FlagsValue = (int)flagsval,
                        Flags = flags.AsEnumerable(),
                        HelpText = values[3],
                        Os = OperatingSystem.Both
                    });
                }
            }

            return Task.CompletedTask;
        }

        public Task Build(string file, string title, string smallTitle)
        {
            if (System.IO.File.Exists(App.Destination + file))
                System.IO.File.Delete(App.Destination + file);

            using (var fs = System.IO.File.OpenWrite(App.Destination +  file))
            using (var sw = new System.IO.StreamWriter(fs))
            {
                sw.WriteLine(
$@"<!-- {App.Version} -->
<!DOCTYPE html>
<html>
	<head>
		<title>{title} Cvars | nekzor.github.io</title>
		<link href=""https://fonts.googleapis.com/css?family=Roboto"" rel=""stylesheet"">
		<link href=""https://fonts.googleapis.com/icon?family=Material+Icons"" rel=""stylesheet"">
		<link href=""https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0-alpha.4/css/materialize.min.css"" rel=""stylesheet"">
		<meta name=""viewport"" content=""width=device-width, initial-scale=1.0"" />
	</head>
	<body class=""white-text blue-grey darken-4"">
		<nav class=""nav-extended blue-grey darken-3"">
            <div class=""nav-wrapper"">
                <div class=""col s12 hide-on-small-only"">
                    <a href=""#"" data-target=""slide-out"" class=""sidenav-trigger show-on-large""><i class=""material-icons"">menu</i></a>
                    <a href=""../index.html"">&nbsp;&nbsp;&nbsp;nekzor.github.io</a>
                    <a class=""breadcrumb""></a>
                    <a href=""{file}"">{title} Cvars</a>
                </div>
                <div class=""col s12 hide-on-med-and-up"">
                    <a href=""#"" data-target=""slide-out"" class=""sidenav-trigger""><i class=""material-icons"">menu</i></a>
                    <a href=""{file}"" class=""brand-logo center"">{smallTitle}</a>
                </div>
            </div>
		</nav>
		<ul id=""slide-out"" class=""sidenav"">
			<li><a href=""../index.html"">nekzor.github.io</a></li>
			<li><a href=""{file}"">{title} Cvars</a></li>
		</ul>
		<div id=""cvars"">
			<div class=""row""></div>
			<div class=""row"">
				<div class=""col s12 m12 l3"">
					<input id=""search-box"" class=""search white-text"" placeholder=""Search"" />
				</div>
				<div class=""col s12 m12 l1"">
					<br>
					<label>
						<input id=""cbx-name"" type=""checkbox"" checked=""checked"" />
						<span>Name</span>
					</label>
				</div>
				<div class=""col s12 m12 l1"">
					<br>
					<label>
						<input id=""cbx-default"" type=""checkbox"" checked=""checked"" />
						<span>Default</span>
					</label>
				</div>
				<div class=""col s12 m12 l1"">
					<br>
					<label>
						<input id=""cbx-flags"" type=""checkbox"" checked=""checked"" />
						<span>Flags</span>
					</label>
				</div>
                <div class=""col s12 m12 l1"">
					<br>
					<label>
						<input id=""cbx-system"" type=""checkbox"" checked=""checked"" />
						<span>System</span>
					</label>
				</div>
				<div class=""col s12 m12 l1"">
					<br>
					<label>
						<input id=""cbx-help-text"" type=""checkbox"" checked=""checked"" />
						<span>Help Text</span>
					</label>
				</div>
			</div>
			<div class=""row"">
				<div class=""col s12"">
					<table>
						<thead>
							<tr>
								<th>Name</th>
								<th>Default</th>
								<th>Flags</th>
                                <th>System</th>
								<th>Help Text</th>
							</tr>
						</thead>
						<tbody class=""list"">");
                foreach (var cvar in Cvars.OrderBy(c => c.Name))
                {
                    var flags = (cvar.Flags.Any())
                        ? string.Join("<br>", cvar.Flags)
                        : "NONE";
                    var description = (!string.IsNullOrEmpty(cvar.HelpText))
                        ? HttpUtility.HtmlEncode(cvar.HelpText)
                        : "-";

                    sw.WriteLine(
$@"							<tr>
								<td class=""name"">{cvar.Name}</td>
								<td class=""default"">{cvar.DefaultValue}</td>
                                <td class=""flags"" title=""{cvar.FlagsValue}"">{flags}</td>
                                <td class=""system"">{ResolveSystem(cvar)}</td>
								<td class=""help-text"">{description}</td>
							</tr>");
                }

                sw.WriteLine(
$@"						</tbody>
					</table>
				</div>
			</div>
		</div>
		<script src=""https://code.jquery.com/jquery-3.3.1.min.js"" integrity=""sha256-FgpCb/KJQlLNfOu91ta32o/NMZxltwRo8QtmkMRdAu8="" crossorigin=""anonymous""></script>
		<script src=""https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0-alpha.4/js/materialize.min.js""></script>
		<script>
			$(document).ready(function() {{
				$('.sidenav').sidenav();
			}});
		</script>
		<script src=""https://cdnjs.cloudflare.com/ajax/libs/list.js/1.5.0/list.min.js""></script>
		<script>
			var cvars = new List('cvars', {{ valueNames: ['name', 'default', 'flags', 'system', 'help-text'] }});

            var cbxName = document.querySelector(""#cbx-name"");
            var cbxDefault = document.querySelector(""#cbx-default"");
            var cbxFlags = document.querySelector(""#cbx-flags"");
            var cbxSystem = document.querySelector(""#cbx-system"");
            var cbxHelpText = document.querySelector(""#cbx-help-text"");

            var filterTimeout = null;
            var updateFilter = () => {{
                clearTimeout(filterTimeout);
                filterTimeout = setTimeout(() => {{
                    var filter = [];
                    if (cbxName.checked) filter.push(""name"");
                    if (cbxDefault.checked) filter.push(""default"");
                    if (cbxFlags.checked) filter.push(""flags"");
                    if (cbxSystem.checked) filter.push(""system"");
                    if (cbxHelpText.checked) filter.push(""help-text"");
                    cvars.valueNames = filter;
                    cvars.search();
                    cvars.reIndex();
                    cvars.search(document.getElementById(""search-box"").value);
                }}, 500);
            }};

            cbxName.addEventListener('click', () => updateFilter(), null);
            cbxDefault.addEventListener('click', () => updateFilter(), null);
            cbxFlags.addEventListener('click', () => updateFilter(), null);
            cbxSystem.addEventListener('click', () => updateFilter(), null);
            cbxHelpText.addEventListener('click', () => updateFilter(), null);
		</script>
	</body>
</html>");
            }
            return Task.CompletedTask;
        }

        private string ResolveSystem(Cvar cvar)
        {
            switch (cvar.Os)
            {
                case OperatingSystem.Windows:
                    return "Windows";
                case OperatingSystem.Linux:
                    return "Linux";
                case OperatingSystem.Both:
                    return "-";
            }
            return string.Empty;
        }
    }
}
