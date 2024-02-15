using Finstock.Api.Models;
using Microsoft.EntityFrameworkCore;

namespace Finstock.Api.Data
{
    public class ApplicationDbContext:DbContext
    {
        public ApplicationDbContext(DbContextOptions optoins):base(optoins){}
        public DbSet<Stock> Stocks { get; set; }
        public DbSet<Comment> Comments { get; set; }
    }
}
