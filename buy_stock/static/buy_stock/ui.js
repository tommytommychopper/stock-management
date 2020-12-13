class UI {
    constructor() {
        this.company = document.getElementById('box');
    }
    showCompany(tickers) {
        let output = "";
        for (let i = 0; i < tickers.length; i++) {
            output += `
                <li class="list-group-item list-group-item-action">
                    ${tickers[i]['1. symbol']} 
                    <span class="text-right">${tickers[i]['2. name']}</span>
                </li>
            `;
        }
        this.company.innerHTML = output;
    }

    showPrice(apiResult) {
        const ticker = apiResult['01. symbol'];
        const price = parseFloat(apiResult['05. price']);
        let share = 0;
        let acquisition_cost = 0.0
        // data is comming from django template 
        for (let i = 0; i < data.length; i++) {
            if (data[i].ticker === ticker) {
                share = data[i].total_share;
                acquisition_cost = (data[i].acquisition_cost).toFixed(2);
            }
        }
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

    displayChart(data, name, term) {
        let keys = Object.keys(data);
        let dates = [];
        let pricesClose = [];
        const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun",
            "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
        // get prices for last no. of months
        for (let i = 0; i < term; i++) {
            let key = keys[i];
            pricesClose.push(data[key]['4. close']);
            dates.push(months[Number(key.slice(5, 7) - 1)] + key.slice(2, 4));
        }
        let labels = dates.reverse();
        let prices = pricesClose.reverse();
        let indexChart = document.getElementById('index').getContext('2d');
        indexChart = new Chart(indexChart, {
            // The type of chart we want to create
            type: 'line',
            // The data for our dataset
            data: {
                labels: labels,
                datasets: [{
                    label: name,
                    borderColor: '#28a745',
                    data: prices,
                    lineTension: 0,
                }]
            },
            // Configuration options go here
            options: {}
        });
    }
}