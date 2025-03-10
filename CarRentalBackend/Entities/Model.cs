using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Text.Json.Serialization;

namespace CarRentalBackend.Entities
{
    public class Model
    {
        [Key]
        public int ModelId { get; set; }

        [Required]
        public string ModelName { get; set; }

        // Foreign Key: BrandId
        public int BrandId { get; set; }

        [ForeignKey("BrandId")]
        public Brand Brand { get; set; } // Navigation Property

        [JsonIgnore]
        public ICollection<Car> Cars { get; set; }

    }
}
