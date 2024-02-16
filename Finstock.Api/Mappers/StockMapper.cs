using Finstock.Api.DTOs.Stock;
using Finstock.Api.Models;
using System.Runtime.CompilerServices;

namespace Finstock.Api.Mappers
{
    public static class StockMapper
    {
        public static StockDto ToStockDto(this Stock stockModel)
        {
            return new StockDto()
            {
                Id = stockModel.Id,
                Symbol=stockModel.Symbol,
                ComponyName=stockModel.ComponyName,
                Purchase = stockModel.Purchase,
                LastDiv = stockModel.LastDiv,
                Industry = stockModel.Industry,
                MarketCap = stockModel.MarketCap
            };
        }
    }
}
