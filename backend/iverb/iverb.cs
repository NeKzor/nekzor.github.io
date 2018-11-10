using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.Linq;
using System.Threading.Tasks;
using Portal2Boards;
using Portal2Boards.API;
using Portal2Boards.Extensions;
using static System.Console;

namespace nekzor.github.io
{
    internal static class Logger
    {
        public static Task LogPortal2Boards(object _, LogMessage message)
        {
            WriteLine(message.ToString());
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
        public static readonly string Version = "nekzor.github.io/1.0";
        public static readonly string Destination = "../../";

        private static async Task Main()
        {
            iVerb.Client = new Portal2BoardsClient(Version, true, 15);
            iVerb.Client.Log += Logger.LogPortal2Boards;
            iVerb.ChangelogBuilder = new ChangelogQueryBuilder();
            iVerb.ChangelogBuilder.WithMaxDaysAgo(3333);

            var stats = new Stats();
            await stats.Build();
            await stats.ExportPage("stats.html");
        
            var history = new History();
            await history.Build();
            await history.ExportPage("history.html");

            var yearly = new Yearly();
            await yearly.Build();
            await yearly.ExportPage("yearly.html");
        }
    }
}
