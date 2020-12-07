class UI {
    constructor(){
        this.company = document.getElementById('company');
    }
    showCompany(tickers) {
        // console.log(tickers[0].symbol);
        let output = "";
        // let tickersArray = Array.from(tickers);
        tickers.forEach(function(ticker){
            output += `
                <li class="list-group-item list-group-item-action">
                    ${ticker['1. symbol']} 
                    <span class="text-right">${ticker['2. name']}</span>
                </li>
            `;
        });
                //    <span class="symbol"> ${ticker['1. symbol']} </span>
        // console.log(output);
        this.company.innerHTML = output;
    }

    showPrice(tickers) {
        console.log(tickers);
        const ticker = tickers['01. symbol'];
        const price = parseFloat(tickers['05. price']);
        document.getElementById('ticker-symbol').value = ticker;
        document.getElementById('current-price').value = price.toFixed(2);
        // Show results
        document.querySelector('#results').style.display = 'block';
        // Hide loader
        document.querySelector('#loading').style.display = 'none';
    }
    clearTicker() {
        this.company.innerHTML = '';
    }
}