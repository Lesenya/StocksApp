using StocksApp.Utilities;
using System.Text.Json.Serialization;

namespace StocksApp.Entities
{
    public class StockDataValue
    {
        public int Stock_id { get; set; }

        [JsonConverter(typeof(DateOnlyJsonConverter))]
        public DateOnly Date { get; set; }
        public decimal Value { get; set; }
    }
}
