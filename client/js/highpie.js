Highcharts.chart('pieContainer', {
    chart: {
        plotBackgroundColor: null,
        plotBorderWidth: null,
        plotShadow: false,
        type: 'pie'
    },
    title: {
        text: 'Distribución de la Infraestructura'
    },
    tooltip: {
        pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
    },
    plotOptions: {
        pie: {
            allowPointSelect: true,
            cursor: 'pointer',
            dataLabels: {
                enabled: false
            },
            showInLegend: true
        }
    },
    series: [{
        name: 'Tipo',
        colorByPoint: true,
        data: [{
            name: 'Clubes deportivos y recreativos',
            y: 56.33,
            sliced: true,
            selected: true
        }, {
            name: 'Estadios y canchas de fútbol',
            y: 24.03
        }, {
            name: 'Piscinas',
            y: 10.38
        }, {
            name: 'Centros de alto rendimiento',
            y: 4.77
        }, {
            name: 'Gimnasios',
            y: 0.91
        }, {
            name: 'Otras instalaciones deportivas',
            y: 0.2
        }]
    }]
});