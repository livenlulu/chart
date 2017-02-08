var barChartData = {
            labels: ["January", "February", "March", "April", "May", "June", "July"],
            datasets: [{
                label: 'd1',
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
            }, {
                label: 'D2',
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
            }, {
                label: 'Dataset 3',
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
            }]

        };




        var chartData = {
            labels: ["January", "February", "March", "April", "May", "June", "July"],
            datasets: [{
                type: 'line',
                label: 'Dataset 1',
                borderColor: window.chartColors.blue,
                borderWidth: 2,
                fill: false,
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
                type: 'bar',
                label: 'D4',
                backgroundColor: window.chartColors.red,
                data: [
                    randomScalingFactor(), 
                    randomScalingFactor(), 
                    randomScalingFactor(), 
                    randomScalingFactor(), 
                    randomScalingFactor(), 
                    randomScalingFactor(), 
                    randomScalingFactor()
                ],
                borderColor: 'white',
                borderWidth: 2
            }, {
                type: 'bar',
                label: 'D5',
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
                    title:{
                        style:"font-family: Source Sans Pro",
                        display:true,
                        text:"Product Performance"
                    },
                    tooltips: {
                        mode: 'index',
                        intersect: false
                    },
                    responsive: true,
                    scales: {
                        xAxes: [{
                            stacked: true,
                        }],
                        yAxes: [{
                            stacked: true
                        }]
                    }
                }
            });


            var ctx2 = document.getElementById("chart2").getContext("2d");

            var myChart2;

            window.myChart2 = new Chart(ctx2, {
                type: 'bar',
                data: chartData,
                options: {
                    responsive: true,
                    title: {
                        display: true,
                        text: 'Chart.js Combo Bar Line Chart'
                    },
                    tooltips: {
                        mode: 'index',
                        intersect: true
                    }
                }
            });

             var ctx3 = document.getElementById("chart3").getContext("2d");
             var myDoughnut;
             window.myDoughnut = new Chart(ctx3, config);



        };

        document.getElementById('randomizeData1').addEventListener('click', function() {
            barChartData.datasets.forEach(function(dataset, i) {
                dataset.data = dataset.data.map(function() {
                    return randomScalingFactor();
                });
            });
            window.myChart1.update();
        });


        document.getElementById('randomizeData2').addEventListener('click', function() {
            chartData.datasets.forEach(function(dataset) {
                dataset.data = dataset.data.map(function() {
                    return randomScalingFactor();
                });
            });
            window.myChart2.update();
        });



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
                ],
                backgroundColor: [
                    window.chartColors.red,
                    window.chartColors.orange,
                    window.chartColors.yellow,
                    window.chartColors.green,
                    window.chartColors.blue,
                ],
                label: 'Dataset 1'
            }],
            labels: [
                "Red",
                "Orange",
                "Yellow",
                "Green",
                "Blue"
            ]
        },
        options: {
            responsive: true,
            legend: {
                position: 'top',
            },
            title: {
                display: true,
                text: 'Chart.js Doughnut Chart'
            },
            animation: {
                animateScale: true,
                animateRotate: true
            }
        }
    };



    document.getElementById('randomizeData3').addEventListener('click', function() {
        config.data.datasets.forEach(function(dataset) {
            dataset.data = dataset.data.map(function() {
                return randomScalingFactor();
            });
        });

        window.myDoughnut.update();
    });

    var colorNames = Object.keys(window.chartColors);
    document.getElementById('addDataset').addEventListener('click', function() {
        var newDataset = {
            backgroundColor: [],
            data: [],
            label: 'New dataset ' + config.data.datasets.length,
        };

        for (var index = 0; index < config.data.labels.length; ++index) {
            newDataset.data.push(randomScalingFactor());

            var colorName = colorNames[index % colorNames.length];;
            var newColor = window.chartColors[colorName];
            newDataset.backgroundColor.push(newColor);
        }

        config.data.datasets.push(newDataset);
        window.myDoughnut.update();
    });

    document.getElementById('addData').addEventListener('click', function() {
        if (config.data.datasets.length > 0) {
            config.data.labels.push('data #' + config.data.labels.length);

            var colorName = colorNames[config.data.datasets[0].data.length % colorNames.length];;
            var newColor = window.chartColors[colorName];

            config.data.datasets.forEach(function(dataset) {
                dataset.data.push(randomScalingFactor());
                dataset.backgroundColor.push(newColor);
            });

            window.myDoughnut.update();
        }
    });

    // document.getElementById('removeDataset').addEventListener('click', function() {
    //     config.data.datasets.splice(0, 1);
    //     window.myDoughnut.update();
    // });

    document.getElementById('removeData').addEventListener('click', function() {
        config.data.labels.splice(-1, 1); // remove the label first

        config.data.datasets.forEach(function(dataset) {
            dataset.data.pop();
            dataset.backgroundColor.pop();
        });

        window.myDoughnut.update();
    });


        var MONTHS = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
        var config2 = {
            type: 'line',
            data: {
                labels: ["January", "February", "March", "April", "May", "June", "July"],
                datasets: [{
                    label: "My First dataset",
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
                    label: "My Second dataset",
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
                    label: "My Third dataset",
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
                }, {
                    label: "My Third dataset",
                    borderColor: window.chartColors.yellow,
                    backgroundColor: window.chartColors.yellow,
                    data: [
                        randomScalingFactor(), 
                        randomScalingFactor(), 
                        randomScalingFactor(), 
                        randomScalingFactor(), 
                        randomScalingFactor(), 
                        randomScalingFactor(), 
                        randomScalingFactor(),
                    ],
                }]
            },
            options: {
                responsive: true,
                title:{
                    display:true,
                    text:"Chart.js Line Chart - Stacked Area"
                },
                tooltips: {
                    mode: 'index',
                },
                hover: {
                    mode: 'index'
                },
                scales: {
                    xAxes: [{
                        scaleLabel: {
                            display: true,
                            labelString: 'Month'
                        }
                    }],
                    yAxes: [{
                        stacked: true,
                        scaleLabel: {
                            display: true,
                            labelString: 'Value'
                        }
                    }]
                }
            }
        };



        document.getElementById('randomizeData4').addEventListener('click', function() {
            config2.data.datasets.forEach(function(dataset) {
                dataset.data = dataset.data.map(function() {
                    return randomScalingFactor();
                });

            });

            window.myLine.update();
        });

        var colorNames4 = Object.keys(window.chartColors);
        document.getElementById('addDataset4').addEventListener('click', function() {
            var colorName4 = colorNames4[config2.data.datasets.length % colorNames4.length];
            var newColor = window.chartColors[colorName4];
            var newDataset = {
                label: 'Dataset ' + config2.data.datasets.length,
                borderColor: newColor,
                backgroundColor: newColor,
                data: [],
            };

            for (var index = 0; index < config2.data.labels.length; ++index) {
                newDataset.data.push(randomScalingFactor());
            }

            config2.data.datasets.push(newDataset);
            window.myLine.update();
        });

        document.getElementById('addData4').addEventListener('click', function() {
            if (config2.data.datasets.length > 0) {
                var month = MONTHS[config2.data.labels.length % MONTHS.length];
                config2.data.labels.push(month);

                config2.data.datasets.forEach(function(dataset) {
                    dataset.data.push(randomScalingFactor());
                });

                window.myLine.update();
            }
        });

        document.getElementById('removeDataset4').addEventListener('click', function() {
            config2.data.datasets.splice(0, 1);
            window.myLine.update();
        });

        document.getElementById('removeData4').addEventListener('click', function() {
            config2.data.labels.splice(-1, 1); // remove the label first

            config2.data.datasets.forEach(function(dataset, datasetIndex) {
                dataset.data.pop();
            });

            window.myLine.update();
        });