using Finstock.Api.Data;
using Finstock.Api.Extentions;
using Finstock.Api.Interfaces;
using Finstock.Api.Mappers;
using Finstock.Api.Models;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace Finstock.Api.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class PortfolioController : ControllerBase
    {
        private readonly UserManager<AppUser> _userManager;
        private readonly IPortfolioRepository  _portfolioRepository;
        private readonly IStockRepository _stockRepository;
        public PortfolioController(UserManager<AppUser> userManger,IPortfolioRepository portfolioRepository,IStockRepository stockRepository)
        {
            _userManager = userManger;
            _portfolioRepository = portfolioRepository;
            _stockRepository = stockRepository;
        }

        [HttpGet]
        [Authorize]
        public async Task<IActionResult> GetUserPortfolio()
        {
            var username = User.GetUsername();
            var appUser = await _userManager.FindByNameAsync(username);
            var userPortfolio=await _portfolioRepository.GetUserPortfolio(appUser);
            return Ok(userPortfolio);
        }

        [HttpPost]
        [Authorize]
        public async Task<IActionResult> CreateAsync(string symbol)
        {
            var username = User.GetUsername();
            var appUser = await _userManager.FindByNameAsync(username);
            var stock = await _stockRepository.GetStockBySymbol(symbol);

            if (stock == null) return BadRequest("Stock not found !");

            var userPortfolio =await _portfolioRepository.GetUserPortfolio(appUser);

            if (userPortfolio.Any(x => x.Symbol.ToLower() == symbol.ToLower())) return BadRequest("This Stock is Already added !");

            var portfolioModel = new Portfolio
            {
                AppUserId = appUser.Id,
                StockId = stock.Id,
            };

            if (portfolioModel == null) return StatusCode(500, "Stock could't added");

            await _portfolioRepository.AddPortfolio(portfolioModel);
            return Created();

        }
    }
}
