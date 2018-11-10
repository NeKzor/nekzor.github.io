using System.Collections.Generic;
using System.Linq;
using Newtonsoft.Json;
using Portal2Boards;
using Portal2Boards.Extensions;

namespace nekzor.github.io
{
    internal class Player
    {
        [JsonProperty("id")]
        public ulong Id { get; set; }
        [JsonProperty("name")]
        public string Name { get; set; }
        [JsonProperty("avatar")]
        public string Avatar { get; set; }
        [JsonProperty("entries")]
        public List<ScoreEntry> Entries { get; set; }

        [JsonIgnore]
        private decimal _singlePlayerScore { get; set; }
        [JsonIgnore]
        private decimal _cooperativeScore { get; set; }
        [JsonIgnore]
        private decimal _totalScore => _singlePlayerScore + _cooperativeScore;

        [JsonIgnore]
        public bool IsSinglePlayer => _singlePlayerScore != default;
        [JsonIgnore]
        public bool IsCooperative => _cooperativeScore != default;
        [JsonIgnore]
        public bool IsOverall => IsSinglePlayer && IsCooperative;

        private Player()
        {
            Entries = new List<ScoreEntry>();
        }
        public Player(IProfile profile, IEnumerable<Portal2Map> campaign) : this()
        {
            Id = (profile as IEntity<ulong>).Id;
            Name = profile.DisplayName;
            Avatar = (profile.SteamAvatarUrl.EndsWith("_full.jpg"))
                ? profile.SteamAvatarUrl.Substring(0, profile.SteamAvatarUrl.Length - "_full.jpg".Length)
                    + ".jpg"
                : profile.SteamAvatarUrl;

            foreach (var map in campaign)
            {
                Entries.Add(new ScoreEntry()
                {
                    Id = (ulong)map.BestTimeId,
                    Mode = map.Type
                });
            }
        }

        public void Update(uint id, decimal score)
        {
            Entries.First(x => x.Id == (ulong)id).Score = score;
        }
        public void CalculateTotalScore()
        {
            _singlePlayerScore = Entries
                .Where(e => e.Mode == Portal2MapType.SinglePlayer)
                .Sum(e => e.Score);
            _cooperativeScore = Entries
                .Where(e => e.Mode == Portal2MapType.Cooperative)
                .Sum(e => e.Score);
        }
        public decimal GetTotalScore(Portal2MapType mode)
        {
            switch (mode)
            {
                case Portal2MapType.SinglePlayer:
                    return _singlePlayerScore;
                case Portal2MapType.Cooperative:
                    return _cooperativeScore;
            }
            return _singlePlayerScore + _cooperativeScore;
        }
    }
}
