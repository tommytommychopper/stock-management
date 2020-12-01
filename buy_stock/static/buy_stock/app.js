// Initialize ticker class
const ticker = new Ticker;
// Initialize ui class
const ui = new UI;
// Get Value from input
const searchTicker = document.getElementById('ticker');
// Search Price for particular stock 
// const searchPrice = document.getElementById('search-price');

searchTicker.addEventListener('keyup', (e) => {
    const userText = e.target.value;
    if(userText !== '') {
        ticker.getTicker(userText)
            .then(data => {
                // console.log(data.bestMatches[0]['1. symbol']);
                ui.showCompany(data.bestMatches);
            })
    }
    
});

document.getElementById('search-price').addEventListener('submit', (e) => {
    //Hide search results
    document.querySelector('#company').innerText = '';
    // Hide results
    document.querySelector('#results').style.display = 'none';
    // Show loader
    document.querySelector('#loading').style.display = 'block';

    setTimeout(searchPrice, 1000);
    e.preventDefault();
});

function searchPrice() {
    const userText = searchTicker.value;
    if(userText !== '') {
        ticker.getPrice(userText)
            .then(data => {
                // console.log(data['Global Quote']['05. price']);
                ui.showPrice(data['Global Quote']);
            })
    } 
}

// Define UI vars 
const tickerList = document.querySelector('#company');
const textInput = document.querySelector('#ticker');
const totalShare = document.querySelector('#total-share');
const currentPrice = document.querySelector('#current-price');
const totalPrice= document.querySelector('#total-price');
const clearBotton = document.querySelector('.btn-danger');
const result = document.querySelector('#results');

loadEventListeners();

function loadEventListeners() { 
    //Insert Ticker Text into Input form
    tickerList.addEventListener('click', insertTicker);
    //Calculate total price you need to buy the stock 
    totalShare.addEventListener('keyup', calculatePrice);
    //Clear Result 
    clearBotton.addEventListener('click', clearResult);
}

function insertTicker(e) {
    if (e.target.classList.contains('list-group-item')) {
        const symbol = e.target.children[0].textContent;
        textInput.value = symbol;
    }
}

function calculatePrice(e) {
    const shares = e.target.value;
    const price = parseFloat(currentPrice.value);
    const total =  (shares * price).toFixed(2);
    totalPrice.value = total;
}

function clearResult(){
    result.textContent = '';
}
