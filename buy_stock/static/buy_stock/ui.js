class UI {
    constructor(){
        this.company = document.getElementById('box');
    }
    showCompany(tickers) {
        let output = "";
        tickers.forEach(function(ticker){
            output += `
                <li class="list-group-item list-group-item-action">
                    ${ticker['1. symbol']} 
                    <span class="text-right">${ticker['2. name']}</span>
                </li>
            `;
        });
        this.company.innerHTML = output;
    }

    showPrice(data) {
        const ticker = data['01. symbol'];
        const price = parseFloat(data['05. price']);
        let share = 0;
        let acquisition_cost = 0.0
        for(let i = 0; i < data.length; i++){
            if (data.ticker === userText.toUpperCase()){
                share = data.total_share; 
                acquisition_cost = (data.acquisition_cost).toFixed(2);
            }
        } 
        console.log(document.getElementById('box').textContent);
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