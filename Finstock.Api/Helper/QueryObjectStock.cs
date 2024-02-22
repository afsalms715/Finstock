namespace Finstock.Api.Helper
{
    public class QueryObjectStock
    {
        public string Symbol { get; set; } = string.Empty;
        public string ComponyName { get; set; } = string.Empty;
        public string Industry { get; set; } = string.Empty;
        public string OrderBy { get; set; }
        public bool IsDesending { get; set; }=false;
    }
}
