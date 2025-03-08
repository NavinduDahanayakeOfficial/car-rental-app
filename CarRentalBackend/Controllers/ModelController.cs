using CarRentalBackend.DTOs;
using CarRentalBackend.Entities;
using CarRentalBackend.IQueries;
using Microsoft.AspNetCore.Mvc;

namespace CarRentalBackend.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ModelController : ControllerBase
    {
        private readonly IModelQuery _modelQuery;

        public ModelController(IModelQuery modelQuery)
        {
            _modelQuery = modelQuery;
        }

        // GET: api/model
        [HttpGet]
        public async Task<ActionResult<IEnumerable<Model>>> GetModels()
        {
            var models = await _modelQuery.GetAllModelsAsync();
            return Ok(models);
        }

        // GET: api/model/5
        [HttpGet("{id}")]
        public async Task<ActionResult<Model>> GetModel(int id)
        {
            var model = await _modelQuery.GetModelByIdAsync(id);
            if (model == null)
            {
                return NotFound();
            }
            return Ok(model);
        }

        // POST: api/model
        [HttpPost]
        public async Task<ActionResult<Model>> AddModel([FromBody] ModelDTO modelDto)
        {
            if (modelDto == null || string.IsNullOrEmpty(modelDto.ModelName))
            {
                return BadRequest("Invalid model data.");
            }

            var model = new Model
            {
                ModelName = modelDto.ModelName,
                BrandId = modelDto.BrandId
            };

            var createdModel = await _modelQuery.AddModelAsync(model);

            return CreatedAtAction(nameof(GetModel), new { id = createdModel.ModelId }, createdModel);
        }
    }
}
