namespace WebApplication1.Middlewares
{
    public static class PolicyMiddleware
    {
        public static  void AddPolicy(WebApplicationBuilder builder,string Host)
        {
            builder.Services.AddCors(options =>
            {
                options.AddPolicy("ReactPolicy", policy =>
                {
                    policy
                        .WithOrigins($"{Host}")
                        .AllowAnyHeader()
                        .AllowAnyMethod();
                });
            });
            //return 
        }
    }
}
//builder.Services.AddCors(options =>
//{
//    options.AddPolicy("ReactPolicy", policy =>
//    {
//        policy
//            .WithOrigins("http://localhost:5173")
//            .AllowAnyHeader()
//            .AllowAnyMethod();
//    });
//});