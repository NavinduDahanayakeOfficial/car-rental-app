using CarRentalBackend.Entities;

namespace CarRentalBackend.IQueries
{
    public interface IModelQuery
    {
        Task<IEnumerable<Model>> GetAllModelsAsync();
        Task<Model> GetModelByIdAsync(int id);
        Task<Model> AddModelAsync(Model model);
    }
}
