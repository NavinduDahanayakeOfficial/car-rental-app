using CarRentalBackend.Data;
using CarRentalBackend.Entities;
using CarRentalBackend.IQueries;
using Microsoft.EntityFrameworkCore;

namespace CarRentalBackend.Queries
{
    public class CarQuery : ICarQuery
    {
        private readonly CarRentalDbContext _context;

        public CarQuery(CarRentalDbContext context)
        {
            _context = context;
        }

        public async Task<IEnumerable<Car>> GetAllCarsAsync()
        {
            return await _context.Cars.Include(c => c.Model).ToListAsync();
        }

        public async Task<Car> GetCarByIdAsync(int id)
        {
            return await _context.Cars.Include(c => c.Model).FirstOrDefaultAsync(c => c.CarId == id);
        }

        public async Task<Car> AddCarAsync(Car car)
        {
            _context.Cars.Add(car);
            await _context.SaveChangesAsync();
            return car;
        }
    }
}
