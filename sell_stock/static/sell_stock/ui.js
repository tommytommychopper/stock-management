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
                    <span class="symbol"> ${ticker['1. symbol']} </span>
                    <span class="text-right">${ticker['2. name']}</span>
                </li>
            `;
        });
        // console.log(output);
        this.company.innerHTML = output;
    }

    showPrice(tickers) {
        const ticker = tickers['01. symbol'];
        const price = parseFloat(tickers['05. price']);
        let share = 0;
        let acquisition_cost = 0.0
        data.forEach(data => {
            if (data.ticker === userText.toUpperCase()){
                share = data.total_share; 
                acquisition_cost = (data.acquisition_cost).toFixed(2);
            }
        });
        document.getElementById('box').textContent = '';
        document.getElementById('box').innerHTML = `
            <table class="table table-bordered">
                <tr>
                    <th>Shares</th>
                    <th>Acquisition Cost</th> 
                </tr>
                <tr>
                    <td>${share}</td>
                    <td>${acquisition_cost}</td>
                </tr>
            </table>
            `;
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