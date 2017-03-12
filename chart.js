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

// var chartData = {
//     labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
//     datasets: [
//       {
//         label: 'My First dataset',
//         fillColor: 'rgba(220,220,220,0.2)',
//         strokeColor: 'rgba(220,220,220,1)',
//         pointColor: 'rgba(220,220,220,1)',
//         pointStrokeColor: '#fff',
//         pointHighlightFill: '#fff',
//         pointHighlightStroke: 'rgba(220,220,220,1)',
//         data: [65, 59, 80, 81, 56, 55, 40],
//       },
//       {
//         label: 'My Second dataset',
//         fillColor: 'rgba(151,187,205,0.2)',
//         strokeColor: 'rgba(151,187,205,1)',
//         pointColor: 'rgba(151,187,205,1)',
//         pointStrokeColor: '#fff',
//         pointHighlightFill: '#fff',
//         pointHighlightStroke: 'rgba(151,187,205,1)',
//         data: [28, 48, 40, 19, 86, 27, 90],
//       },
//     ],
//   };

var myChart = new Chart(ctx, chartData);
