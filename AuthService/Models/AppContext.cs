using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

using AuthService.Models;
using AuthService.Models.ModelConfigurations;
using Microsoft.EntityFrameworkCore;


namespace AuthService
{
    public class AppContext : DbContext
    {
        public AppContext(DbContextOptions<AppContext> options): base(options) { 
        }

        public DbSet<Account> Account { get; set; }

        protected override void OnModelCreating(ModelBuilder builder)
        {
            builder.ApplyConfiguration(new AccountConfiguration());
        }

    }
}
