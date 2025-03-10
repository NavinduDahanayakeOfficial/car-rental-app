using System.Text.Json.Serialization;

namespace CarRentalBackend.Entities
{
    public class Brand
    {
        public int Id { get; set; }
        public string BrandName { get; set; }

        [JsonIgnore]  // Prevents circular reference
        public ICollection<Model> Models { get; set; }


    }
}
