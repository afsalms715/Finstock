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
    }
}
