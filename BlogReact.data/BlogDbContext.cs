using Microsoft.EntityFrameworkCore;
using BlogReact.data;

namespace BlogReact.Data
{
    public class BlogDbContext : DbContext
    {
        private readonly string _connectionString;

        public BlogDbContext(string connectionString)
        {
            _connectionString = connectionString;
        }

        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            optionsBuilder.UseSqlServer(_connectionString);
        }

        public DbSet<Blog> Blogs { get; set; }
        public DbSet<Comment> Comments { get; set; }
    }
}