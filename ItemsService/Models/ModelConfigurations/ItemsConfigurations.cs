using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ItemsService.Models.ModelConfigurations
{
    public class ItemsConfigurations: IEntityTypeConfiguration<Items>
    {
        public void Configure(EntityTypeBuilder<Items> builder)
        {
            builder.HasKey(prop => prop.id);
            builder.Property(prop => prop.title);
            builder.Property(prop => prop.description);
            builder.Property(prop => prop.image);

        }
    }
}

