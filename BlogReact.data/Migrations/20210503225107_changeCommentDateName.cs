using Microsoft.EntityFrameworkCore.Migrations;

namespace BlogReact.data.Migrations
{
    public partial class changeCommentDateName : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.RenameColumn(
                name: "Date",
                table: "Comments",
                newName: "CommentDate");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.RenameColumn(
                name: "CommentDate",
                table: "Comments",
                newName: "Date");
        }
    }
}
