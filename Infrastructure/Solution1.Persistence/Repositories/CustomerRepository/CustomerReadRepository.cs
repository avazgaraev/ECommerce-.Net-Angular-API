using Solution1.Application.Repositories.CustomerRepository;
using Solution1.Domain.Entities.Common;
using Solution1.Persistence.Contexts;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Solution1.Persistence.Repositories.CustomerRepository
{
    public class CustomerReadRepository : ReadRepository<Customer>, ICustomerReadRepository
    {
        public CustomerReadRepository(Solution1DbContext context) : base(context)
        {
        }
    }
}
