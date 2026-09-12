using Solution1.Domain.Entities.Common;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Solution1.Persistence.Concretes
{
    public class ProductService
    {
        public List<Product> GetProducts()
            => new()
            {
                new Product
                {
                    Id = Guid.NewGuid(),
                    Name = "Test1",
                    Price = 100,
                    Stock = 10
                },
                new Product
                {
                    Id = Guid.NewGuid(),
                    Name = "Test2",
                    Price = 100,
                    Stock = 10
                },
                new Product
                {
                    Id = Guid.NewGuid(),
                    Name = "Test3",
                    Price = 300,
                    Stock = 10
                },
                new Product
                {
                    Id = Guid.NewGuid(),
                    Name = "Test4",
                    Price = 400,
                    Stock = 10
                },
                new Product
                {
                    Id = Guid.NewGuid(),
                    Name = "Test5",
                    Price = 200,
                    Stock = 10
                }
            };
    }
}
