using Finstock.Api.Data;
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
        public Task<List<Stock>> GetAllStocksAsync()
        {
            return _context.Stocks.ToListAsync();
        }
    }
}
