using System.Collections.Generic;
using System.Linq;
using Portal2Boards.Extensions;

namespace nekzor.github.io
{
    internal class DumpItem
    {
        public List<(uint, int)> ItemData { get; set; }
        public double Average(int count) => ItemData.Take(count).Average(i => i.Item2);
    }
    internal class Dump
    {
        public Dictionary<ulong, DumpItem> Data { get; set; }

        public Dump() => Data = new Dictionary<ulong, DumpItem>();

        public override string ToString()
        {
            var dump = new List<string>();

            var row = "RANK";
            for (int i = 1; i <= 200; i++)
                row += $",{i}";
            dump.Add(row);

            foreach (var data in Data)
            {
                var map = Portal2Map.Search(data.Key);
                dump.Add($"{map.Alias},{string.Join(",", data.Value.ItemData.Select(v => v.Item2))}");
            }

            return string.Join("\n", dump);
        }
    }
}
