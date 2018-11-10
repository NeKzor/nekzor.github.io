using Newtonsoft.Json;

namespace nekzor.github.io
{
    internal class ScoreItem
    {
        [JsonProperty("ranks")]
        public System.Collections.Generic.List<uint> Ranks { get; set; }
    }
}
