using System.ComponentModel.DataAnnotations;

namespace Fiorella.ViewModels.Products
{
    public class ProductEditVM
    {
        [Required]
        public string Name { get; set; }
        [Required]
        public string Description { get; set; }
        [Required]
        public decimal Price { get; set; }
        public int CategoryId { get; set; }
        public List<IFormFile> NewImages { get; set; }
        public List<ProductEditImageVM> ExistImages { get; set; }
    }
}
