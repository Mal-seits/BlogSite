using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.Extensions.Configuration;
using BlogReact.data;

namespace BlogReact.web.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class BlogController : ControllerBase
    {
        private readonly string _connectionString;
        public BlogController(IConfiguration configuration)
        {
            _connectionString = configuration.GetConnectionString("ConnectionString");
        }

        [HttpGet]
        [Route("GetAllBlogs")]
        public List<Blog> GetAllBlogs(int pageNumber)
        {
            var repo = new BlogRepository(_connectionString);
            return repo.GetAllBlogs(pageNumber);
        }
        [HttpGet]
        [Route("GetBlogById")]
        public Blog GetBlogById(int id)
        {
            var repo = new BlogRepository(_connectionString);
            return repo.GetBlogById(id);
        }
        [HttpPost]
        [Route("AddComment")]
        public void AddComment(Comment comment)
        {
            comment.CommentDate = DateTime.Now;
            var repo = new BlogRepository(_connectionString);
            repo.AddComment(comment);

        }
        [HttpGet]
        [Route("GetCommentsForBlog")]
        public List<Comment> GetCommentsForBlog(int id)
        {
            var repo = new BlogRepository(_connectionString);
            return repo.GetCommentsForBlog(id);
        }
        [HttpPost]
        [Route("AddBlog")]
        public void AddBlog(Blog blog)
        {
            blog.Date = DateTime.Now;
            var repo = new BlogRepository(_connectionString);
            repo.AddBlog(blog);

        }
        [HttpGet]
        [Route("GetMostRecentBlogId")]
        public int GetMostRecentBlogId()
        {
            var repo = new BlogRepository(_connectionString);
            return repo.GetMostRecentBlogId();
        }

        [HttpGet]
        [Route("GetHighestPageNumber")]
        public int GetHighestPageNumber()
        {
            var repo = new BlogRepository(_connectionString);
            return repo.GetHighestPageNumber();
        }
    }
}
