using CarRentalBackend.Data;
using CarRentalBackend.Entities;
using CarRentalBackend.IQueries;
using Microsoft.EntityFrameworkCore;

namespace CarRentalBackend.Queries
{
    public class BrandQuery : IBrandQuery
    {
        private readonly CarRentalDbContext _context;

        public BrandQuery(CarRentalDbContext context)
        {
            _context = context;
        }

        public async Task<IEnumerable<Brand>> GetAllBrandsAsync()
        {
            return await _context.Brands.ToListAsync();
        }

        public async Task<Brand> GetBrandByIdAsync(int id)
        {
            return await _context.Brands.FindAsync(id);
        }

        public async Task<Brand> AddBrandAsync(Brand brand)
        {
            _context.Brands.Add(brand);
            await _context.SaveChangesAsync();
            return brand;
        }
    }
}
