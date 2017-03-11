'use strict'

var oneLine = new mobilePlan('1 line',['$60','$80','$70','$50']);
var twoLine = new mobilePlan('2 lines',['$115','$140','$100','$90']);
var threeLine = new mobilePlan('3 lines',['$135','$140','$140','$90']);
var fourLine = new mobilePlan('4 lines',['$155','$180','$160','$90']);
var fiveLine = new mobilePlan('5 lines',['$175','$230','$180','$90']);

var table = document.getElementById('planTable');


function mobilePlan(name, plan) {
  this.name = name;
  this.plan = plan;
};

mobilePlan.prototype.renderAsRow = function() {
  var planTable = document.getElementById('planTable');
  var trEl = document.createElement('tr');
  var tdEl = document.createElement('td');
  tdEl.textContent = this.name;
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


var tracker = {
  showResultsEl: document.getElementById('show-results'),
  resultsEl: document.getElementById('results'),

  checkClicks: function() {
    this.showResultsEl.addEventListener('click', function(e){
      e.preventDefault();
      var liEl = document.createElement('li');

      if (document.getElementById('select').value == 'oneLine') {
        liEl.textContent = oneLine.renderAsRow();
      }  else if (document.getElementById('select').value == 'twoLine') {
        liEl.textContent = twoLine.renderAsRow();
      } else if (document.getElementById('select').value == 'threeLine') {
        liEl.textContent = threeLine.renderAsRow();
      } else if (document.getElementById('select').value == 'fourLine') {
        liEl.textContent = fourLine.renderAsRow();
      } else if (document.getElementById('select').value == 'fiveLine') {
        liEl.textContent = fiveLine.renderAsRow();
      } else if (document.getElementById('select').value == 'allLine') {
        liEl.textContent = oneLine.renderAsRow();
        liEl.textContent = twoLine.renderAsRow();
        liEl.textContent = threeLine.renderAsRow();
        liEl.textContent = fourLine.renderAsRow();
        liEl.textContent = fiveLine.renderAsRow();
      }
    });
  }
};
tracker.checkClicks();
