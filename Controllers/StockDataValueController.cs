using Microsoft.AspNetCore.Mvc;
using StocksApp.Entities;
using StocksApp.Services;

namespace StocksApp.Controllers
{
    [Route("api/stock-values")]
    [ApiController]
    public class StockDataValueController : ControllerBase
    {
        private readonly IJsonFileReader<StockDataValue> _jsonFileReader;
        private const string fileName = "Stock Values.json";

        public StockDataValueController(IJsonFileReader<StockDataValue> jsonFileReader)
        {
            _jsonFileReader = jsonFileReader ?? throw new ArgumentNullException(nameof(jsonFileReader));
        }

        [HttpGet("{id}")]
        public async Task<ActionResult<IEnumerable<StockDataValue>>> GetAsyc(int id)
        {
            var stockValues = await _jsonFileReader.ReadJsonAsync(fileName);

            return Ok(stockValues.Where(value => value.Stock_id == id));
        }
    }
}
