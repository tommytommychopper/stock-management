// Search user's ticker by user input and make suggestion!
data = JSON.parse(data.replace(/&quot;/g, '"'));

const input = document.getElementById('ticker');
const box = document.getElementById('box');

let filteredArr = []
input.addEventListener('keyup', (e) => {
    box.textContent = '';
    filteredArr = data.filter(stock => stock['ticker'].includes(e.target.value.toUpperCase()))
    if(filteredArr.length > 0){
        filteredArr.map(data => {
            box.innerHTML += `<li class="list-group-item">${data['ticker']}</li>`;
        });
    }else{
        box.innerHTML = "<h3>You don't have the stock!</h3>";
    }
}) 

// Initialize ticker class
const ticker = new Ticker;
// Initialize ui class
const ui = new UI;
// Get Value from input
const searchTicker = document.getElementById('ticker');

document.getElementById('search-price').addEventListener('submit', (e) => {
    // Hide results
    document.querySelector('#results').style.display = 'none';
    // Show loader
    document.querySelector('#loading').style.display = 'block';

    setTimeout(searchPrice, 500);
    e.preventDefault();
});

let userText = "";
function searchPrice() {
    userText = searchTicker.value;
    if(userText !== '') {
        ticker.getPrice(userText)
            .then(data => {
                // console.log(data['Global Quote']['05. price']);
                ui.showPrice(data['Global Quote']);
            })
    } 
}

// Define UI vars 
const searchResultBox = document.getElementById('box');
const textInput = document.querySelector('#ticker');
const totalShare = document.querySelector('#total-share');
const currentPrice = document.querySelector('#current-price');
const totalProfit = document.querySelector('#total-profit');
const clearBotton = document.querySelector('.btn-danger');
const result = document.querySelector('#results');

loadEventListeners();

function loadEventListeners() { 
    //Insert Ticker Text into Input form
    searchResultBox.addEventListener('click', insertTicker);
    //Calculate total profit/loss you are going to make the stock 
    totalShare.addEventListener('keyup', calculateProfit);
    //Clear Result 
    clearBotton.addEventListener('click', clearResult);
}

function insertTicker(e) {
    if (e.target.classList.contains('list-group-item')) {
        textInput.value = '';
        textInput.value = e.target.textContent;
    //     const symbol = e.target.children[0].textContent;
    //     textInput.value = symbol;
    }
}

function calculateProfit(e) {
    const shares = e.target.value;
    const price = parseFloat(currentPrice.value);
    const total =  (shares * price).toFixed(2);
    let acquisition_cost = 0.0;
    data.forEach(data => {
        if (data.ticker === userText.toUpperCase()){
            acquisition_cost = data.acquisition_cost;
        }
    });
    const profit = (total - (acquisition_cost*shares)).toFixed(2);
    totalProfit.value = profit;
}

function clearResult(){
    document.getElementById('box').textContent = '';
    result.textContent = '';
}
