﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Solution1.Domain.Entities.Common
{
    public class Customer: BaseEntity
    {
        public string Name { get; set; }
        public ICollection<Order> orders;
    }
}
