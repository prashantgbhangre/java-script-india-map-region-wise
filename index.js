 google.load('visualization', '1', {'packages': ['geochart']});
 google.setOnLoadCallback(drawMarkersMap);
 
function drawMarkersMap() {

            var data_region = google.visualization.arrayToDataTable([
            ['State',   'Data'],
            ['IN-JK',      0    ],
            ['IN-HP',      2    ],
            ['IN-PB',      4    ],
            ['IN-HR',      6    ],
            ['IN-UT',      8    ],
            ['IN-DL',      3    ],
            ['IN-UP',      5    ],
            ['IN-BR',      10    ],
            ['IN-JH',      12    ],
            ['IN-OR',      14    ],
            ['IN-WB',      16    ],
            ['IN-SK',      18    ],
            ['IN-AS',      12    ],
            ['IN-AR',      14    ],
            ['IN-ML',      16    ],
            ['IN-MN',      18    ],
            ['IN-NL',      12    ],
            ['IN-MZ',      14    ],
            ['IN-TR',      16    ],
            ['IN-RJ',      22    ],
            ['IN-MH',      24    ],
            ['IN-DN',      26    ],
            ['IN-GJ',      28    ],
            ['IN-AP',      32    ],
            ['IN-KA',      34    ],
            ['IN-GA',      36    ],
            ['IN-KL',      38    ],
            ['IN-TN',      32    ],
            ['IN-MP',      42    ],
            ['IN-CT',      44    ]
          ]);

          var options_region = {
            region: 'IN',
            dataMode: 'regions',
            resolution: "provinces",
            colorAxis: {colors: ['#FE9A2E', '#e6ecf1', '#FA5858','#00bff3','#58FA58']},
            backgroundColor: 'transparent',
            datalessRegionColor: 'transparent',
            tooltip: {trigger: 'none'}, // tooltip disable
            legend: 'none', // legent disable
            enableRegionInteractivity : true, // region interaction enable
          };
          
          var chart_region = new google.visualization.GeoChart(document.getElementById('chart_div_region'));        

          chart_region.draw(data_region, options_region);
  
// Click listener  
google.visualization.events.addListener(
      chart_region, 'regionClick', function(e) {
            alert ("You click on "+e['region']);    
    }); 
};