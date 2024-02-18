using Finstock.Api.Models;

namespace Finstock.Api.Interfaces
{
    public interface IStockRepository
    {
        Task<List<Stock>> GetAllStocksAsync();
    }
}
