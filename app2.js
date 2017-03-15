'use strict'
// 1. create table
var table = document.getElementById('planTable');
// 2. create result from what users input
var yourResults = function() {
  var planTable = document.getElementById('planTable');
  var trEl = document.createElement('tr');
  var carrier = document.createElement('td');
  var line = document.createElement('td');
  var monthlyPayment = document.createElement('td');
  var latestPayment = document.createElement('td');
// 3. if user select carrier, write it out
  if (document.getElementById('carrier').value == 'att') {
    carrier.textContent = 'AT&T';
  }  else if (document.getElementById('carrier').value == 'verizon') {
    carrier.textContent = 'Verizon';
  } else if (document.getElementById('carrier').value == 't-mobile') {
    carrier.textContent = 'T-Mobile';
  } else if (document.getElementById('carrier').value == 'sprint') {
    carrier.textContent = 'Sprint';
  }
// 4. if user select number of lines, write it out
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

  // 5. if user select inserts total amount, write 'Your Plan: $amountOne
  var amountOne = document.getElementById('monthlyPayment').value;
    monthlyPayment.textContent = 'Your Plan: $' + amountOne;
    latestPayment.textContent = 'Lastest Plan: $ ' + amountTwo + ' ' +amountThree;

    trEl.appendChild(carrier);
    trEl.appendChild(line);
    trEl.appendChild(monthlyPayment);
    trEl.appendChild(latestPayment);
    planTable.appendChild(trEl);
  };
////////////////////////////////////////////////////////////// <--- Starts here

// 6. array of price of each carrier by number of line
var att = ['$60','$115','$135','$155','$175'];
var verizon= ['$80','$140','$160','$180','$230'];
var tmobile = ['$70','$100','$140','$160','$180'];
var sprint = ['$50','$90','$90','$90','$90'];
var productsArray = [];
var arrayNumber = [];

var chooseCarrierDropDown = {
  // 7.get id from carrier
  showResultsEl: document.getElementById('carrier'),
// 8. by selecting carrier from dropdown menu, push it to productsArray
  checkSelectOne: function() {
    this.showResultsEl.addEventListener('change', function(e){
      e.preventDefault();
      if (document.getElementById('carrier').value == 'chooseCarrier') {
      } else if (document.getElementById('carrier').value == 'att') {
        console.log('att');
        productsArray.push('att');
      } else if (document.getElementById('carrier').value == 'verizon') {
        console.log('verizon');
        productsArray.push('verizon');
      } else if (document.getElementById('carrier').value == 'tmobile') {
        console.log('tmobile');
        productsArray.push('tmobile');
      } else if (document.getElementById('carrier').value == 'sprint') {
        console.log('sprint');
        productsArray.push('sprint');
      }
    });
  }
};
chooseCarrierDropDown.checkSelectOne();


/// 9. get id from lines
var selectLines = {
  showResultsEl: document.getElementById('lines'),

  checkSelectTwo: function() {
// 10. by selecting carrier from dropdown menu, push it to arrayNumber
    this.showResultsEl.addEventListener('change', function(e){
      e.preventDefault();
      if (document.getElementById('lines').value == 'chooseLine') {

      } else if (document.getElementById('lines').value == '1') {
        console.log('1 lines');
        arrayNumber.push(0);
      } else if (document.getElementById('lines').value == '2') {
        console.log('2 lines');
        arrayNumber.push(1);
      } else if (document.getElementById('lines').value == '3') {
        console.log('3 lines');
        arrayNumber.push(2);
      } else if (document.getElementById('lines').value == '4') {
        console.log('4 lines');
        arrayNumber.push(3);
      } else if (document.getElementById('lines').value == '5') {
        console.log('5 lines');
        arrayNumber.push(4);
      }
    });
  }
};
var planTable = document.getElementById('planTable');
var trEl = document.createElement('tr');
var comparePayment = document.createElement('td');


trEl.appendChild(comparePayment);
planTable.appendChild(trEl);

selectLines.checkSelectTwo();

var amountTwo = productsArray;
var amountThree = arrayNumber;


////////////////////////////////////////////////////////////// <--- Ends here
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
