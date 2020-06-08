using System;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace ItemsService.Models
{
    public class Items
    {
        [Key]
        public int id { get; set; }

        [Column(TypeName = "varchar(255)")]
        public String title { get; set; }

        [Column(TypeName = "varchar(255)")]
        public String description { get; set; }

        [Column(TypeName = "varchar(255)")]
        public String image { get; set; }
    }
}
