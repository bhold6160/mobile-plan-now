'use strict'
var table = document.getElementById('planTable');

var yourResults = function() {
  var planTable = document.getElementById('planTable');
  var trEl = document.createElement('tr');
  var carrier = document.createElement('td');
  var line = document.createElement('td');
  var monthlyPayment = document.createElement('td');

  if (document.getElementById('carrier').value == 'att') {
    carrier.textContent = 'AT&T';
  }  else if (document.getElementById('carrier').value == 'verizon') {
    carrier.textContent = 'Verizon';
  } else if (document.getElementById('carrier').value == 't-mobile') {
    carrier.textContent = 'T-Mobile';
  } else if (document.getElementById('carrier').value == 'sprint') {
    carrier.textContent = 'Sprint';
  }

  if (document.getElementById('lines').value == 'oneLine') {
    line.textContent = '1 line';
  }  else if (document.getElementById('lines').value == 'twoLine') {
    line.textContent = '2 lines';
  } else if (document.getElementById('lines').value == 'threeLine') {
    line.textContent = '3 lines';
  } else if (document.getElementById('lines').value == 'fourLine') {
    line.textContent = '4 lines';
  } else if (document.getElementById('lines').value == 'fiveLine') {
    line.textContent = '5 lines';
  }

var amount = document.getElementById('monthlyPayment').value;
  monthlyPayment.textContent = '$' + amount;

  trEl.appendChild(carrier);
  trEl.appendChild(line);
  trEl.appendChild(monthlyPayment);
  planTable.appendChild(trEl);

};

function mobilePlan(name, plan) {
  this.name = name;
  this.plan = plan;
};

mobilePlan.prototype.renderAsRow = function() {
  var planTable = document.getElementById('planTable');
  var trEl = document.createElement('tr');
  var tdEl = document.createElement('td');
  tdEl.textContent = 'Latest Plan:' + this.name;
  trEl.appendChild(tdEl);
  planTable.appendChild(trEl);

  for (var i = 0; i < 4; i++)	{
    // Get an element from li
    var planPrice = document.createElement('td');
    // Create and populate an LI element for each of the data points that you want to render
    planPrice.textContent = this.plan[i];
    // Append the li to ul
    trEl.appendChild(planPrice);
    planTable.appendChild(trEl);
  }
}


var comparePlan = {
  showResultsEl: document.getElementById('show-results'),

  checkClicks: function() {
    this.showResultsEl.addEventListener('click', function(e){
      e.preventDefault();
      var liEl = document.createElement('li');
        liEl.textContent = yourResults();
    });
  }
};
comparePlan.checkClicks();
