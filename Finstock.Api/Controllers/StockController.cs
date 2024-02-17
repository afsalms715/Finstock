using Finstock.Api.Data;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Finstock.Api.Mappers;
using Finstock.Api.DTOs.Stock;
using System.Net.WebSockets;

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
        [ProducesResponseType(StatusCodes.Status200OK)]
        public IActionResult Get()
        {
            var stocks = context.Stocks.ToList().Select(s=>s.ToStockDto());
            return Ok(stocks);
        }

        [HttpGet("{id:int}")]
        [ProducesResponseType(StatusCodes.Status200OK)]
        [ProducesResponseType(StatusCodes.Status404NotFound)]
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
        [ProducesResponseType(StatusCodes.Status400BadRequest)]
        [ProducesResponseType(StatusCodes.Status201Created)]
        public IActionResult CreateStock(CreateStockDto createStockDto)
        {
            var IsDuplicate=context.Stocks.FirstOrDefault(u=>u.Symbol==createStockDto.Symbol);
            if(IsDuplicate != null)
            {
                ModelState.AddModelError("Duplicate Data", "this Symbol is already exist");
                return BadRequest(ModelState);
            }
            var stock = createStockDto.ToStockFromCreateStock();
            context.Stocks.Add(stock);
            context.SaveChanges();
            return CreatedAtAction(nameof(GetById),new {id=stock.Id},stock.ToStockDto());
        }

        [HttpPut("{id:int}")]
        [ProducesResponseType(StatusCodes.Status200OK)]
        [ProducesResponseType(StatusCodes.Status404NotFound)]
        public IActionResult UpdateStock([FromRoute] int id, [FromBody] UpdateStockDto stockDto) {
            var stock = context.Stocks.Find(id);
            if(stock == null)
            {
                return NotFound(ModelState);
            }
            stock.Symbol = stockDto.Symbol;
            stock.MarketCap = stockDto.MarketCap;
            stock.Purchase = stockDto.Purchase;
            stock.LastDiv=stockDto.LastDiv;
            stock.Industry = stockDto.Industry;
            context.SaveChanges();
            return Ok(stock);
        }

        [HttpDelete("{id:int}")]
        [ProducesResponseType(StatusCodes.Status404NotFound)]
        [ProducesResponseType(StatusCodes.Status204NoContent)]
        public IActionResult DeleteStock([FromRoute] int id)
        {
            var stock = context.Stocks.Find(id);
            if(stock == null)
            {
                return NotFound();
            }
            context.Stocks.Remove(stock);
            context.SaveChanges();
            return NoContent();
        }
    }
}
