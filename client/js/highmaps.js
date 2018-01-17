var data = [
    ['co-sa',0],
    ['co-ca', 1],
    ['co-na', 2],
    ['co-ch', 3],
    ['co-3653', 4],
    ['co-to', 5],
    ['co-cq', 6],
    ['co-hu', 7],
    ['co-pu', 8],
    ['co-am', 9],
    ['co-bl', 10],
    ['co-vc', 11],
    ['co-su', 12],
    ['co-at', 13],
    ['co-ce', 14],
    ['co-lg', 15],
    ['co-ma', 16],
    ['co-ar', 17],
    ['co-ns', 18],
    ['co-cs', 19],
    ['co-gv', 20],
    ['co-me', 21],
    ['co-vp', 22],
    ['co-vd', 23],
    ['co-an', 24],
    ['co-co', 25],
    ['co-by', 26],
    ['co-st', 27],
    ['co-cl', 28],
    ['co-cu', 29],
    ['co-1136', 30],
    ['co-ri', 31],
    ['co-qd', 32],
    ['co-gn', 33]
];

// Create the chart
Highcharts.mapChart('mapContainer', {
    chart: {
        map: 'countries/co/co-all'
    },

    title: {
        text: 'Barómetro'
    },

    subtitle: {
        text: 'Seleccione el Departamento'
    },

    mapNavigation: {
        enabled: true,
        buttonOptions: {
            verticalAlign: 'bottom'
        }
    },

    colorAxis: {
        min: 0,
        max: 30,
        stops: [
            [0, '#009900'],
            [0.5, '#ffff00'],
            [0.9, '#cc0000']
        ],
    },
    
    plotOptions:{
    	series:{
        	point:{
            	events:{
                	click: function(){
                    	window.location = window.location + "department?idDepartment=" + this.options["hc-key"] + "&departmentName=" + this.name;
                    }
                }
            }
        }
    },

    series: [{
        data: data,
        name: 'Riesgo Alto',
        states: {
            hover: {
                color: '#BADA55'
            }
        },
        dataLabels: {
            enabled: true,
            format: '{point.name}'
     }
    }]
});
