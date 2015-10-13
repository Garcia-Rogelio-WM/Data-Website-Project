google.setOnLoadCallback(drawChart);
function drawChart() {

    var data = google.visualization.arrayToDataTable([
        ['Task', 'Hours per Day'],
        ['Under 18',     6.24],
        ['18-35',      7.2],
        ['36-49',  4.08],
        ['50+ ', 6.48],
        ['',         0]
    ]);

    var options = {
        title: 'Age of gamers'
    };

    var chart = new google.visualization.PieChart(document.getElementById('piechart'));

    chart.draw(data, options);
}
