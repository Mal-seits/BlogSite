using Microsoft.EntityFrameworkCore.Migrations;

namespace BlogReact.data.Migrations
{
    public partial class changeCommentText : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.RenameColumn(
                name: "Text",
                table: "Comments",
                newName: "CommentText");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.RenameColumn(
                name: "CommentText",
                table: "Comments",
                newName: "Text");
        }
    }
}
