using Finstock.Api.DTOs.Comment;
using Finstock.Api.Models;

namespace Finstock.Api.Mappers
{
    public static class CommentMapper
    {
        public static CommentDto ToCommentDto(this Comment comment)
        {
            return new CommentDto()
            {
                Id = comment.Id,
                Title = comment.Title,
                Content = comment.Content,
                CreatedOn = comment.CreatedOn,
                UpdatedOn= comment.UpdatedOn,
                StockId = comment.StockId,
            };
        }

        public static Comment FromCreateCommentDtoToComment(this CreateCommentDto commentDto,int StockId)
        {
            return new Comment()
            {
                Title = commentDto.Title,
                Content = commentDto.Content,
                StockId = StockId,
            };
        }

        public static Comment UpdateCommentDtoToComment(this UpdateCommentDto commentDto) {
            return new Comment()
            {
                Title = commentDto.Title,
                Content = commentDto.Content,
            };
        }
    }
}
