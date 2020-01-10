//#define EOYS
using System;
using System.Threading.Tasks;
using Portal2Boards;

namespace nekzor.github.io
{
    internal static class Logger
    {
        public static void Log(string message)
        {
            Console.WriteLine($"[{DateTime.UtcNow.ToString("yyyy-MM-dd HH:mm:ss")}] [iverb] {message}");
        }
        public static Task LogPortal2Boards(object _, LogMessage message)
        {
            Log(message.ToString());
            return Task.CompletedTask;
        }
    }

    internal static class iVerb
    {
        public static Portal2BoardsClient Client;
        public static ChangelogQueryBuilder ChangelogBuilder;
    }

    internal static class App
    {
        public static readonly int CurrentYear = 2020;
        public static readonly string Version = "nekzor.github.io/1.0";
        public static readonly string Destination = $"{System.IO.Path.GetDirectoryName(typeof(App).Assembly.Location)}/../../";

        private static async Task Main()
        {
            Logger.Log($"Version: {Version}");
            Logger.Log($"Destination: {Destination}");

            iVerb.Client = new Portal2BoardsClient(Version, true, 15);
            iVerb.Client.Log += Logger.LogPortal2Boards;
            iVerb.ChangelogBuilder = new ChangelogQueryBuilder();
#if EOYS
            iVerb.ChangelogBuilder.WithMaxDaysAgo(400);
#else
            iVerb.ChangelogBuilder.WithMaxDaysAgo(3333);
#endif

            var stats = new Stats();
            await stats.Build();
            await stats.ExportPage("stats.html");

#if !EOYS
            var history = new History();
            await history.Build();
            await history.ExportPage("history.html");

            var yearly = new Yearly();
            await yearly.Build();
            await yearly.ExportPage("yearly.html");
#endif
        }
    }
}
