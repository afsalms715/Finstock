using Finstock.Api.Data;
using Finstock.Api.Helper;
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

        public async Task<Comment?> DeleteComment(int id)
        {
            var comment = await context.Comments.FirstOrDefaultAsync(u => u.Id == id);
            if (comment!=null)
            {
                context.Comments.Remove(comment);
                await context.SaveChangesAsync();
            }
            return comment;
        }

        public async Task<List<Comment>> GetAll(QueryObjectComment queryObject)
        {
            var comments = context.Comments.Include(a => a.AppUser).AsQueryable();
            var stockComment = comments.Where(x => x.Stock.Symbol.ToLower() == queryObject.Symbol.ToLower());
            if (queryObject.IsDecending)
            {
                return await stockComment.OrderByDescending(x => x.CreatedOn).ToListAsync();
            }
            return await stockComment.OrderBy(x => x.CreatedOn).ToListAsync();
        }

        public async Task<Comment?> GetById(int id)
        {
            var commnet= await context.Comments.Include(a=>a.AppUser).FirstOrDefaultAsync(x=>x.Id==id);
            if (commnet != null)
            {
                return null;
            }
            return commnet;
        }

        public async Task<Comment?> UpdateComment(int id,Comment updatedComment)
        {
            var comment = await context.Comments.FirstOrDefaultAsync(u => u.Id == id);
            if (comment != null)
            {
                comment.Title = updatedComment.Title;
                comment.Content = updatedComment.Content;
                comment.UpdatedOn = DateTime.Now;
                await context.SaveChangesAsync();
            }
            return comment;
        }
    }
}
