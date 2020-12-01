class Ticker {
    constructor(){
        this.apiKey = 'EIUAKU6JXSWNBCYI';
    }
    async getTicker(ticker) {
        const tickerResponse = await fetch(`https://www.alphavantage.co/query?function=SYMBOL_SEARCH&keywords=${ticker}&apikey=${this.apiKey}`);
        const company = await tickerResponse.json();
        return company;
    }

    async getPrice(ticker) {
        const priceResponse = await fetch(`https://www.alphavantage.co/query?function=GLOBAL_QUOTE&symbol=${ticker.trim()}&apikey=${this.apiKey}`);
        const price = await priceResponse.json();
        return price;
    }
}