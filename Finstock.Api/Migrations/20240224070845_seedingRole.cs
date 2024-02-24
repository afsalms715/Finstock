using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

#pragma warning disable CA1814 // Prefer jagged arrays over multidimensional

namespace Finstock.Api.Migrations
{
    /// <inheritdoc />
    public partial class seedingRole : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.InsertData(
                table: "AspNetRoles",
                columns: new[] { "Id", "ConcurrencyStamp", "Name", "NormalizedName" },
                values: new object[,]
                {
                    { "39fc2b49-063b-4826-a7e7-032b3b65d3d1", null, "Admin", "ADMIN" },
                    { "400bf2e5-b359-48ec-98f5-3579ccf4cc14", null, "User", "USER" }
                });
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DeleteData(
                table: "AspNetRoles",
                keyColumn: "Id",
                keyValue: "39fc2b49-063b-4826-a7e7-032b3b65d3d1");

            migrationBuilder.DeleteData(
                table: "AspNetRoles",
                keyColumn: "Id",
                keyValue: "400bf2e5-b359-48ec-98f5-3579ccf4cc14");
        }
    }
}
