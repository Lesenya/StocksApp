using Microsoft.AspNetCore.Mvc;
using StocksApp.Entities;
using StocksApp.Services;

namespace StocksApp.Controllers
{
    [Route("api/stocks")]
    [ApiController]
    public class StockDataController : ControllerBase
    {
        private readonly IJsonFileReader<StockData> _jsonFileReader;
        private const string fileName = "Stocks.json";

        public StockDataController(IJsonFileReader<StockData> jsonFileReader)
        {
            _jsonFileReader = jsonFileReader ?? throw new ArgumentNullException(nameof(jsonFileReader));
        }

        public async Task<ActionResult<IEnumerable<StockData>>> GetAsyc()
        {
            var stocks = await _jsonFileReader.ReadJsonAsync(fileName);
            return Ok(stocks);
        }

        [HttpGet("{id}")]
        public async Task<ActionResult<StockData>> GetAsyc(int id)
        {
            var stocks = await _jsonFileReader.ReadJsonAsync(fileName);
            return Ok(stocks.FirstOrDefault(x => x.Id == id));
        }
    }
}
