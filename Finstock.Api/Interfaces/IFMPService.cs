using Finstock.Api.Models;

namespace Finstock.Api.Interfaces
{
    public interface IFMPService
    {
        Task<Stock> GetStockFromFMP(string symbol);
    }
}
