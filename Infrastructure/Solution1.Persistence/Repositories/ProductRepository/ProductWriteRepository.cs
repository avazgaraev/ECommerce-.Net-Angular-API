using Solution1.Application.Repositories.ProductRepository;
using Solution1.Domain.Entities.Common;
using Solution1.Persistence.Contexts;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Solution1.Persistence.Repositories.ProductRepository
{
    public class ProductWriteRepository : WriteRepository<Product>, IProductWriteRepository
    {
        public ProductWriteRepository(Solution1DbContext context) : base(context)
        {
        }
    }
}
