using CarRentalBackend.Data;
using CarRentalBackend.Entities;
using CarRentalBackend.IQueries;
using Microsoft.EntityFrameworkCore;

namespace CarRentalBackend.Queries
{
    public class ModelQuery : IModelQuery
    {
        private readonly CarRentalDbContext _context;

        public ModelQuery(CarRentalDbContext context)
        {
            _context = context;
        }

        public async Task<IEnumerable<Model>> GetAllModelsAsync()
        {
            return await _context.Models.Include(m => m.Brand).ToListAsync();
        }

        public async Task<Model> GetModelByIdAsync(int id)
        {
            return await _context.Models.Include(m => m.Brand).FirstOrDefaultAsync(m => m.ModelId == id);
        }

        public async Task<Model> AddModelAsync(Model model)
        {
            _context.Models.Add(model);
            await _context.SaveChangesAsync();
            return model;
        }
    }
}
