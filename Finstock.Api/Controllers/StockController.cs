using Finstock.Api.Data;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Finstock.Api.Mappers;
using Finstock.Api.DTOs.Stock;
using System.Net.WebSockets;
using Microsoft.EntityFrameworkCore;
using Finstock.Api.Interfaces;

namespace Finstock.Api.Controllers
{
    [Route("api/stock")]
    [ApiController]
    public class StockController : ControllerBase
    {
        private readonly ApplicationDbContext context;
        private readonly IStockRepository stockRepo;
        public StockController(ApplicationDbContext context,IStockRepository stockRepo)
        {
            this.context = context;
            this.stockRepo = stockRepo;
        }

        [HttpGet]
        [ProducesResponseType(StatusCodes.Status200OK)]
        public async Task<IActionResult> Get()
        {
            var stocks = await stockRepo.GetAllStocksAsync();
            var stockDtos=stocks.Select(s => s.ToStockDto());
            return Ok(stockDtos);
        }

        [HttpGet("{id:int}")]
        [ProducesResponseType(StatusCodes.Status200OK)]
        [ProducesResponseType(StatusCodes.Status404NotFound)]
        public async Task<IActionResult> GetById(int id)
        {
            var stock = await stockRepo.GetStockByIdAsync(id);
            if (stock == null)
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
            var IsDuplicate = await stockRepo.DuplicateSymbol(createStockDto.Symbol);
            if(IsDuplicate)
            {
                ModelState.AddModelError("Duplicate Data", "this Symbol is already exist");
                return BadRequest(ModelState);
            }
            var stock = createStockDto.ToStockFromCreateStock();
            await stockRepo.CreateStokcAsync(stock);
            return CreatedAtAction(nameof(GetById),new {id=stock.Id},stock.ToStockDto());
        }

        [HttpPut("{id:int}")]
        [ProducesResponseType(StatusCodes.Status200OK)]
        [ProducesResponseType(StatusCodes.Status404NotFound)]
        public async Task<IActionResult> UpdateStock([FromRoute] int id, [FromBody] UpdateStockDto stockDto) {
            var stock =await stockRepo.UpdateStockAsync(id,stockDto);
            if(stock == null)
            {
                return NotFound(ModelState);
            }
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
