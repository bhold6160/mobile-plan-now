var verizonLine = [80, 140, 160, 180];
var attLine = [60, 115, 135, 155];
var tmobLine = [70, 100, 140, 160];
var sprintLine = [50, 90, 90, 90]
var carrierNames = ['AT&T', 'Verizon', 'T-Mobile', 'Sprint'];

var ctx = document.getElementById('myChart').getContext('2d');

var chartData = {
  type: 'bar',
  data: {
    labels: carrierNames,
    datasets: [{
      label: 'Plan Comparison',
      data: verizonLine, attLine, tmobLine, sprintLine,
      backgroundColor: [],
      borderColor: 'purple',
      borderWidth: 1,
    }]
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
