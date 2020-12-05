let myChart = document.getElementById('myChart').getContext('2d');
console.log(data);

const labels = [];
const shares = [];
data.forEach(d => {
    labels.push(d['ticker']);
    shares.push(d['total_share']);
});

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
                    scales: {
                            yAxes: [{
                                ticks: {
                                    beginAtZero: true,
                                    
                                }
                            }]
                    }  
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
            })
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

            })
        }
    }
});