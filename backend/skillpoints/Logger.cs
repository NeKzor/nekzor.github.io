using System;
using System.Threading.Tasks;
using Portal2Boards;
using SteamCommunity;

namespace nekzor.github.io
{
    internal static class Logger
    {
        public static void Log(string message)
        {
            Console.WriteLine($"[{DateTime.UtcNow.ToString("yyyy-MM-dd HH:mm:ss")}] [skillpoints] {message}");
        }
        public static Task LogSteamCommunityClient(object _, SteamCommunity.LogMessage message)
        {
            Log(message.ToString());
            return Task.CompletedTask;
        }
        public static Task LogPortal2BoardsClient(object _, Portal2Boards.LogMessage message)
        {
            Log(message.ToString());
            return Task.CompletedTask;
        }
    }
}
