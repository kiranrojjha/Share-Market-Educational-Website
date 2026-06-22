document.addEventListener("DOMContentLoaded", function () {

    // Fee Breakdown Pie Chart
    const feeChart = new Chart(document.getElementById('feeChart'), {
        type: 'pie',
        data: {
            labels: [
                'Live Classes',
                'Study Material',
                'Mock Tests'
            ],
            datasets: [{
                label: 'Fee Breakdown',
                data: [50, 20, 30],
                backgroundColor: [
                    '#0d6efd',
                    '#6ea8fe',
                    '#9ec5fe'
                ],
                borderWidth: 1
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: true,
            plugins: {
                legend: {
                    position: 'bottom'
                }
            }
        }
    });

    // Syllabus Weightage Doughnut Chart
    const syllabusChart = new Chart(document.getElementById('syllabusChart'), {
        type: 'doughnut',
        data: {
            labels: [
                'Technical Analysis',
                'Fundamental Analysis',
                'Risk Management'
            ],
            datasets: [{
                label: 'Syllabus Weightage',
                data: [40, 30, 30],
                backgroundColor: [
                    '#0d6efd',
                    '#6ea8fe',
                    '#9ec5fe'
                ],
                borderWidth: 1
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: true,
            plugins: {
                legend: {
                    position: 'bottom'
                }
            }
        }
    });

});

// live market data fetching
const apiKey = "9DCLDBOKQGY3G2TQ";

fetch(`https://www.alphavantage.co/query?function=GLOBAL_QUOTE&symbol=IBM&apikey=${apiKey}`)

fetch("API_URL")
    .then(response => response.json())
    .then(data => {
        console.log(data);
    })
    .catch(error => {
        console.error(error);
    });

// top button
let topButton = document.getElementById("topBtn");

window.onscroll = function () {
    if (
        document.body.scrollTop > 200 ||
        document.documentElement.scrollTop > 200
    ) {
        topButton.style.display = "block";
    } else {
        topButton.style.display = "none";
    }
};

function topFunction() {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
}



