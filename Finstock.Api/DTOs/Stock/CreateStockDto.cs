using System.ComponentModel.DataAnnotations;

namespace Finstock.Api.DTOs.Stock
{
    public class CreateStockDto
    {
        [Required]
        [MinLength(2)]
        [MaxLength(5)]
        public string Symbol { get; set; } = string.Empty;

        [Required]
        [MinLength(5)]
        [MaxLength(50)]
        public string ComponyName { get; set; } = string.Empty;

        [Required]
        [Range(0.5, 10000000)]
        public decimal Purchase { get; set; }

        [Required]
        [Range(0.5, 1000)]
        public decimal LastDiv { get; set; }

        [Required]
        [MinLength(5)]
        [MaxLength(50)]
        public string Industry { get; set; } = string.Empty;

        [Required]
        [Range(100, 1000000000)]
        public int MarketCap { get; set; }
    }
}
