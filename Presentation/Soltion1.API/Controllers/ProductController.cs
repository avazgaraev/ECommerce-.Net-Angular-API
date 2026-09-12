using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Solution1.Application.Repositories.ProductRepository;
using Solution1.Application.RequestParameters;
using Solution1.Application.ViewModels.Products;
using Solution1.Domain.Entities.Common;
using System.Diagnostics.Contracts;
using System.Runtime.InteropServices;

namespace Soltion1.API.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ProductController : ControllerBase
    {
        private readonly IProductWriteRepository _productWriteService;
        private readonly IProductReadRepository _productReadService;
        public ProductController(IProductWriteRepository productWriteService, IProductReadRepository productReadService)
        {
            _productWriteService = productWriteService;
            _productReadService = productReadService;
        }

        [HttpGet]
        public async Task<IActionResult> Get([FromQuery] Pagination pagination)
        {
            var totalNumber = _productReadService.GetAll(false).Count();
            var products = _productReadService.GetAll(false).Skip(pagination.Size * pagination.Page).Take(pagination.Size).Select(p => new
            {
                p.Id,
                p.Price,
                p.Name,
                p.Stock,
                p.CreatedDate,
                p.UpdatedDate
            }); 
            return Ok(new { 
                totalNumber,
                products});
        }

        [HttpGet("{id}")]
        public async Task<Product> GetById(string id)
        {
            Product product = await _productReadService.GetByIdAsync(id,false);
            return product;

        }

        [HttpPost]
        public async Task<IActionResult> Post(VM_Product_Create model)
        {
            await _productWriteService.AddAsync(new()
            {
                Name = model.Name,
                Price = model.Price,
                Stock = model.Stock,
            });
            await _productWriteService.SaveAsync();
            return Ok();
        }

        [HttpPut]
        public async Task<IActionResult> Put(VM_Product_Update model)
        {
            Product product = await _productReadService.GetByIdAsync(model.ID);
            product.Stock = model.Stock;
            product.Name = model.Name;
            product.Price = model.Price;
            await _productWriteService.SaveAsync();
            return Ok();
        }

        [HttpDelete("{id}")]
        public async Task<IActionResult> Delete(string id)
        {
            await _productWriteService.RemoveAsync(id);
            await _productWriteService.SaveAsync();
            return Ok();
        }
    }
}
