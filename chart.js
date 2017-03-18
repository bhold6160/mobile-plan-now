(function () {
  var userNamePassword = localStorage.getItem('stringifiedNamePass');
  var parsedNamePassword = JSON.parse(stringifiedInfo);
  for (var i in parsedNamePassword) {
    usernameArr = parsedNamePassword[i];
    passwordArr = parsedNamePassword[i];
  }
});

usernameArr = [];
passwordArr = [];

var attempt = 3; // Variable to count number of attempts.
// Below function Executes on click of login button.
function validate() {
    var username = document.getElementById("username").value;
    usernameArr.push(username)
    var password = document.getElementById("password").value;
    passwordArr.push(password)
    localStorage.setItem('stringifiedNamePass', JSON.stringify(username, password));

    if (username == usernameArr && password == passwordArr) {
        alert('Welcome ' + usernameArr + '!');
        window.location = "chart.html"; // Redirecting to other page.
        return false;
    } else {
        attempt--; // Decrementing by one.
        alert("You have left " + attempt + " attempt;");
        // Disabling fields after 3 attempts.
        if (attempt == 0) {
            document.getElementById("username").disabled = true;
            document.getElementById("password").disabled = true;
            document.getElementById("submit").disabled = true;
            return false;
        }
    }
}

var verizonLine = [80, 140, 160, 180];
var attLine = [60, 115, 135, 155];
var tmobLine = [70, 100, 140, 160];
var sprintLine = [50, 90, 90, 90];
var numberOfLines = ['1 Line', '2 Lines', '3 Lines', '4 Lines'];

var ctx = document.getElementById('myChart').getContext('2d');

var chartData = {
  type: 'bar',
  data: {
    labels: numberOfLines,
    datasets: [
      {
        label: 'AT&T',
        data: attLine,
        // backgroundColor: 'opaque',
        borderColor: '#098ad8',
        borderWidth: 2,
      },
      {
        label: 'Verizon',
        data: verizonLine,
        // backgroundColor: 'red',
        borderColor: '#c30014',
        borderWidth: 2,
      },
      {
        label: 'T-Mobile',
        data: tmobLine,
        // backgroundColor: 'magenta',
        borderColor: 'magenta',
        borderWidth: 2,
      },
      {
        label: 'Sprint',
        data: sprintLine,
        // backgroundColor: 'yellow',
        borderColor: 'yellow',
        borderWidth: 2,
      },
    ],
  },
};

var myChart = new Chart(ctx, chartData);
