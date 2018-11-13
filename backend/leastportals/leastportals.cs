using System;
using System.Threading.Tasks;

namespace nekzor.github.io
{
    internal class App
    {
        public static readonly string Version = "nekzor.github.io/1.0";
        public static readonly string CurDir = $"{System.IO.Path.GetDirectoryName(typeof(App).Assembly.Location)}";
        public static readonly string Destination = $"{CurDir}/../../";
        public static readonly string Copy = $"{Destination}/backend/leastportals/";
        public static readonly string Cache = $"{CurDir}/cache/";

        private static async Task Main(string[] args)
        {
            Logger.Log($"Version: {Version}");
            Logger.Log($"Destination: {Destination}");

            System.IO.Directory.CreateDirectory(Cache);

            var builder = new WebPageBuilder(Version);

            await builder.Initialize();
            await builder.Filter();
            await builder.Export("lp_players.json");
            //await builder.Import("lp_players.json");
            await builder.Build("lp.html", 20);
        }
    }
}
