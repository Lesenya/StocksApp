using System.Text.Json;

namespace StocksApp.Services
{
    public class JsonFileReader<T> : IJsonFileReader<T> where T : class
    {
        public async Task<IEnumerable<T>> ReadJsonAsync(string fileName)
        {
            var dataDirectory = Path.Combine(Directory.GetCurrentDirectory(), "Data");
            var filePath = Path.Combine(dataDirectory, fileName);

            var options = new JsonSerializerOptions
            {
                PropertyNameCaseInsensitive = true
            };
            using FileStream stream = File.OpenRead(filePath);

            return await JsonSerializer.DeserializeAsync<IEnumerable<T>>(stream, options);
        }
    }

    public interface IJsonFileReader<T>
    {
        Task<IEnumerable<T>> ReadJsonAsync(string fileName);
    }
}
