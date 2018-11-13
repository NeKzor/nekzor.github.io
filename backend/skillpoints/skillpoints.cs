using System;
using System.Threading.Tasks;

namespace nekzor.github.io
{
    internal class App
    {
        public static readonly string Version = "nekzor.github.io/1.0";
        public static readonly string Destination = $"{System.IO.Path.GetDirectoryName(typeof(App).Assembly.Location)}/../../";

        private static async Task Main(string[] args)
        {
            Logger.Log($"Version: {Version}");
            Logger.Log($"Destination: {Destination}");

            var builder = new WebPageBuilder(Version);

            await builder.Fetch(30);
            await builder.Build("skill.html", 30);
        }
    }
}
