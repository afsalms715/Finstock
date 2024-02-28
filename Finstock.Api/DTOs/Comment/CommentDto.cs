using System.ComponentModel.DataAnnotations;

namespace Finstock.Api.DTOs.Comment
{
    public class CommentDto
    {
        public int Id { get; set; }
        [Required]
        [MinLength(5,ErrorMessage ="Titile must be 5 character")]
        [MaxLength(50,ErrorMessage ="Title canot be over 50 character")]
        public string Title { get; set; } = string.Empty;

        [Required]
        [MinLength(5, ErrorMessage = "Content must be 5 character")]
        [MaxLength(280, ErrorMessage = "Content canot be over 280 character")]
        public string Content { get; set; } = string.Empty;
        public DateTime CreatedOn { get; set; } = DateTime.Now;
        public DateTime UpdatedOn { get; set; } = DateTime.Now;
        public string CreatedBy { get; set; }= string.Empty;
        public int? StockId { get; set; }
    }
}
