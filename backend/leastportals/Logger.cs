using System;
using System.Threading.Tasks;
using SteamCommunity;

namespace nekzor.github.io
{
    internal static class Logger
    {
        public static void Log(string message)
        {
            Console.WriteLine($"[{DateTime.UtcNow.ToString("yyyy-MM-dd HH:mm:ss")}] [leastportals] {message}");
        }
        public static Task LogSteamCommunityClient(object _, SteamCommunity.LogMessage message)
        {
            Log(message.ToString());
            return Task.CompletedTask;
        }
    }
}
