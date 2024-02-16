using Finstock.Api.Data;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Finstock.Api.Mappers;
using Finstock.Api.DTOs.Stock;

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
            var stocks = context.Stocks.ToList().Select(s=>s.ToStockDto());
            return Ok(stocks);
        }
        [HttpGet("{id:int}")]
        public IActionResult GetById(int id)
        {
            var stock = context.Stocks.Find(id);
            if(stock == null)
            {
                return NotFound();
            }
            
            return Ok(stock.ToStockDto());
        }
        [HttpPost]
        public IActionResult CreateStock(CreateStockDto createStockDto)
        {
            var stock = createStockDto.ToStockFromCreateStock();
            context.Stocks.Add(stock);
            context.SaveChanges();
            return CreatedAtAction(nameof(GetById),new {id=stock.Id},stock.ToStockDto());
        }
    }
}
