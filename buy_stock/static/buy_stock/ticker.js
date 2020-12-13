class Ticker {
    constructor() {
        // this.apiKey = 'EIUAKU6JXSWNBCYI';
        this.apiKey = '64HTJZOFLGKCO0UW';
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

    async getQuote(labels) {
        const quotes = [];
        for (let i = 0; i < labels.length; i++) {
            const priceResponse = await fetch(`https://www.alphavantage.co/query?function=GLOBAL_QUOTE&symbol=${labels[i]}&apikey=${this.apiKey}`);
            quotes.push(await priceResponse.json());
        }
        return quotes;
    }
    async getMonthlyPrice(symbol) {
        const priceResponse = await fetch(`https://www.alphavantage.co/query?function=TIME_SERIES_MONTHLY&symbol=${symbol}&apikey=${this.apiKey}`);
        const price = await priceResponse.json();
        return price;
    }
}