using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using BlogReact.Data;
using Microsoft.EntityFrameworkCore;

namespace BlogReact.data
{
    public class BlogRepository
    {
        private string _connectionString;
        public BlogRepository(string connectionString)
        {
            _connectionString = connectionString;
        }
        public List<Blog> GetAllBlogs(int skip)
        {
            using var context = new BlogDbContext(_connectionString);
            return context.Blogs.OrderByDescending(b => b.Id).Skip((skip -  1) * 3).Take(3).ToList();
        }
        public Blog GetBlogById(int blogId)
        {
            using var context = new BlogDbContext(_connectionString);
            return context.Blogs.FirstOrDefault(b => b.Id == blogId);
        }
        public void AddComment(Comment comment)
        {
            using var context = new BlogDbContext(_connectionString);
            context.Comments.Add(comment);
            context.SaveChanges();
        }
        public List<Comment> GetCommentsForBlog(int blogId)
        {
            using var context = new BlogDbContext(_connectionString);
            return context.Comments.Where(c => c.BlogId == blogId).OrderByDescending(c => c.Id).
                ToList();

        }
        public void AddBlog(Blog blog)
        {
            using var context = new BlogDbContext(_connectionString);
            context.Blogs.Add(blog);
            context.SaveChanges();
        }
        public int GetMostRecentBlogId()
        {

            using var context = new BlogDbContext(_connectionString);
            var blog= context.Blogs.OrderByDescending(b => b.Id).First(b => b.Id != 0);
            return blog.Id;
        }
        public int GetHighestPageNumber()
        {
            using var context = new BlogDbContext(_connectionString);
            var blogs = GetAllBlogs(1);
           if(blogs.Count % 3 == 0)
            {
                return blogs.Count;
            }
            else
            {
                return blogs.Count + 1;
            }

        }
    }
}
