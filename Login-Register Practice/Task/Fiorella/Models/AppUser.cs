using Microsoft.AspNetCore.Identity;

namespace Fiorella.Models
{
    public class AppUser : IdentityUser
    {
        public string FullName { get; set; }
    }
}
