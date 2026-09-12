using Microsoft.Extensions.DependencyInjection;
using Microsoft.EntityFrameworkCore;
using Solution1.Persistence.Contexts;
using Solution1.Application.Repositories.ProductRepository;
using Solution1.Persistence.Repositories.ProductRepository;
using Solution1.Application.Repositories.OrderRepository;
using Solution1.Persistence.Repositories.OrderRepository;
using Solution1.Application.Repositories.CustomerRepository;
using Solution1.Persistence.Repositories.CustomerRepository;


namespace Solution1.Persistence
{
    public static class PersistenceRegistration
    {
        public static void AddPersistenceServices(this IServiceCollection services)
        {
            services.AddDbContext<Solution1DbContext>(options=>options.UseNpgsql(Configuration.ConnectionString));
            services.AddScoped<IProductReadRepository, ProductReadRepository>();
            services.AddScoped<IProductWriteRepository, ProductWriteRepository>();
            services.AddScoped<IOrderWriteRepository, OrderWriteRepository>();
            services.AddScoped<IOrderReadRepository, OrderReadRepository>();
            services.AddScoped<ICustomerReadRepository, CustomerReadRepository>();
            services.AddScoped<ICustomerWriteRepository, CustmerWriteRepository>();
        }
    }
}
