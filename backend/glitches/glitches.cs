namespace nekzor.github.io
{
    internal class Discovery
    {
        public string Name { get; set; }
        public string Type { get; set; }
        public string Category { get; set; }
        public string Status { get; set; }
        public string Showcase { get; set; }
    }

    internal class Program
    {
        static void Main(string[] args)
        {
            const string destination = "../../glitches.html";
            const string research = "../research/discoveries.csv";

            var discoveries = new System.Collections.Generic.List<Discovery>();

            if (!System.IO.File.Exists(research))
                throw new System.Exception($"Reasearch file {research} does not exist!");

            using (var fs = System.IO.File.OpenRead(research))
            using (var sr = new System.IO.StreamReader(fs))
            {
                sr.ReadLine();
                while (!sr.EndOfStream)
                {
                    var values = sr.ReadLine().Split(',');
                    discoveries.Add(new Discovery()
                    {
                        Name = values[0],
                        Type = values[1],
                        Category = values[2],
                        Status = values[3],
                        Showcase = values[4]
                    });
                }
            }

            if (System.IO.File.Exists(destination))
                System.IO.File.Delete(destination);

            using (var fs = System.IO.File.OpenWrite(destination))
            using (var sw = new System.IO.StreamWriter(fs))
            {
                sw.WriteLine(
$@"<!DOCTYPE html>
<html>
	<head>
		<title>Glitches | nekzor.github.io</title>
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
                    <a href=""index.html"">&nbsp;&nbsp;&nbsp;nekzor.github.io</a>
                    <a class=""breadcrumb""></a>
                    <a href=""{output}"">Glitches</a>
                </div>
                <div class=""col s12 hide-on-med-and-up"">
                    <a href=""#"" data-target=""slide-out"" class=""sidenav-trigger""><i class=""material-icons"">menu</i></a>
                    <a href=""{output}"" class=""brand-logo center"">Glitches</a>
                </div>
            </div>
			<div class=""nav-content"">
				<ul class=""tabs tabs-transparent"">
					<li class=""tab""><a href=""#database"">Database</a></li>
					<li class=""tab""><a href=""#about"">About</a></li>
				</ul>
			</div>
		</nav>
		<ul id=""slide-out"" class=""sidenav"">
			<li><a href=""index.html"">nekzor.github.io</a></li>
			<li><a href=""{output}"">Glitches</a></li>
            <li><a href=""lp.html"">Least Portals</a></li>
		</ul>
		<div id=""database"">
			<div id=""discoveries"">
				<div class=""row""></div>
				<div class=""row"">
					<div class=""col s12 m12 l2 push-l2"">
						<input id=""search-box"" class=""search white-text"" placeholder=""Search"" />
					</div>
					<div class=""col s12 m12 l1 push-l2"">
						<br>
						<label>
							<input id=""cbx-name"" type=""checkbox"" checked=""checked"" onclick=""updateFilter()"" />
							<span>Name</span>
						</label>
					</div>
					<div class=""col s12 m12 l1 push-l2"">
						<br>
						<label>
							<input id=""cbx-type"" type=""checkbox"" checked=""checked"" onclick=""updateFilter()"" />
							<span>Type</span>
						</label>
					</div>
					<div class=""col s12 m12 l1 push-l2"">
						<br>
						<label>
							<input id=""cbx-category"" type=""checkbox"" checked=""checked"" onclick=""updateFilter()"" />
							<span>Category</span>
						</label>
					</div>
					<div class=""col s12 m12 l1 push-l2"">
						<br>
						<label>
							<input id=""cbx-status"" type=""checkbox"" checked=""checked"" onclick=""updateFilter()"" />
							<span>Status</span>
						</label>
					</div>
				</div>
				<div class=""database"">
					<div class=""row"">
						<div class=""col s12 m12 l8 push-l2"">
							<table>
								<thead>
									<tr>
										<th>Name</th>
										<th>Type</th>
										<th>Category</th>
										<th>Status</th>
										<th>Showcase</th>
									</tr>
								</thead>
								<tbody class=""list"">");
                foreach (var discovery in discoveries)
                {
                    sw.WriteLine(
$@"									<tr>
										<td class=""name"">{discovery.Name}</td>
										<td class=""type"">{discovery.Type}</td>
										<td class=""category"">{discovery.Category}</td>
										<td class=""status"">{discovery.Status}</td>
										<td class=""showcase"">&nbsp;&nbsp;&nbsp;<a class=""btn-floating waves-effect waves-light red"" title=""Watch Example Video""href=""{discovery.Showcase}"" target=""_blank""><i class=""material-icons"">play_arrow</i></a></td>
									</tr>");
                }
                sw.WriteLine(
$@"								</tbody>
							</table>
						</div>
					</div>
				</div>
			</div>
		</div>
		<div id=""about"">
			<div class=""row"">
				<div class=""row""></div>
				<div class=""row"">
					<div class=""col s12 m12 l10 push-l2"">
						<h3>Weird Stuff in the Portal 2 Engine</h3>
						<p>
							A collection of tricks and glitches, mostly useful for speedrunning. Every game needs a list like this, right?
						</p>
					</div>
				</div>
			</div>
		</div>
		<script src=""https://code.jquery.com/jquery-3.3.1.min.js"" integrity=""sha256-FgpCb/KJQlLNfOu91ta32o/NMZxltwRo8QtmkMRdAu8="" crossorigin=""anonymous""></script>
		<script src=""https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0-alpha.4/js/materialize.min.js""></script>
		<script>
			$(document).ready(function() {{
				$('.sidenav').sidenav();
				$('.tabs').tabs();
			}});
		</script>
		<script src=""https://cdnjs.cloudflare.com/ajax/libs/list.js/1.5.0/list.min.js""></script>
		<script>
			var discoveries = new List('discoveries', {{ valueNames: [ 'name', 'type', 'category', 'status' ] }});

			function updateFilter() {{
				var filter = [];
				if (document.getElementById(""cbx-name"").checked) filter.push(""name"");
				if (document.getElementById(""cbx-type"").checked) filter.push(""type"");
				if (document.getElementById(""cbx-category"").checked) filter.push(""category"");
				if (document.getElementById(""cbx-status"").checked) filter.push(""status"");
				discoveries.valueNames = filter;
				discoveries.search();
				discoveries.reIndex();
				discoveries.search(document.getElementById(""search-box"").value);
			}}
		</script>
	</body>
</html>");
            }
        }
    }
}
