let myGraph;

function plotGraph(graphData) {
    var ctx = document.getElementById('miGrafico').getContext('2d');
    /*ctx.clearRect(0, 0, ctx.width, ctx.height);*/

    var line1 = {
        label: "UDS_TOT",
        data: graphData.UDS_TOT,
        lineTension: 0,
        fill: false,
        borderColor: 'powderblue'
    };   
    var line2 = {
        label: "ABS_MES",
        data: graphData.ABS_MES,
        lineTension: 0,
        fill: false,
        borderColor: 'plum'
    };

    if (myGraph) {
        myGraph.destroy();
    }
    /* var myGraph = new Chart(ctx, {
        type: 'line',
        data: plotData
    }); */

    myGraph = new Chart(ctx, {
        type: 'line',
        data: {
            labels: graphData.OBJECTID,
            datasets: [line1, line2,{
                label: 'UDS_TOT vs ABS/MEN',
                backgroundColor: [
                    'rgba(54, 162, 235, 0.2)',
                    'rgba(255, 206, 86, 0.2)',
                    'rgba(75, 192, 192, 0.2)',
                    'rgba(153, 102, 255, 0.2)'
                ],
                borderColor: [
                    'rgba(54, 162, 235, 1)',
                    'rgba(255, 206, 86, 1)',
                    'rgba(75, 192, 192, 1)',
                    'rgba(153, 102, 255, 1)'
                ],
                borderWidth: 1
            }]
        },
        options: {
            scales: {
                y: {
                    beginAtZero: true
                }
            }
        }
    });
}