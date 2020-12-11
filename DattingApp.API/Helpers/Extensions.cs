using Microsoft.AspNetCore.Http;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace DatingApp.API.Helpers
{
    public static class Extensions
    {
        public static void AddApplicationError(this HttpResponse respose,string message)
        {
            respose.Headers.Add("Application-Error", message);
            respose.Headers.Add("Access-Control-Expose-Headers","Application-Error");
            respose.Headers.Add("Access-Control-Allow-Origin","*");
        }
        public static int CalculateAge(this DateTime theDateTime)
        {
            var age = DateTime.Today.Year - theDateTime.Year;
            if (theDateTime.AddYears(age) > DateTime.Today)
                age--;
            return age;
        }
    }
}
