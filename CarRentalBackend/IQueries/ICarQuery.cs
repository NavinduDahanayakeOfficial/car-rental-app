using CarRentalBackend.Entities;

namespace CarRentalBackend.IQueries
{
    public interface ICarQuery
    {
        Task<IEnumerable<Car>> GetAllCarsAsync();
        Task<Car> GetCarByIdAsync(int id);
        Task<Car> AddCarAsync(Car car);
    }
}
