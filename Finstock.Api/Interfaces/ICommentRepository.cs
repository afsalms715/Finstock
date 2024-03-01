using Finstock.Api.Helper;
using Finstock.Api.Models;

namespace Finstock.Api.Interfaces
{
    public interface ICommentRepository
    {
        Task<List<Comment>> GetAll(QueryObjectComment queryObject);
        Task<Comment?> GetById(int id);
        Task<Comment> CreateComment(Comment comment);
        Task<Comment?> DeleteComment(int id);
        Task<Comment?> UpdateComment(int id,Comment comment);
    }
}
