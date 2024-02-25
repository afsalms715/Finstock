using Finstock.Api.DTOs.Comment;
using Finstock.Api.Interfaces;
using Finstock.Api.Mappers;
using Finstock.Api.Models;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace Finstock.Api.Controllers
{
    [Route("api/comment")]
    [ApiController]
    [Authorize]
    public class CommentController : ControllerBase
    {
        private readonly ICommentRepository commentRepo;
        private readonly IStockRepository stockRepo;
        public CommentController(ICommentRepository CommentRepo,IStockRepository stockRepo)
        {
            this.commentRepo = CommentRepo;
            this.stockRepo = stockRepo;
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

        [HttpPost("{StockId:int}")]
        [ProducesResponseType(StatusCodes.Status201Created)]
        [ProducesResponseType(StatusCodes.Status400BadRequest)]
        public async Task<IActionResult> CreateComment([FromRoute] int StockId,CreateCommentDto createCommentDto)
        {
            if (!ModelState.IsValid)
                return BadRequest(ModelState);
            if(!await stockRepo.IsStockExist(StockId))
            {
                return BadRequest("Stock Not Exisit");
            }
            var comment = createCommentDto.FromCreateCommentDtoToComment(StockId);
            await commentRepo.CreateComment(comment);
            return CreatedAtAction(nameof(GetById), new {id=comment.Id},comment.ToCommentDto());
        }

        [HttpDelete("{id:int}")]
        public async Task<IActionResult> DeleteComment([FromRoute] int id)
        {
            var comment = await commentRepo.DeleteComment(id);
            if(comment == null) 
            {
                return NotFound();
            }
            return Ok(comment.ToCommentDto());
        }

        [HttpPut("{id:int}")]
        public async Task<IActionResult> UpdateComment([FromRoute] int id,UpdateCommentDto updateCommentDto)
        {
            if (!ModelState.IsValid)
                return BadRequest(ModelState);
            var comment = updateCommentDto.UpdateCommentDtoToComment();
            var updatedComment=await commentRepo.UpdateComment(id,comment);
            if(updatedComment == null)
            {
                return NotFound();
            }
            return Ok(updatedComment.ToCommentDto());

        }
    }
}
