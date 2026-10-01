
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Hosting.Server;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System.ComponentModel.DataAnnotations;
using System.IO;
using System.Net;
using System.Text;
using System.Text.Json;

using System.Web;
// using System.Web.Http;
using WebApplication1.Model;
using static System.Runtime.InteropServices.JavaScript.JSType;
// using Microsoft.AspNetCore.Mvc;
// using Application.Features.Properties.Commands;
// using Application.Features.Properties.Queries;
namespace WebApplication1.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class UserInfoController : ControllerBase
    {
        private List<UserModel> usersData = new List<UserModel>()
        {
            new UserModel("sajad", "zare", 1),
            new UserModel("mmd","mosavi",2)
        };
        
        private  ILogger<UserInfoController> _logger;
        
        public UserInfoController(ILogger<UserInfoController> logger)
        {
            _logger = logger;
        }

         


        [HttpGet(Name = "UserInfo")]
        // [Authorize()]
        // public  UserInfo Get()
        public  string Get()
        {
            var rand = new Random();
           var cho =  rand.Next(0, usersData.Count);
           return usersData[cho].Name;
            // return (List<UserModel>)usersData;

        }

        [HttpPost]
        
        // public void Post(IFormCollection form, ILogger<UserInfoController> logger)
        public async Task<IActionResult> Post(List<string> quer)
        {
            bool handle = true;
            //var data = new UserModel(query);
            //var data = query;

            //await Response.WriteAsJsonAsync(quer);
            //foreach (var item in quer.)
            //{
            //    if (quer.keys)
            //    {
            //        handle = false;
            //    }
            //}
            //JsonElement.ParseValue(new Utf8JsonReader());

            
            
            if (handle)
            {
                try
                {
                    //quer = JsonSerializer.Serialize()

                    FileStream obj = new FileStream(@"C:\\Users\\dark_lord\\Desktop\\Project C#\\WebApplication1\\db.txt", FileMode.Create);

                    //byte[] text = Encoding.UTF8.GetBytes(quer.);
                    foreach (var VARIABLE in quer)
                    {
                        byte[] text = Encoding.UTF8.GetBytes(VARIABLE);
                        obj.Write(text);
                    
                    }
                    obj.Close();
                    //byte[] text = Encoding.UTF8.GetBytes(_logger.ToString());
                    //var text = quer.GetBytesFromBase64();




                }
                catch (Exception e)
                {
                    Console.WriteLine(e);
                    throw ;
                }
                return StatusCode(200);
            }

            return StatusCode(400);
            //return StatusCode(404);
            //var stat = await;


            //return Redirect("www.google.com");
            // return StatusCode(200);
            // var data = form.Keys;
            // UserInfoController(data);
            // Console.WriteLine(data);
            // return data;
            // logger.LogInformation(JsonSerializer.Serialize(form));
            // return JsonSerializer.Serialize(form);

            // _logger.Log();


            // Console.WriteLine();
            //await Response.WriteAsync("its ok");
            //return StatusCode(200);
        }


        // static readonly Dictionary<Guid, PostModel> updates = new Dictionary<Guid, PostModel>();

        // [HttpPost]
        // [ActionName("Complex")]
        // public HttpResponseMessage PostComplex(PostModel update)
        // {   
        //     if (ModelState.IsValid && update != null)
        //     {
        //         // Convert any HTML markup in the status text.
        //         update.Status = HttpUtility.HtmlEncode(update.Status);
        //
        //         // Assign a new ID.
        //         var id = Guid.NewGuid();
        //         updates[id] = update;
        //
        //         // Create a 201 response.
        //         var response = new HttpResponseMessage(HttpStatusCode.Created)
        //         {
        //             Content = new StringContent(update.Status)
        //         };
        //         response.Headers.Location =
        //             new Uri(Url.Link("DefaultApi", new { action = "status", id = id }));
        //         return response;
        //     }
        //     else
        //     {
        //         return Request.CreateResponse(HttpStatusCode.BadRequest);
        //     }
        // }


        //[HttpGet(Name = "Index")]
        //public 
        //public IEnumerable<WeatherForecast> Get()
        //{
        //    return Enumerable.Range(1, 5).Select(index => new WeatherForecast
        //    {
        //        Date = DateOnly.FromDateTime(DateTime.Now.AddDays(index)),
        //        TemperatureC = Random.Shared.Next(-20, 55),
        //        Summary = Summaries[Random.Shared.Next(Summaries.Length)]
        //    })
        //    .ToArray();
        //}

    }


}
