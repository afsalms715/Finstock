using Finstock.Api.Data;
using Finstock.Api.Interfaces;
using Finstock.Api.Models;
using Microsoft.AspNetCore.Http.HttpResults;
using Microsoft.EntityFrameworkCore;

namespace Finstock.Api.Repository
{
    public class PortfolioRepository : IPortfolioRepository
    {
        private readonly ApplicationDbContext _context;
        public PortfolioRepository(ApplicationDbContext context)
        {
            _context = context;
        }

        public async Task<Portfolio> AddPortfolio(Portfolio portfolio)
        {
            await _context.Portfolios.AddAsync(portfolio);
            await _context.SaveChangesAsync();
            return portfolio;
        }

        public async Task<Portfolio> DeletePortfolio(AppUser appUser, string symbol)
        {
            var portfolioModel=await _context.Portfolios.FirstOrDefaultAsync(x=>x.AppUserId==appUser.Id && x.Stock.Symbol.ToLower()==symbol.ToLower());
            if (portfolioModel == null)
            {
                return null;
            }
            _context.Portfolios.Remove(portfolioModel);
            await _context.SaveChangesAsync();
            return portfolioModel;
        }

        public async Task<List<Stock>> GetUserPortfolio(AppUser appUser)
        {
            return await _context.Portfolios.Where(x => x.AppUserId == appUser.Id)
               .Select(stock => new Stock
               {
                   Id = stock.StockId,
                   Symbol = stock.Stock.Symbol,
                   ComponyName = stock.Stock.ComponyName,
                   Purchase = stock.Stock.Purchase,
                   LastDiv = stock.Stock.LastDiv,
                   Industry = stock.Stock.Industry,
                   MarketCap = stock.Stock.MarketCap
               }).ToListAsync();
        }
    }
}
