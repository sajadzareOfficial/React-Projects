using Microsoft.AspNetCore.Authentication.Cookies;
using WebApplication1.Middlewares;

var builder = WebApplication.CreateBuilder(args);

// Add services to the container.

builder.Services.AddControllers();

PolicyMiddleware.AddPolicy(builder, "https://nicmusic.net");

var app = builder.Build();

app.UseCors("ReactPolicy");
app.Map("/details", appbilder =>
{
    appbilder.Use(async (context, next) =>
    {
        var name = context.Request.Query["name"];
        if(!string.IsNullOrWhiteSpace(name))
            context.Items.Add("name",name);
        await next.Invoke();

    });
    appbilder.Run(async context =>
    {
        var quer = context.Items["name"];
        await context.Response.WriteAsync($"my name is {quer}");
    });

});
// use 

app.Map("/Home", builder =>
{
    builder.Run(async builder =>
        {
             await builder.Response.WriteAsync("here is Home men");
        }
    );
});


//app.Run(async context =>
//{
//    //var QueryData = context.Request.Query["name"];

//    await context.Response.WriteAsync("hi men here if home");

//    //context.Response.Redirect("http://localhost:5173/");

//});

app.MapControllers(); 

app.Run();

//app.UseMvc();

// builder.Services.AddAuthentication(options =>
// {
//     options.DefaultScheme = CookieAuthenticationDefaults.AuthenticationScheme;
//     // options.DefaultChallengeScheme = CookieAuthenticationDefaults.AuthenticationScheme;
// });

// Configure the HTTP request pipeline.

//app.UseHttpsRedirection();

// app.UseAuthorization();


// app.MapControllers();

