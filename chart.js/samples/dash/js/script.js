var map = new Datamap({
  element: document.getElementById("map"),
  projection: 'mercator',
  fills: {
    defaultFill: "#36a2eb",
    authorHasTraveledTo: "#ff6384"
  },
  data: {
    USA: { fillKey: "authorHasTraveledTo" },
    JPN: { fillKey: "authorHasTraveledTo" },
    ITA: { fillKey: "authorHasTraveledTo" },
    CRI: { fillKey: "authorHasTraveledTo" },
    KOR: { fillKey: "authorHasTraveledTo" },
    DEU: { fillKey: "authorHasTraveledTo" },
  }
});

var colors = d3.scale.category10();

window.setInterval(function() {
  map.updateChoropleth({
    USA: colors(Math.random() * 10),
    RUS: colors(Math.random() * 100),
    AUS: { fillKey: 'authorHasTraveledTo' },
    BRA: colors(Math.random() * 50),
    CAN: colors(Math.random() * 50),
    ZAF: colors(Math.random() * 50),
    IND: colors(Math.random() * 50),
  });
}, 2000);


var barChartData = {
            labels: ["January", "February", "March", "April", "May", "June", "July"],
            datasets: [{
                label: 'Vendors',
                backgroundColor: window.chartColors.green,
                data: [
                    randomScalingFactor(), 
                    randomScalingFactor(), 
                    randomScalingFactor(), 
                    randomScalingFactor(), 
                    randomScalingFactor(), 
                    randomScalingFactor(), 
                    randomScalingFactor()
                ]
            }, {
                label: 'Marketing',
                backgroundColor: window.chartColors.blue,
                data: [
                    randomScalingFactor(), 
                    randomScalingFactor(), 
                    randomScalingFactor(), 
                    randomScalingFactor(), 
                    randomScalingFactor(), 
                    randomScalingFactor(), 
                    randomScalingFactor()
                ]
            },
            {
                label: 'Impairment Losses',
                backgroundColor: window.chartColors.yellow,
                data: [
                    randomScalingFactor(), 
                    randomScalingFactor(), 
                    randomScalingFactor(), 
                    randomScalingFactor(), 
                    randomScalingFactor(), 
                    randomScalingFactor(), 
                    randomScalingFactor()
                ]
            }, 
            {
                label: 'Utility',
                backgroundColor: window.chartColors.purple,
                data: [
                    randomScalingFactor(), 
                    randomScalingFactor(), 
                    randomScalingFactor(), 
                    randomScalingFactor(), 
                    randomScalingFactor(), 
                    randomScalingFactor(), 
                    randomScalingFactor()
                ]
            },{
                label: 'Salaries & Wages',
                backgroundColor: window.chartColors.red,
                data: [
                    randomScalingFactor(), 
                    randomScalingFactor(), 
                    randomScalingFactor(), 
                    randomScalingFactor(), 
                    randomScalingFactor(), 
                    randomScalingFactor(), 
                    randomScalingFactor()
                ]
            }]

        };




        var chartData = {
            labels: ["2010 FY", "2011 FY", "2012 FY", "2013 FY", "2014 FY", "2015 FY", "2016 FY"],

                datasets: [{
                type: 'line',
                options: {
                    scale: {
                            ticks: {
                                beginAtZero: true
                            }
                        }
                    },
                label: 'Debt-to-Equity',
                borderColor: window.chartColors.red,
                borderWidth: 2,
                fill: false,
                data: [
                    // randomScalingFactor(), 
                    // randomScalingFactor(), 
                    // randomScalingFactor(), 
                    // randomScalingFactor(), 
                    // randomScalingFactor(), 
                    // randomScalingFactor(), 
                    // randomScalingFactor()
                    40,
                    43,
                    45,
                    41,
                    46,
                    49,
                    56,

                ]
            }, {
                type: 'bar',
                label: 'Debt',
                options: {
                    scale: {
                            ticks: {
                                beginAtZero: true
                            }
                        }
                    },
                backgroundColor: window.chartColors.green,
                data: [
                    // randomScalingFactor(), 
                    // randomScalingFactor(), 
                    // randomScalingFactor(), 
                    // randomScalingFactor(), 
                    // randomScalingFactor(), 
                    // randomScalingFactor(), 
                    // randomScalingFactor()
                    20,
                    23,
                    25,
                    21,
                    26,
                    29,
                    32,


                ],
                borderColor: 'white',
                borderWidth: 2
            }, {
                type: 'bar',
                label: 'Equity',
                options: {
                    scale: {
                            ticks: {
                                beginAtZero: true
                            }
                        }
                    },
                backgroundColor: window.chartColors.blue,
                data: [
               
                    82,
                    87,
                    76,
                    81,
                    78,
                    81,
                    83,
                ],
                
            }]

        };


        window.onload = function() {
            var ctx4 = document.getElementById("chart4").getContext("2d");
             var myLine;
             window.myLine = new Chart(ctx4, config2);
          
            var ctx1 = document.getElementById("chart1").getContext("2d");
            var myChart1;

            window.myChart1 = new Chart(ctx1, {
                type: 'bar',
                data: barChartData,
                options: {
                    legend:{
                        position: "bottom",
                        labels:{
                            fontColor: "white",
                            fontSize: 10}
                    },

                    title:{
                        display:false,
                        text:"Product Performance",
                        fontFamily: "Source Sans Pro",
                        fontColor: "white",
                        fontSize: 16
                    },
                    tooltips: {
                        mode: 'index',
                        intersect: false,
                        fontColor: "white",
                    },
                    responsive: true,
                   
                    scales: {
                        xAxes: [{
                            stacked: true,
                            ticks: {
                                beginAtZero: true,
                                fontColor: "#888",
                                fontSize: 10,
                                
                            }
                        }],
                        yAxes: [{
                            
                            stacked: true,
                            ticks: {
                                fontColor: "#888",
                                fontSize: 10,
                                beginAtZero: true,
                            }
                        }]
                    }
                }
            });

// net margin win
            var chartEl = document.getElementById("chart8");
            var chart8 = new Chart(chartEl, {
                type: "line",
                data: lineChartData2,
                options: {
                     scales: {
                        gridLines: {
                            drawOnChartArea: false, // only want the grid lines for one axis to show up
                        },
                        xAxes: [{
                            gridLines: {
                            drawOnChartArea: false, // only want the grid lines for one axis to show up
                        },
                            
                            ticks: {
                                
                                display: false,
                                fontColor: "#888",
                                fontSize: 10,
                                beginAtZero: true},
                                
                                }],
                        yAxes: [{
                            gridLines: {
                            drawOnChartArea: false, // only want the grid lines for one axis to show up
                        },
                            
                            ticks: {
                                display: false,
                                fontColor: "#888",
                                fontSize: 10,
                                beginAtZero: true}

                        }]},
                    legend:{
                        position: "bottom",
                        display: false,
                        labels:{
                            fontColor: "white",
                            fontSize: 10}},

                    title:{
                        display: false,
                        text: "Chart.js - Custom Tooltips using Data Points"
                    },
                    tooltips: {
                        enabled: true,
                        mode: 'index',
                        intersect: false,
                        custom: customTooltips
                    }
                }
            });

// net margin end window

//net profit
            var ctx5 = document.getElementById("chart5");
            var chart5 = new Chart(ctx5, {
                type: "line",
                data: lineChartData,
                options: {
                     scales: {
                        gridLines: {
                            drawOnChartArea: false, // only want the grid lines for one axis to show up
                        },
                        xAxes: [{
                            gridLines: {
                            drawOnChartArea: false, // only want the grid lines for one axis to show up
                        },
                            
                            ticks: {
                                
                                display: false,
                                fontColor: "#888",
                                fontSize: 10,
                                beginAtZero: true},
                                
                                }],
                        yAxes: [{
                            gridLines: {
                            drawOnChartArea: false, // only want the grid lines for one axis to show up
                        },
                            
                            ticks: {
                                display: false,
                                fontColor: "#888",
                                fontSize: 10,
                                beginAtZero: true}

                        }]},
                    legend:{
                        position: "bottom",
                        display: false,
                        labels:{
                            fontColor: "white",
                            fontSize: 10}},

                    title:{
                        display: false,
                        text: "Chart.js - Custom Tooltips using Data Points"
                    },
                    tooltips: {
                        enabled: true,
                        mode: 'index',
                        intersect: false,
                        custom: customTooltips
                    }
                }
            });

//net profit ends

// expenses

            var ctx9 = document.getElementById("chart9");
            var chart9 = new Chart(ctx9, {
                type: "line",
                data: lineChartData3,
                options: {
                     scales: {
                        gridLines: {
                            drawOnChartArea: false, // only want the grid lines for one axis to show up
                        },
                        xAxes: [{
                            gridLines: {
                            drawOnChartArea: false, // only want the grid lines for one axis to show up
                        },
                            
                            ticks: {
                                
                                display: false,
                                fontColor: "#888",
                                fontSize: 10,
                                beginAtZero: true},
                                
                                }],
                        yAxes: [{
                            gridLines: {
                            drawOnChartArea: false, // only want the grid lines for one axis to show up
                        },
                            
                            ticks: {
                                display: false,
                                fontColor: "#888",
                                fontSize: 10,
                                beginAtZero: true}

                        }]},
                    legend:{
                        position: "bottom",
                        display: false,
                        labels:{
                            fontColor: "white",
                            fontSize: 10}},

                    title:{
                        display: false,
                        text: "Chart.js - Custom Tooltips using Data Points"
                    },
                    tooltips: {
                        enabled: true,
                        mode: 'index',
                        intersect: false,
                        custom: customTooltips
                    }
                }
            });
//expenses end



            var ctx2 = document.getElementById("chart2").getContext("2d");

            var myChart2;

            window.myChart2 = new Chart(ctx2, {
                type: 'bar',
                data: chartData,

                options: {
                    legend:{
                        position: "bottom",
                        labels:{
                            fontColor: "white",
                            fontSize: 10}
                    },
                    responsive: true,
                    scales: {
                        xAxes: [{
                            
                            ticks: {
                                fontColor: "#888",
                                fontSize: 10,
                                beginAtZero: true},
                                
                                }],
                        yAxes: [{
                            
                            ticks: {
                                fontColor: "#888",
                                fontSize: 10,
                                beginAtZero: true}
                        }]
                    },
                    title: {
                        position: 'top',
                        display: false,
                        text: 'Past 7-month Performance',
                        fontFamily: "Source Sans Pro",
                        fontColor: "white",
                        fontSize: 16
                    },
                    tooltips: {
                        mode: 'index',
                        intersect: true,
                        fontColor: "white",
                    }
                }
            });

             var ctx3 = document.getElementById("chart3").getContext("2d");
             var myDoughnut;
             window.myDoughnut = new Chart(ctx3, config);



        };




    var randomScalingFactor = function() {
        return Math.round(Math.random() * 100);
    };

    var config = {
        type: 'doughnut',
        data: {
            datasets: [{
                data: [
                    randomScalingFactor(),
                    randomScalingFactor(),
                    randomScalingFactor(),
                    randomScalingFactor(),
                    randomScalingFactor(),
                    randomScalingFactor(),
                ],
                backgroundColor: [
                    window.chartColors.red,
                    window.chartColors.orange,
                    window.chartColors.yellow,
                    window.chartColors.green,
                    window.chartColors.blue,
                    window.chartColors.purple,
                ],
                label: 'Dataset 1',

            }],
            labels: [
                "U.S.",
                "U.K.",
                "Canada",
                "Austria",
                "Netherlands",
                "Ireland"

            ]
        },
        options: {
            responsive: true,

            legend: {
                position: 'bottom',
                fontColor: "white",
                labels: {
                    fontColor: "white",
                    fontSize:10}
            },
            title: {
                display: false,
                fontColor: "white",
                text: 'Chart.js Doughnut Chart',
                fontFamily: "Source Sans Pro",
                fontSize: 16,


            },
            animation: {
                animateScale: true,
                animateRotate: true
            }
        }
    };



        var MONTHS = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
        var config2 = {
            type: 'line',
            data: {
                labels: ["January", "February", "March", "April", "May", "June", "July"],
                datasets: [{
                    label: "P1",
                    borderColor: window.chartColors.red,
                    backgroundColor: window.chartColors.red,
                    data: [
                        randomScalingFactor(), 
                        randomScalingFactor(), 
                        randomScalingFactor(), 
                        randomScalingFactor(), 
                        randomScalingFactor(), 
                        randomScalingFactor(), 
                        randomScalingFactor(),
                    ],
                }, {
                    label: "P2",
                    borderColor: window.chartColors.blue,
                    backgroundColor: window.chartColors.blue,
                    data: [
                        randomScalingFactor(), 
                        randomScalingFactor(), 
                        randomScalingFactor(), 
                        randomScalingFactor(), 
                        randomScalingFactor(), 
                        randomScalingFactor(), 
                        randomScalingFactor(),
                    ],
                }, {
                    label: "P3",
                    borderColor: window.chartColors.green,
                    backgroundColor: window.chartColors.green,
                    data: [
                        randomScalingFactor(), 
                        randomScalingFactor(), 
                        randomScalingFactor(), 
                        randomScalingFactor(), 
                        randomScalingFactor(), 
                        randomScalingFactor(), 
                        randomScalingFactor(),
                    ],
                }
                ]
            },
            options: {
                responsive: true,
                legend: {
                position: "bottom",
                fontColor: "white",
                labels: {
                    fontColor: "white",
                    fontSize:10}
                },
                title:{
                    display:false,
                    text:"Chart.js Line Chart - Stacked Area",
                    fontFamily: "Source Sans Pro",
                    fontSize: 16,
                    fontColor: "white"
                },
                tooltips: {
                    mode: 'index',
                },
                hover: {
                    mode: 'index'
                },
                scales: {
                    xAxes: [{
                        // gridLines: {color:"#222"},
                        scaleLabel: {
                            display: true,
                            labelString: 'Month',
                            fontColor: "#888",
                                fontSize: 10
                        },
                        ticks: {
                            fontFamily: "Source Sans Pro",
                            fontColor: "#888",
                                fontSize: 10

                        }
                    }],
                    yAxes: [{
                        // gridLines: {color:"#222"},
                        stacked: true,
                        ticks: {
                            fontFamily: "Source Sans Pro",
                            fontColor: "#888",
                                fontSize: 10

                        },
                        scaleLabel: {
                            display: true,
                            labelString: 'Value'
                        }
                    }]
                }
            }
        };





// revenue

        var customTooltips = function (tooltip) {
            $(this._chart.canvas).css("cursor", "pointer");

            $(".chartjs-tooltip").css({
                opacity: 0,
            });

            if (!tooltip || !tooltip.opacity) {
                return;
            }

            if (tooltip.dataPoints.length > 0) {
                tooltip.dataPoints.forEach(function (dataPoint) {
                    var content = [dataPoint.xLabel, dataPoint.yLabel].join(": ");
                    var $tooltip = $("#tooltip-" + dataPoint.datasetIndex);

                    $tooltip.html(content);
                    $tooltip.css({
                        opacity: 1,
                        top: dataPoint.y + "px",
                        left: dataPoint.x + "px",
                    });
                });
            }
        };
        var color = Chart.helpers.color;
        var lineChartData2 = {
            labels: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
            datasets: [{
                label: "Revenue Performance",
                backgroundColor: color(window.chartColors.blue).alpha(0.2).rgbString(),
                borderColor: window.chartColors.blue,
                pointBackgroundColor: window.chartColors.blue,
                data: [
                    56.7, 
                    randomScalingFactor(), 
                    randomScalingFactor(), 
                    randomScalingFactor(), 
                    randomScalingFactor(), 
                    randomScalingFactor(), 
                    randomScalingFactor(), 
                    randomScalingFactor(), 
                    randomScalingFactor(), 
                    randomScalingFactor(), 
                    randomScalingFactor(), 
                    82.3
                ]}
            
            ]
        };

// end revenue 


// net profit

        var customTooltips = function (tooltip) {
            $(this._chart.canvas).css("cursor", "pointer");

            $(".chartjs-tooltip").css({
                opacity: 0,
            });

            if (!tooltip || !tooltip.opacity) {
                return;
            }

            if (tooltip.dataPoints.length > 0) {
                tooltip.dataPoints.forEach(function (dataPoint) {
                    var content = [dataPoint.xLabel, dataPoint.yLabel].join(": ");
                    var $tooltip = $("#tooltip-" + dataPoint.datasetIndex);

                    $tooltip.html(content);
                    $tooltip.css({
                        opacity: 1,
                        top: dataPoint.y + "px",
                        left: dataPoint.x + "px",
                    });
                });
            }
        };
        var color = Chart.helpers.color;
        var lineChartData = {
            labels: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
            datasets: [{
                label: "Net Profit",
                backgroundColor: color(window.chartColors.blue).alpha(0.2).rgbString(),
                borderColor: window.chartColors.blue,
                pointBackgroundColor: window.chartColors.blue,
                data: [
                    18.8, 
                    randomScalingFactor(), 
                    randomScalingFactor(), 
                    randomScalingFactor(), 
                    randomScalingFactor(), 
                    randomScalingFactor(), 
                    randomScalingFactor(), 
                    randomScalingFactor(), 
                    randomScalingFactor(), 
                    randomScalingFactor(), 
                    randomScalingFactor(), 
                    29.2
                ]}
            
            ]
        };

// net profit end

// expenses

        var customTooltips = function (tooltip) {
            $(this._chart.canvas).css("cursor", "pointer");

            $(".chartjs-tooltip").css({
                opacity: 0,
            });

            if (!tooltip || !tooltip.opacity) {
                return;
            }

            if (tooltip.dataPoints.length > 0) {
                tooltip.dataPoints.forEach(function (dataPoint) {
                    var content = [dataPoint.xLabel, dataPoint.yLabel].join(": ");
                    var $tooltip = $("#tooltip-" + dataPoint.datasetIndex);

                    $tooltip.html(content);
                    $tooltip.css({
                        opacity: 1,
                        top: dataPoint.y + "px",
                        left: dataPoint.x + "px",
                    });
                });
            }
        };
        var color = Chart.helpers.color;
        var lineChartData3 = {
            labels: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
            datasets: [{
                label: "Expenses",
                backgroundColor: color(window.chartColors.blue).alpha(0.2).rgbString(),
                borderColor: window.chartColors.blue,
                pointBackgroundColor: window.chartColors.blue,
                data: [
                    24.6, 
                    randomScalingFactor(), 
                    randomScalingFactor(), 
                    randomScalingFactor(), 
                    randomScalingFactor(), 
                    randomScalingFactor(), 
                    randomScalingFactor(), 
                    randomScalingFactor(), 
                    randomScalingFactor(), 
                    randomScalingFactor(), 
                    randomScalingFactor(), 
                    45.6
                ]}
            
            ]
        };

// expenses end
