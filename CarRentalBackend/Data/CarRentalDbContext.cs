using CarRentalBackend.Entities;
using Microsoft.EntityFrameworkCore;

namespace CarRentalBackend.Data
{
    public class CarRentalDbContext : DbContext
    {
        public CarRentalDbContext(DbContextOptions<CarRentalDbContext> options) : base(options) { }

        public DbSet<Brand> Brands { get; set; }

        public DbSet<Model> Models { get; set; }
        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<Model>()
                .HasOne(m => m.Brand)
                .WithMany(b => b.Models)
                .HasForeignKey(m => m.BrandId)
                .OnDelete(DeleteBehavior.Cascade); // If a brand is deleted, all its models will be deleted

            base.OnModelCreating(modelBuilder);
        }
    }
}
