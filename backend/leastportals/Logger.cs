using System;
using System.Threading.Tasks;
using SteamCommunity;

namespace nekzor.github.io
{
    internal static class Logger
    {
        public static Task LogSteamCommunityClient(object _, LogMessage message)
        {
            Console.WriteLine(message);
            return Task.CompletedTask;
        }
    }
}
