// Initialize ticker class
const ticker = new Ticker;
// Initialize ui class
const ui = new UI;
// Get Value from input
const searchTicker = document.getElementById('ticker');
// Search Price for particular stock 

const labels = [];
const shares = [];
data.forEach(d => {
    labels.push(d['ticker']);
    shares.push(d['total_share']);
});

console.log(data);

// Define UI vars 
const priceList = document.querySelectorAll('.price');
const changeList = document.querySelectorAll('.change');
const shareList = document.querySelectorAll('.total_share');
const aquisitionList = document.querySelectorAll('.aquisition_cost');
const profitList = document.querySelectorAll('.return');
const dollar = document.querySelector('#dollar')
const percent = document.querySelector('#percent');

// Get Live Stock Data using Fetch API every 5 min
let stocks;
// setInterval(()=>{
ticker.getQuote(labels)
.then(data => {
    data.forEach((d, i)=>{
        stocks = data;
        price = parseFloat(d['Global Quote']['05. price']).toFixed(2);
        priceList[i].textContent = price;
        change = parseFloat(d['Global Quote']['09. change']).toFixed(2);
        setChange(change, i, '');
        calculateProfit(i);
    });
})
// }, 300000)

function calculateProfit(i){
    const price = priceList[i].textContent;
    const share = shareList[i].textContent;
    const aquisition_cost = aquisitionList[i].textContent;
    const profit = ((price * share) - (aquisition_cost * share)).toFixed(2);
    if(profit >= 0){
        profitList[i].style.color = 'green';
    }else{
        profitList[i].style.color = 'red'
    }
    profitList[i].textContent = profit;
}

// EventListeners
// change the format to PERCENT
percent.addEventListener('click', ()=>{
    stocks.forEach((stock, i)=>{
        change = parseFloat(stock['Global Quote']['10. change percent']).toFixed(2);
        setChange(change, i,  '%');
    });
});

// change the format to Dollar 
dollar.addEventListener('click', ()=>{
    stocks.forEach((stock, i)=>{
        change = parseFloat(stock['Global Quote']['09. change']).toFixed(2);
        setChange(change, i, '');
    });

});

// output the results
function setChange(change, i , sign){
    if(change >= 0){
        changeList[i].style.color = 'green';
    }else{
        changeList[i].style.color = 'red';
    }
    if(sign !== ''){
        changeList[i].textContent = `${change} ${sign}`; 
    }else{
        changeList[i].textContent = change;
    }
}

// Draw Chart
let myChart = document.getElementById('myChart').getContext('2d');
console.log(data);

let type = 'pie';

let portfolioChart = new Chart(myChart, {
    type: type, 
    data: {
        datasets: [
        {
            label: 'Portfolio',
            backgroundColor: ['#f1c40', '#e67e22', '#16a085', '#2980b9', '#FB3640'], 
            data: shares, 
        },
        ],
        labels: labels,
    },
    options: {
        legend: {
            position: 'right',
        },
        plugins: {
            datalabels: {
                color: '#fff',
                font: {
                    weight: 'bold',
                    size: 10
                },
            },
        },
    },
});

// destroy previous chart and create new one
document.body.addEventListener('click', (e) => {
    if(e.target.classList.contains('chart')){
        type = e.target.parentElement.id;
        const chart = document.querySelector('#myChart');
        portfolioChart.destroy();
        if(type === 'bar' || type ==='horizontalBar' || type === 'line'){
            portfolioChart = new Chart(myChart, {
                type: type, 
                data: {
                    datasets: [
                    {
                        label: 'Portfolio',
                        backgroundColor: ['#f1c40', '#e67e22', '#16a085', '#2980b9', '#FB3640'], 
                        data: shares, 
                    },
                    ],
                    labels: labels,
                },
                options: {
                    legend: {
                        position: 'right',
                    },
                    
                    plugins: {
                        datalabels: {
                            color: '#fff',
                            font: {
                                weight: 'bold',
                                size: 10
                            },
                        },
                    },
                },
            });
        }else{
            portfolioChart = new Chart(myChart, {
                type: type, 
                data: {
                    datasets: [
                    {
                        label: 'Portfolio',
                        backgroundColor: ['#f1c40', '#e67e22', '#16a085', '#2980b9', '#FB3640'], 
                        data: shares, 
                    },
                    ],
                    labels: labels,
                },
                options: {
                    legend: {
                        position: 'right',
                    },
                    scales: {
                        yAxes: [{
                            ticks: {
                                beginAtZero: true,
                                
                            }
                        }]
                    },  
                    plugins: {
                        datalabels: {
                            color: '#fff',
                            font: {
                                weight: 'bold',
                                size: 10
                            },
                        },
                    },
                },
            });
        }
    }
});


