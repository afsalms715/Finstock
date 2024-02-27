using Finstock.Api.DTOs.Stock;
using Finstock.Api.Helper;
using Finstock.Api.Models;

namespace Finstock.Api.Interfaces
{
    public interface IStockRepository
    {
        Task<List<Stock>> GetAllStocksAsync(QueryObjectStock query);
        Task<Stock?> GetStockByIdAsync(int id);
        Task<Stock?> GetStockBySymbol(string symbol);
        Task<Stock> CreateStokcAsync(Stock stock);
        Task<Stock?> UpdateStockAsync(int id,UpdateStockDto stockDto);
        Task<Stock> DeleteStockByIdAsync(int id);      
        Task<Boolean> DuplicateSymbol(string symbol);
        Task<Boolean> IsStockExist(int StockId);
        //listing all 
    }
}
