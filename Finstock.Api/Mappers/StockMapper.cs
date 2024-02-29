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
                MarketCap = stockModel.MarketCap,
                Comments=stockModel.Comments.Select(c =>c.ToCommentDto()).ToList()
            };
        }
        public static Stock ToStockFromCreateStock(this CreateStockDto stockModel)
        {
            return new Stock()
            {
                Symbol = stockModel.Symbol,
                ComponyName = stockModel.ComponyName,
                Purchase = stockModel.Purchase,
                LastDiv = stockModel.LastDiv,
                Industry = stockModel.Industry,
                MarketCap = stockModel.MarketCap
            };
        }

        public static Stock ToStockFromFMPStock(this FMPStock stockModel)
        {
            return new Stock()
            {
                Symbol = stockModel.symbol,
                ComponyName = stockModel.companyName,
                Purchase = (decimal)stockModel.price,
                LastDiv = stockModel.lastDiv,
                Industry = stockModel.industry,
                MarketCap = (int)stockModel.mktCap
            };
        }
    }
}
