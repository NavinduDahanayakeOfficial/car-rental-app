using CarRentalBackend.Entities;

namespace CarRentalBackend.IQueries
{
    public interface IBrandQuery
    {
        Task<IEnumerable<Brand>> GetAllBrandsAsync();
        Task<Brand> GetBrandByIdAsync(int id);
        Task<Brand> AddBrandAsync(Brand brand); 
    }
}
