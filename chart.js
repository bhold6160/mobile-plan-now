var verizonLine = [80, 140, 160, 180];
var attLine = [60, 115, 135, 155];
var tmobLine = [70, 100, 140, 160];
var sprintLine = [50, 90, 90, 90];
var numberOfLines = ['1 Line', '2 Lines', '3 Lines', '4 Lines'];

var lineArr = [];

var ctx = document.getElementById('myChart').getContext('2d');

var chartData = {
  type: 'bar',
  data: {
    labels: numberOfLines,
    datasets: [
      {
      label: 'AT&T',
      data: attLine,
      backgroundColor: [],
      borderColor: 'blue',
      borderWidth: 1,
    },
      {
      label: 'Verizon',
      data: verizonLine,
      backgroundColor: [],
      borderColor: 'green',
      borderWidth: 1,
    },
      {
      label: 'T-Mobile',
      data: tmobLine,
      backgroundColor: [],
      borderColor: 'red',
      borderWidth: 1,
    },
      {
      label: 'Sprint',
      data: sprintLine,
      backgroundColor: [],
      borderColor: 'yellow',
      borderWidth: 1,
    },
  ],
  },
  options: {
    scales: {
      yAxes: [{
        ticks: {
          beginAtZero: true,
        },
      }]
    },
  },
};

var myChart = new Chart(ctx, chartData);
