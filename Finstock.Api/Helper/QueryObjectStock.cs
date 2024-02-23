namespace Finstock.Api.Helper
{
    public class QueryObjectStock
    {
        public string Symbol { get; set; } = string.Empty;
        public string ComponyName { get; set; } = string.Empty;
        public string Industry { get; set; } = string.Empty;
        public string OrderBy { get; set; } = string.Empty;
        public bool IsDesending { get; set; }=false;
        public int PageNumber { get; set; } = 1;
        public int PageSize { get; set; } = 20;
    }
}
