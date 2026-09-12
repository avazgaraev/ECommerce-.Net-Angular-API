using Solution1.Application.Repositories;
using Solution1.Application.Repositories.OrderRepository;
using Solution1.Domain.Entities.Common;
using Solution1.Persistence.Contexts;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Solution1.Persistence.Repositories.OrderRepository
{
    public class OrderReadRepository : ReadRepository<Order>, IOrderReadRepository
    {
        public OrderReadRepository(Solution1DbContext context) : base(context)
        {
        }
    }
}
