using Finstock.Api.DTOs.Stock;
using Finstock.Api.Interfaces;
using Finstock.Api.Mappers;
using Finstock.Api.Models;
using System.Security.Cryptography.X509Certificates;
using System.Text.Json;
using System.Text.Json.Serialization;

namespace Finstock.Api.Services
{
    public class FMPService : IFMPService
    {
        private readonly HttpClient _httpClient;
        private readonly IConfiguration _configuration;
        public FMPService(HttpClient httpClient,IConfiguration configuration)
        {
            _httpClient = httpClient;
            _configuration = configuration;      
        }
        public async Task<Stock> GetStockFromFMP(string symbol)
        {
            try
            {
                var result = await _httpClient.GetAsync($"https://financialmodelingprep.com/api/v3/profile/{symbol}?apikey={_configuration["FMPKey"]}");
                if (result.IsSuccessStatusCode)
                {
                    var content = await result.Content.ReadAsStringAsync();
                    Console.BackgroundColor = ConsoleColor.Green;
                    Console.WriteLine(content);
                    var stocks = JsonSerializer.Deserialize<FMPStock[]>(content);
                    var stock = stocks[0];
                    if (stock != null)
                    {
                        return stock.ToStockFromFMPStock();
                    }
                    return null;
                }
                return null ;
            }catch (Exception ex)
            {
                Console.BackgroundColor = ConsoleColor.Red;
                Console.WriteLine("ERROR"+ex.Message);
                return null;
            }
        }
    }
}
