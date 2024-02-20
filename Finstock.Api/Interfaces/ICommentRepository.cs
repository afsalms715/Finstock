using Finstock.Api.Models;

namespace Finstock.Api.Interfaces
{
    public interface ICommentRepository
    {
        Task<List<Comment>> GetAll();
        Task<Comment?> GetById(int id);
    }
}
