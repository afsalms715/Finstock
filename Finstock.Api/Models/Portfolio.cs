using System.ComponentModel.DataAnnotations.Schema;

namespace Finstock.Api.Models
{
    [Table("Portfolios")]
    public class Portfolio
    {
        public int StockId { get; set; }
        public Stock Stock { get; set; }
        public string AppUserId { get; set; }
        public AppUser AppUser { get; set; }
    }
}
