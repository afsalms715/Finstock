using Finstock.Api.DTOs.Comment;
using Finstock.Api.Models;
using System.ComponentModel.DataAnnotations.Schema;

namespace Finstock.Api.DTOs.Stock
{
    public class StockDto
    {
        public int Id { get; set; }
        public string Symbol { get; set; } = string.Empty;
        public string ComponyName { get; set; } = string.Empty;
        public decimal Purchase { get; set; }
        public decimal LastDiv { get; set; }
        public string Industry { get; set; } = string.Empty;
        public int MarketCap { get; set; }
        public List<CommentDto> Comments { get; set; }
    }
}
