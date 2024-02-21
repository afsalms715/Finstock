﻿namespace Finstock.Api.DTOs.Stock
{
    public class UpdateStockDto
    {
        public string Symbol { get; set; } = string.Empty;
        public string ComponyName { get; set; } = string.Empty;
        public decimal Purchase { get; set; }
        public decimal LastDiv { get; set; }
        public string Industry { get; set; } = string.Empty;
        public int MarketCap { get; set; }
    }
}