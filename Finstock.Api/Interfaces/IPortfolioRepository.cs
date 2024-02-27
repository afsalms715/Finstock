using Finstock.Api.Models;

namespace Finstock.Api.Interfaces
{
    public interface IPortfolioRepository
    {
        Task<List<Stock>> GetUserPortfolio(AppUser appUser);
        Task<Portfolio> AddPortfolio(Portfolio portfolio);
    }
}
