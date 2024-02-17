using Finstock.Api.Data;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Finstock.Api.Mappers;
using Finstock.Api.DTOs.Stock;
using System.Net.WebSockets;
using Microsoft.EntityFrameworkCore;

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
        public async Task<IActionResult> Get()
        {
            var stocks = await context.Stocks.ToListAsync();
            var stockDtos=stocks.Select(s => s.ToStockDto());
            return Ok(stockDtos);
        }

        [HttpGet("{id:int}")]
        [ProducesResponseType(StatusCodes.Status200OK)]
        [ProducesResponseType(StatusCodes.Status404NotFound)]
        public async Task<IActionResult> GetById(int id)
        {
            var stock = await context.Stocks.FindAsync(id);
            if(stock == null)
            {
                return NotFound();
            }
            
            return Ok(stock.ToStockDto());
        }

        [HttpPost]
        [ProducesResponseType(StatusCodes.Status400BadRequest)]
        [ProducesResponseType(StatusCodes.Status201Created)]
        public async Task<IActionResult> CreateStock(CreateStockDto createStockDto)
        {
            var IsDuplicate=await context.Stocks.FirstOrDefaultAsync(u=>u.Symbol==createStockDto.Symbol);
            if(IsDuplicate != null)
            {
                ModelState.AddModelError("Duplicate Data", "this Symbol is already exist");
                return BadRequest(ModelState);
            }
            var stock = createStockDto.ToStockFromCreateStock();
            await context.Stocks.AddAsync(stock);
            await context.SaveChangesAsync();
            return CreatedAtAction(nameof(GetById),new {id=stock.Id},stock.ToStockDto());
        }

        [HttpPut("{id:int}")]
        [ProducesResponseType(StatusCodes.Status200OK)]
        [ProducesResponseType(StatusCodes.Status404NotFound)]
        public async Task<IActionResult> UpdateStock([FromRoute] int id, [FromBody] UpdateStockDto stockDto) {
            var stock =await context.Stocks.FindAsync(id);
            if(stock == null)
            {
                return NotFound(ModelState);
            }
            stock.Symbol = stockDto.Symbol;
            stock.MarketCap = stockDto.MarketCap;
            stock.Purchase = stockDto.Purchase;
            stock.LastDiv=stockDto.LastDiv;
            stock.Industry = stockDto.Industry;
            await context.SaveChangesAsync();
            return Ok(stock.ToStockDto());
        }

        [HttpDelete("{id:int}")]
        [ProducesResponseType(StatusCodes.Status404NotFound)]
        [ProducesResponseType(StatusCodes.Status204NoContent)]
        public async Task<IActionResult> DeleteStock([FromRoute] int id)
        {
            var stock = await context.Stocks.FindAsync(id);
            if(stock == null)
            {
                return NotFound();
            }
            context.Stocks.Remove(stock);
            await context.SaveChangesAsync();
            return NoContent();
        }
    }
}
