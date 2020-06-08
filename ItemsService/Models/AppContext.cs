using ItemsService.Models;
using ItemsService.Models.ModelConfigurations;
using Microsoft.EntityFrameworkCore;

namespace ItemsService.Models
{
    public class AppContext : DbContext
    {
        public AppContext(DbContextOptions<AppContext> options) : base(options)
        {
        }

        public DbSet<Items> Items { get; set; }

        protected override void OnModelCreating(ModelBuilder builder)
        {
            builder.ApplyConfiguration(new ItemsConfigurations());
        }

    }
}
