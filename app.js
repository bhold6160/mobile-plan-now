// 'use strict'

(function () {
  var stringifiedAll = localStorage.getItem('stringifiedUserInput');
  var parsedPlanInfo = JSON.parse(stringifiedAll);
  for (var i in parsedPlanInfo) {
    userInput[i] = parsedPlanInfo[i];
  }
});

// (function () {
//   var userNamePassword = localStorage.getItem('stringifiedNamePass');
//   var parsedNamePassword = JSON.parse(stringifiedInfo);
//   for (var i in parsedNamePassword) {
//     usernameArr = parsedNamePassword[i];
//     passwordArr = parsedNamePassword[i];
//   }
// });
//
// usernameArr = [];
// passwordArr = [];
//
// var attempt = 3; // Variable to count number of attempts.
// // Below function Executes on click of login button.
// function validate() {
//     var username = document.getElementById("username").value;
//     usernameArr.push(username)
//     var password = document.getElementById("password").value;
//     passwordArr.push(password)
//     localStorage.setItem('stringifiedNamePass', JSON.stringify(username, password));
//
//     if (username == usernameArr && password == passwordArr) {
//         alert('Welcome ' + usernameArr + '!');
//         window.location = "user.html"; // Redirecting to other page.
//         return false;
//     } else {
//         attempt--; // Decrementing by one.
//         alert("You have left " + attempt + " attempt;");
//         // Disabling fields after 3 attempts.
//         if (attempt == 0) {
//             document.getElementById("username").disabled = true;
//             document.getElementById("password").disabled = true;
//             document.getElementById("submit").disabled = true;
//             return false;
//         }
//     }
// }
// var arrayNumber = [];

// create table
var table = document.getElementById('planTable');

// create result from what users input
var yourResults = function () {
  var planTable = document.getElementById('planTable');
  var trEl = document.createElement('tr');
  var carrier = document.createElement('td');
  var line = document.createElement('td');
  var monthlyPayment = document.createElement('td');
  var latestPayment = document.createElement('td');
  var suggestion = document.createElement('td');
  var link = document.createElement('td');

  // if user select carrier, write it out
  if (document.getElementById('carrier').value == 'att') {
    carrier.textContent = 'AT&T :';
  }  else if (document.getElementById('carrier').value == 'verizon') {
    carrier.textContent = 'Verizon :';
  } else if (document.getElementById('carrier').value == 't-mobile') {
    carrier.textContent = 'T-Mobile :';
  } else if (document.getElementById('carrier').value == 'sprint') {
    carrier.textContent = 'Sprint :';
  }

  // if user select number of lines, write it out
  if (document.getElementById('lines').value == '1') {
    line.textContent = '1 line |';
  }  else if (document.getElementById('lines').value == '2') {
    line.textContent = '2 lines |';
  } else if (document.getElementById('lines').value == '3') {
    line.textContent = '3 lines |';
  } else if (document.getElementById('lines').value == '4') {
    line.textContent = '4 lines |';
  } else if (document.getElementById('lines').value == '5') {
    line.textContent = '5 lines |';
  };

  // if user select inserts total amount, write 'Your Plan: $amountOne
  var amountOne = document.getElementById('monthlyPayment').value;
  userInput.push(parseInt(amountOne));
  localStorage.setItem('stringifiedUserInput', JSON.stringify(userInput));
  console.log(userInput, '~~~~~~~~')
  var amountTwo = arrayNumber[arrayNumber.length - 1];
  monthlyPayment.textContent = 'Your Plan: $' + amountOne;
  latestPayment.textContent = 'Lastest Plan: $' + amountTwo;

  if (amountOne > amountTwo) {
    suggestion.textContent = ' You are paying too much!! Change your plan!';
  } else if (amountOne == amountTwo) {
    suggestion.textContent = ' You currently have latest plan from your carrier';
  } else if (amountOne < amountTwo) {
    suggestion.textContent = ' Your current plan is cheaper than carriers current rate. Keep it!';
  };

  // Generate inputs in the table
  trEl.appendChild(carrier);
  trEl.appendChild(line);
  trEl.appendChild(monthlyPayment);
  trEl.appendChild(latestPayment);
  trEl.appendChild(suggestion);
  trEl.appendChild(link);
  planTable.appendChild(trEl);
};

// array of price of carrier per lines
var carriersPrice = [60, 115, 135, 155, 175, 80, 140, 160, 180, 230, 70, 100, 140, 160, 180, 50, 90, 90, 90, 90];

// store dropdown input into arrayNumber
var arrayNumber = [];
var userInput = [];

/// get id from lines
var selectLines = {
  showResultsEl: document.getElementById('lines'),

  checkSelectTwo: function () {
    console.log(document.getElementById('lines'), '~~~~~~')

    // event listern : by selecting carrier from dropdown menu, push it to arrayNumber
    this.showResultsEl.addEventListener('change', function (e) {
      // e.stopPropagation();
      e.preventDefault();
      if (document.getElementById('lines').value == 'chooseLine') {

      } else if (document.getElementById('carrier').value == 'att' && document.getElementById('lines').value == '1') {
        console.log('att : 1 line');
        arrayNumber.push(carriersPrice[0]);
      } else if (document.getElementById('carrier').value == 'att' && document.getElementById('lines').value == '2') {
        console.log('att : 2 lines');
        arrayNumber.push(carriersPrice[1]);
      } else if (document.getElementById('carrier').value == 'att' && document.getElementById('lines').value == '3') {
        console.log('att : 3 lines');
        arrayNumber.push(carriersPrice[2]);
      } else if (document.getElementById('carrier').value == 'att' && document.getElementById('lines').value == '4') {
        console.log('att : 4 line');
        arrayNumber.push(carriersPrice[3]);
      } else if (document.getElementById('carrier').value == 'att' && document.getElementById('lines').value == '5') {
        console.log('att : 5 line');
        arrayNumber.push(carriersPrice[4]);
      } else if (document.getElementById('carrier').value == 'verizon' && document.getElementById('lines').value == '1') {
        console.log('verizon : 1 line');
        arrayNumber.push(carriersPrice[5]);
      } else if (document.getElementById('carrier').value == 'verizon' && document.getElementById('lines').value == '2') {
        console.log('verizon : 2 lines');
        arrayNumber.push(carriersPrice[6]);
      } else if (document.getElementById('carrier').value == 'verizon' && document.getElementById('lines').value == '3') {
        console.log('verizon : 3 lines');
        arrayNumber.push(carriersPrice[7]);
      } else if (document.getElementById('carrier').value == 'verizon' && document.getElementById('lines').value == '4') {
        console.log('verizon : 4 lines');
        arrayNumber.push(carriersPrice[8]);
      } else if (document.getElementById('carrier').value == 'verizon' && document.getElementById('lines').value == '5') {
        console.log('verizon : 5 lines');
        arrayNumber.push(carriersPrice[9]);
      } else if (document.getElementById('carrier').value == 't-mobile' && document.getElementById('lines').value == '1') {
        console.log('tmobile : 1 line');
        arrayNumber.push(carriersPrice[10]);
      } else if (document.getElementById('carrier').value == 't-mobile' && document.getElementById('lines').value == '2') {
        console.log('tmobile : 2 lines');
        arrayNumber.push(carriersPrice[11]);
      } else if (document.getElementById('carrier').value == 't-mobile' && document.getElementById('lines').value == '3') {
        console.log('tmobile : 3 lines');
        arrayNumber.push(carriersPrice[12]);
      } else if (document.getElementById('carrier').value == 't-mobile' && document.getElementById('lines').value == '4') {
        console.log('tmobile : 4 lines');
        arrayNumber.push(carriersPrice[13]);
      } else if (document.getElementById('carrier').value == 't-mobile' && document.getElementById('lines').value == '5') {
        console.log('tmobile : 5 lines');
        arrayNumber.push(carriersPrice[14]);
      } else if (document.getElementById('carrier').value == 'sprint' && document.getElementById('lines').value == '1') {
        console.log('sprint : 1 line');
        arrayNumber.push(carriersPrice[15]);
      } else if (document.getElementById('carrier').value == 'sprint' && document.getElementById('lines').value == '2') {
        console.log('sprint : 2 lines');
        arrayNumber.push(carriersPrice[16]);
      } else if (document.getElementById('carrier').value == 'sprint' && document.getElementById('lines').value == '3') {
        console.log('sprint : 3 lines');
        arrayNumber.push(carriersPrice[17]);
      } else if (document.getElementById('carrier').value == 'sprint' && document.getElementById('lines').value == '4') {
        console.log('sprint : 4 lines');
        arrayNumber.push(carriersPrice[18]);
      } else if (document.getElementById('carrier').value == 'sprint' && document.getElementById('lines').value == '5') {
        console.log('sprint : 5 lines');
        arrayNumber.push(carriersPrice[19]);
      }
      console.log(userInput)
      });
  },
};

var planTable = document.getElementById('planTable');
var trEl = document.createElement('tr');
var comparePayment = document.createElement('td');
console.log(planTable)
trEl.appendChild(comparePayment);
planTable.appendChild(trEl);

selectLines.checkSelectTwo();

var comparePlan = {
  showResultsEl: document.getElementById('show-results'),

  checkClicks: function () {
    this.showResultsEl.addEventListener('click', function (e) {
      e.preventDefault();
      var liEl = document.createElement('li');
      liEl.textContent = yourResults();
    });
  },
};

comparePlan.checkClicks();
localStorage.getItem('stringifiedNamePass');
localStorage.getItem('stringifiedUserInput');
