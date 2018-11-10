using System;
using System.Threading.Tasks;

namespace nekzor.github.io
{
    internal class App
    {
        public static readonly string Version = "nekzor.github.io/1.0";
        public static readonly string Destination = "../../";

        private static async Task Main(string[] args)
        {
            var builder = new WebPageBuilder(Version);

            await builder.Fetch(30);
            await builder.Build("skill.html", 30);
        }
    }
}
