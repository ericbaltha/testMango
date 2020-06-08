using System;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace AuthService.Models
{
    public class Account
    {
        [Key]
        public String username {get; set;}

        [Column(TypeName = "varchar(255)")]
        public String password { get; set; }
    }
}
