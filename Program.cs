using StocksApp.Entities;
using StocksApp.Services;

var builder = WebApplication.CreateBuilder(args);

builder.Services.AddControllersWithViews();
builder.Services.AddSingleton<IJsonFileReader<StockData>, JsonFileReader<StockData>>();
builder.Services.AddSingleton<IJsonFileReader<StockDataValue>, JsonFileReader<StockDataValue>>();

var app = builder.Build();

app.UseStaticFiles();
app.UseRouting();


app.MapControllerRoute(
    name: "default",
    pattern: "{controller}/{action=Index}/{id?}");

app.MapFallbackToFile("index.html"); ;

app.Run();
