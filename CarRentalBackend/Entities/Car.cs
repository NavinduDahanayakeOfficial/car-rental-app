using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace CarRentalBackend.Entities
{
    public class Car
    {
        [Key]
        public int CarId { get; set; }

        [Required]
        public string LicensePlateNumber { get; set; }

        [Required]
        public string Color { get; set; }


        // Foreign Key: ModelId
        public int ModelId { get; set; }
        [ForeignKey("ModelId")]
        public Model Model { get; set; } // Navigation Property
    }
}
