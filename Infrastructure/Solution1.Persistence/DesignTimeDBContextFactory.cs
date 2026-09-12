using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Design;
using Microsoft.Extensions.Configuration;
using Solution1.Persistence.Contexts;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Solution1.Persistence
{
    public class DesignTimeDBContextFactory : IDesignTimeDbContextFactory<Solution1DbContext>
    {
        public Solution1DbContext CreateDbContext(string[] args)
        {
            DbContextOptionsBuilder<Solution1DbContext> builder = new();
            builder.UseNpgsql(Configuration.ConnectionString);
            return new(builder.Options);
        }
    }
}
