using CarRentalBackend.Data;
using CarRentalBackend.DTOs;
using CarRentalBackend.Entities;
using CarRentalBackend.IQueries;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace CarRentalBackend.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class BrandController : ControllerBase
    {
        private readonly IBrandQuery _brandQuery;
        

        public BrandController(IBrandQuery brandQuery)
        {
            _brandQuery = brandQuery;
        }

        // GET: api/brand
        [HttpGet]
        public async Task<ActionResult<IEnumerable<Brand>>> GetBrands()
        {
            var brands = await _brandQuery.GetAllBrandsAsync();
            return Ok(brands);
        }

        // GET: api/brand/5
        [HttpGet("{id}")]
        public async Task<ActionResult<Brand>> GetBrand(int id)
        {
            var brand = await _brandQuery.GetBrandByIdAsync(id);
            if (brand == null)
            {
                return NotFound();
            }
            return Ok(brand);
        }

        [HttpPost]
        public async Task<ActionResult<Brand>> AddBrand([FromBody] BrandDTO brandDto)
        {
            if (brandDto == null || string.IsNullOrEmpty(brandDto.BrandName))
            {
                return BadRequest("Invalid brand data.");
            }

            var brand = new Brand
            {
                BrandName = brandDto.BrandName
            };

            var createdBrand = await _brandQuery.AddBrandAsync(brand);

            return CreatedAtAction(nameof(GetBrand), new { id = createdBrand.Id }, createdBrand);
        }
    }
}
