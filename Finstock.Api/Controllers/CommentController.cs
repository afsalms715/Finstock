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
        [ProducesResponseType(StatusCodes.Status200OK)]
        public async Task<IActionResult> GetAll()
        {
            var comments=await commentRepo.GetAll();
            var commentDtos = comments.Select(C => C.ToCommentDto());
            return Ok(commentDtos.ToList());
        }

        [HttpGet("{id:int}")]
        [ProducesResponseType(StatusCodes.Status200OK)]
        public async Task<IActionResult> GetById([FromRoute] int id)
        {
            var comment=await commentRepo.GetById(id);
            return Ok(comment.ToCommentDto());
        }

        [HttpPost]
        [ProducesResponseType(StatusCodes.Status201Created)]
        public async Task<IActionResult> CreateComment(CreateCommentDto createCommentDto)
        {
            var comment = createCommentDto.FromCreateCommentDtoToComment();
            await commentRepo.CreateComment(comment);
            return CreatedAtAction(nameof(GetById), new {id=comment.Id},comment.ToCommentDto());
        }
    }
}
