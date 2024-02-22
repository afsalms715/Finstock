using Finstock.Api.Data;
using Finstock.Api.DTOs.Stock;
using Finstock.Api.Helper;
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

        public async Task<List<Stock>> GetAllStocksAsync(QueryObjectStock query)
        {
            var stocks = _context.Stocks.Include(c => c.Comments).AsQueryable();
            if (!string.IsNullOrWhiteSpace(query.Symbol))
            {
                stocks=stocks.Where(stock => stock.Symbol.Contains(query.Symbol));
            }
            if (!string.IsNullOrWhiteSpace(query.ComponyName))
            {
                stocks=stocks.Where(stock=>stock.ComponyName.Contains(query.ComponyName));
            }
            if (!string.IsNullOrWhiteSpace(query.Industry))
            {
                stocks=stocks.Where(stock=>stock.ComponyName.Contains(query.Industry));
            }
            if (!string.IsNullOrWhiteSpace(query.OrderBy))
            {
                if (query.OrderBy == "Symbol")
                {
                    stocks = query.IsDesending == true ?  stocks.OrderByDescending(u => u.Symbol) : stocks.OrderBy(u => u.Symbol);
                }
                else if(query.OrderBy == "ComponyName")
                {
                    stocks = query.IsDesending == true ? stocks.OrderByDescending(u => u.ComponyName) : stocks.OrderBy(u => u.ComponyName);
                }
                else if(query.OrderBy == "Purchase")
                {
                    stocks = query.IsDesending == true ? stocks.OrderByDescending(u => u.Purchase) : stocks.OrderBy(u => u.Purchase);
                }
                else if(query.OrderBy == "LastDiv")
                {
                    stocks = query.IsDesending == true ? stocks.OrderByDescending(u => u.LastDiv) : stocks.OrderBy(u => u.LastDiv);
                }
                else if(query.OrderBy == "Industry")
                {
                    stocks = query.IsDesending == true ? stocks.OrderByDescending(u => u.Industry) : stocks.OrderBy(u => u.Purchase);
                }
                else if(query.OrderBy == "MarketCap")
                {
                    stocks = query.IsDesending == true ? stocks.OrderByDescending(u => u.MarketCap) : stocks.OrderBy(u => u.MarketCap);
                }
            }
            return await stocks.ToListAsync();
        }

        public async Task<Stock?> GetStockByIdAsync(int id)
        {
            var stock =await _context.Stocks.Include(c=>c.Comments).FirstOrDefaultAsync(i=>i.Id==id);
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

        public async Task<bool> IsStockExist(int StockId)
        {
            return await _context.Stocks.AnyAsync(s=>s.Id==StockId);//checking any data like 
        }
    }
}
