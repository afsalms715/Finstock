using Finstock.Api.Data;
using Finstock.Api.Interfaces;
using Finstock.Api.Models;
using Microsoft.EntityFrameworkCore;

namespace Finstock.Api.Repository
{
    public class CommentRepository : ICommentRepository
    {
        private readonly ApplicationDbContext context;
        public CommentRepository(ApplicationDbContext context)
        {
            this.context = context;
        }

        public  async Task<Comment> CreateComment(Comment comment)
        {
            await context.Comments.AddAsync(comment);
            context.SaveChanges();
            return comment;
        }

        public async Task<List<Comment>> GetAll()
        {
            var comments = await context.Comments.ToListAsync();
            return comments;
        }

        public async Task<Comment?> GetById(int id)
        {
            var commnet= await context.Comments.FindAsync(id);
            return commnet;
        }
    }
}
