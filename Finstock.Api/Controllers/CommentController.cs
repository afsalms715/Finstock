using Finstock.Api.DTOs.Comment;
using Finstock.Api.Interfaces;
using Finstock.Api.Mappers;
using Finstock.Api.Models;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace Finstock.Api.Controllers
{
    [Route("api/comment")]
    [ApiController]
    public class CommentController : ControllerBase
    {
        private readonly ICommentRepository commentRepo;
        public CommentController(ICommentRepository CommentRepo)
        {
            this.commentRepo = CommentRepo;
        }

        [HttpGet]
        public async Task<List<CommentDto>> GetAll()
        {
            var comments=await commentRepo.GetAll();
            var commentDtos = comments.Select(C => C.ToCommentDto());
            return commentDtos.ToList();
        }

        [HttpGet("{id:int}")]
        public async Task<CommentDto> GetById([FromRoute] int id)
        {
            var comment=await commentRepo.GetById(id);
            return comment.ToCommentDto();
        }
    }
}
