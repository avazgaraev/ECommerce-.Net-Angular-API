using Solution1.Domain.Entities.Common;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Solution1.Application.Repositories.OrderRepository
{
    public interface IOrderWriteRepository: IWriteRepository<Order>
    {
    }
}
