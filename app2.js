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

var att = ['$60','$115','$135','$155','$175'];
var verizon= ['$80','$140','$160','$180','$230'];
var tmobile = ['$70','$100','$140','$160','$180'];
var sprint = ['$50','$90','$90','$90','$90'];

var comparePlan = {
  showResultsEl: document.getElementById('carrier'),

  checkSelectOne: function() {
    this.showResultsEl.addEventListener('change', function(e){
      e.preventDefault();
      if (document.getElementById('carrier').value == 'chooseCarrier') {

      } else if (document.getElementById('carrier').value == 'att') {
        console.log('att');
      } else if (document.getElementById('carrier').value == 'verizon') {
        console.log('verizon');
      } else if (document.getElementById('carrier').value == 'tmobile') {
        console.log('tmobile');
      } else if (document.getElementById('carrier').value == 'sprint') {
        console.log('sprint');
      }
    });
  }
};
comparePlan.checkSelectOne();

var selectLines = {
  showResultsEl: document.getElementById('lines'),

  checkSelectTwo: function() {
    this.showResultsEl.addEventListener('change', function(e){
      e.preventDefault();
      if (document.getElementById('lines').value == 'chooseLine') {

      } else if (document.getElementById('lines').value == 'oneLine') {
        console.log('1 lines');
      } else if (document.getElementById('lines').value == 'twoLine') {
        console.log('2 lines');
      } else if (document.getElementById('lines').value == 'threeLine') {
        console.log('3 lines');
      } else if (document.getElementById('lines').value == 'fourLine') {
        console.log('4 lines');
      } else if (document.getElementById('lines').value == 'fiveLine') {
        console.log('5 lines');
      }
    });
  }
};
selectLines.checkSelectTwo();


var renderAsRow = function() {
  var planTable = document.getElementById('planTable');
  var trEl = document.createElement('tr');
  var line = document.createElement('td');
  var comparePayment = document.createElement('td');
  comparePayment.textContent = 'Latest Plan:';
  trEl.appendChild(comparePayment);
  trEl.appendChild(line);
  planTable.appendChild(trEl);

  if (document.getElementById('carrier').value == 'att'){
    line.textContent = mobilePlan.plan;
  } else if (document.getElementById('carrier').value == 'verizon'){
    line.textContent = productsArray[1];
  }
};

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
