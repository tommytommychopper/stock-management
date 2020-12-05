let myChart = document.getElementById('myChart').getContext('2d');
console.log(myChart);

let labels = ['ZM', 'GDRX', 'LYFT', 'UBER', 'U'];
let type = 'pie';

let portfolioChart = new Chart(myChart, {
    type: type, 
    data: {
        datasets: [
        {
            label: 'Portfolio',
            backgroundColor: ['#f1c40', '#e67e22', '#16a085', '#2980b9', '#FB3640'], 
            data: [10, 20, 30, 40, 50], 
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
                anchor: 'end',
                align: 'start',
                font: {
                    weight: 'bold',
                    size: 10
                },
            },
        },
    },
})

document.body.addEventListener('click', (e) => {
    if(e.target.classList.contains('chart')){
        type = e.target.parentElement.id;
        const chart = document.querySelector('#myChart');
        portfolioChart.destroy();
        portfolioChart = new Chart(myChart, {
            type: type, 
            data: {
                datasets: [
                {
                    label: 'Portfolio',
                    backgroundColor: ['#f1c40', '#e67e22', '#16a085', '#2980b9', '#FB3640'], 
                    data: [10, 20, 30, 40, 50], 
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
                        anchor: 'end',
                        align: 'start',
                        font: {
                            weight: 'bold',
                            size: 10
                        },
                    },
                },
            },
        })
    }
});