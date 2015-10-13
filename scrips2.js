google.load('visualization', '1', {packages: ['corechart', 'bar']});
google.setOnLoadCallback(drawBasic);

function drawBasic() {

    var data = google.visualization.arrayToDataTable([
        ['Video Games', 'Best selling',],
        ['Wii Sports Resort', 32.6],
        ['Mario Kart Wii', 34.3 ],
        ['Grand Theft Auto V ', 45],
        ['Minecraft', 60],
        ['Wii Sports', 82.9]
    ]);

    var options = {
        title: 'Best selling video games',
        chartArea: {width: '50%'},
        hAxis: {
            title: 'in millions',
            minValue: 0
        },
        vAxis: {
            title: 'Video games'
        }
    };

    var chart = new google.visualization.BarChart(document.getElementById('chart_div'));

    chart.draw(data, options);
}
