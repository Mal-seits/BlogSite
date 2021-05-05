using Newtonsoft.Json;
using System;
using System.Collections.Generic;

namespace BlogReact.data
{
    public class Blog
    {
        public int Id { get; set; }
        public string Title { get; set; }
        public string BloggerName { get; set; }
        public DateTime Date { get; set; }
        public string Text { get; set; }
        public List<Comment> Comments { get; set; }
    }
    public class Comment
    {
        public int Id { get; set; }
        public DateTime CommentDate { get; set; }
        public string CommentText { get; set; }
        public int BlogId { get; set; }
        [JsonIgnore]
        public Blog Blog { get; set; }
        public string CommenterName { get; set; }
    }
}
