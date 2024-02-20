using Finstock.Api.Data;
using Finstock.Api.DTOs.Stock;
using Finstock.Api.Interfaces;
using Finstock.Api.Models;
using Microsoft.EntityFrameworkCore;

namespace Finstock.Api.Repository
{
    public class StockRepository : IStockRepository
    {
        private readonly ApplicationDbContext _context;
        public StockRepository(ApplicationDbContext context) { 
            _context = context;
        }

        public async Task<Stock> CreateStokcAsync(Stock stock)
        {
            await _context.Stocks.AddAsync(stock);
            await _context.SaveChangesAsync();
            return stock;
        }

        public async Task<Stock> DeleteStockByIdAsync(int id)
        {
            var stock = await GetStockByIdAsync(id);
            _context.Stocks.Remove(stock);
            return stock;
        }

        public async Task<List<Stock>> GetAllStocksAsync()
        {
            return await _context.Stocks.ToListAsync();
        }

        public async Task<Stock?> GetStockByIdAsync(int id)
        {
            var stock =await _context.Stocks.FindAsync(id);
            return stock;
        }

        public async Task<Stock?> UpdateStockAsync(int id,UpdateStockDto stockDto)
        {
            var stock = await GetStockByIdAsync(id);
            if (stock != null)
            {
                stock.Symbol = stockDto.Symbol;
                stock.ComponyName = stockDto.ComponyName;
                stock.MarketCap = stockDto.MarketCap;
                stock.Purchase = stockDto.Purchase;
                stock.LastDiv = stockDto.LastDiv;
                stock.Industry = stockDto.Industry;
                await _context.SaveChangesAsync();
            }
            return stock;
        }

        public async Task<Boolean> DuplicateSymbol(string symbol)
        {
            var stock=await _context.Stocks.FirstOrDefaultAsync(u=>u.Symbol==symbol);
            if(stock != null)
            {
                return true;
            }
            return false;
        }
    }
}
