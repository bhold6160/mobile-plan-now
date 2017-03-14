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

var amountOne = document.getElementById('monthlyPayment').value;
  monthlyPayment.textContent = 'Your Plan: $' + amountOne;

  trEl.appendChild(carrier);
  trEl.appendChild(line);
  trEl.appendChild(monthlyPayment);
  planTable.appendChild(trEl);

};

var att = new mobilePlan('AT&T',['$60','$115','$135','$155','$175']);
var verizon= new mobilePlan('Verizon',['$80','$140','$160','$180','$230']);
var tmobile = new mobilePlan('T-Mobile',['$70','$100','$140','$160','$180']);
var sprint = new mobilePlan('Sprint',['$50','$90','$90','$90','$90']);

function mobilePlan(name, plan) {
  this.name = name;
  this.plan = plan;
};

mobilePlan.prototype.renderAsRow = function() {
  var planTable = document.getElementById('planTable');
  var trEl = document.createElement('tr');
  var line = document.createElement('td');
  var comparePayment = document.createElement('td');
  comparePayment.textContent = 'Latest Plan:';
  trEl.appendChild(comparePayment);
  trEl.appendChild(line);
  planTable.appendChild(trEl);

  if (document.getElementById('carrier').value == 'att' && document.getElementById('lines').value == 'oneLine') {
    line.textContent = att.plan[0];
  } else if (document.getElementById('carrier').value == 'att' && document.getElementById('lines').value == 'twoLine') {
    line.textContent = att.plan[1];
  } else if (document.getElementById('carrier').value == 'att' && document.getElementById('lines').value == 'threeLine') {
    line.textContent = att.plan[2];
  } else if (document.getElementById('carrier').value == 'att' && document.getElementById('lines').value == 'fourLine') {
    line.textContent = att.plan[3];
  } else if (document.getElementById('carrier').value == 'att' && document.getElementById('lines').value == 'fiveLine') {
    line.textContent = att.plan[4];
  }
};

var comparePlan = {
  showResultsEl: document.getElementById('show-results'),

  checkClicks: function() {
    this.showResultsEl.addEventListener('click', function(e){
      e.preventDefault();
      var liEl = document.createElement('li');
        liEl.textContent = yourResults();
        liEl.textContent =  att.renderAsRow();
    });
  }
};
comparePlan.checkClicks();
