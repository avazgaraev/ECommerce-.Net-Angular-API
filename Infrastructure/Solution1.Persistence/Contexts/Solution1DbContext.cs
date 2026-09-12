using Microsoft.EntityFrameworkCore;
using Solution1.Domain.Entities.Common;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Solution1.Persistence.Contexts
{
    public class Solution1DbContext : DbContext
    {
        public Solution1DbContext(DbContextOptions options) : base(options)
        {
        }

        public DbSet<Product> Products { get; set; }
        public DbSet<Customer> Customers{ get; set; }
        public DbSet<Order> Orders{ get; set; }

        public override Task<int> SaveChangesAsync(CancellationToken cancellationToken = default)
        {
            var changes = ChangeTracker.Entries<BaseEntity>();

            foreach (var change in changes)
            {
                _ = change.State switch
                {
                    EntityState.Added => change.Entity.CreatedDate = DateTime.UtcNow,
                    EntityState.Modified => change.Entity.UpdatedDate = DateTime.UtcNow,
                    EntityState.Deleted => change.Entity.RemovedDate = DateTime.UtcNow
                };
            }


            return base.SaveChangesAsync(cancellationToken);
        }
    }
}
