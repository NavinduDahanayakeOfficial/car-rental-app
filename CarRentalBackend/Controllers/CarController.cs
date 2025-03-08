using CarRentalBackend.DTOs;
using CarRentalBackend.Entities;
using CarRentalBackend.IQueries;
using Microsoft.AspNetCore.Mvc;

namespace CarRentalBackend.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class CarController : ControllerBase
    {
        private readonly ICarQuery _carQuery;

        public CarController(ICarQuery carQuery)
        {
            _carQuery = carQuery;
        }

        // GET: api/car
        [HttpGet]
        public async Task<ActionResult<IEnumerable<Car>>> GetCars()
        {
            var cars = await _carQuery.GetAllCarsAsync();
            return Ok(cars);
        }

        // GET: api/car/5
        [HttpGet("{id}")]
        public async Task<ActionResult<Car>> GetCar(int id)
        {
            var car = await _carQuery.GetCarByIdAsync(id);
            if (car == null)
            {
                return NotFound();
            }
            return Ok(car);
        }

        // POST: api/car
        [HttpPost]
        public async Task<ActionResult<Car>> AddCar([FromBody] CarDTO carDto)
        {
            if (carDto == null || string.IsNullOrEmpty(carDto.LicensePlateNumber))
            {
                return BadRequest("Invalid car data.");
            }

            var car = new Car
            {
                LicensePlateNumber = carDto.LicensePlateNumber,
                Color = carDto.Color,
                ModelId = carDto.ModelId
            };

            var createdCar = await _carQuery.AddCarAsync(car);

            return CreatedAtAction(nameof(GetCar), new { id = createdCar.CarId }, createdCar);
        }
    }
}
