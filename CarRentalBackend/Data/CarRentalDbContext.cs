using CarRentalBackend.Entities;
using Microsoft.EntityFrameworkCore;

namespace CarRentalBackend.Data
{
    public class CarRentalDbContext : DbContext
    {
        public CarRentalDbContext(DbContextOptions<CarRentalDbContext> options) : base(options) { }

        public DbSet<Brand> Brands { get; set; }

        public DbSet<Model> Models { get; set; }
        public DbSet<Car> Cars { get; set; }
        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<Model>()
                .HasOne(m => m.Brand)
                .WithMany(b => b.Models)
                .HasForeignKey(m => m.BrandId)
                .OnDelete(DeleteBehavior.Cascade); // If a brand is deleted, all its models will be deleted

            // Define foreign key relationship between Car and Model
            modelBuilder.Entity<Car>()
                .HasOne(c => c.Model)
                .WithMany(m => m.Cars)
                .HasForeignKey(c => c.ModelId)
                .OnDelete(DeleteBehavior.Cascade);


            base.OnModelCreating(modelBuilder);
        }
    }
}
