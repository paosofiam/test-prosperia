let myGraph;

/*Función para imprimir PDFs*/
function plotGraph(graphData) {//La función se llama directo desde el index.html con "onclick"
    var ctx = document.getElementById('myGraph').getContext('2d');

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

    if (myGraph) {//Si ya hay un canvas lo destruye antes de imprimir uno nuevo para permitir la actualización/filtrado por el mapa
        myGraph.destroy();
    }

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