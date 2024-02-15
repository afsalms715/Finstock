using Finstock.Api.Data;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace Finstock.Api.Controllers
{
    [Route("api/stock")]
    [ApiController]
    public class StockController : ControllerBase
    {
        private readonly ApplicationDbContext context;
        public StockController(ApplicationDbContext context)
        {
            this.context = context;
        }

        [HttpGet]
        public IActionResult Get()
        {
            var stocks = context.Stocks.ToList();
            return Ok(stocks);
        }
        [HttpGet("{id:int}")]
        public IActionResult Get(int id)
        {
            var stock = context.Stocks.Find(id);
            if(stock == null)
            {
                return NotFound();
            }
            return Ok(stock);
        }
    }
}
