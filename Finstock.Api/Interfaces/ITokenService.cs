using Finstock.Api.Models;

namespace Finstock.Api.Interfaces
{
    public interface ITokenService
    {
        string CreateToken(AppUser appUser);
    }
}
