'use strict'

var oneLine = new mobilePlan('1 line',['$60','$70','$80','$90']);
var twoLine = new mobilePlan('2 lines',['$160','$170','$180','$190']);
var threeLine = new mobilePlan('3 lines',['$260','$270','$280','$290']);
var fourLine = new mobilePlan('4 lines',['$360','$470','$580','$960']);

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
    if (document.getElementById('select').value == 'oneLine') {
      this.showResultsEl.addEventListener('click', function(e){
        e.preventDefault();
        var liEl = document.createElement('li');
            console.log('oneLine');
        liEl.textContent = oneLine.renderAsRow();
      });
    }

    if (document.getElementById('select').value == 'twoLine') {
      this.showResultsEl.addEventListener('click', function(e){
        e.preventDefault();
        var liElTwo = document.createElement('li');
        console.log('twoLine');
        liElTwo.textContent = twoLine.renderAsRow();
      });
    }

    if (document.getElementById('select').value == 'threeLine') {
      this.showResultsEl.addEventListener('click', function(e){
        e.preventDefault();
        var liEl = document.createElement('li');
        liEl.textContent = threeLine.renderAsRow();
      });
    }

    if (document.getElementById('select').value == 'fourLine') {
      this.showResultsEl.addEventListener('click', function(e){
        e.preventDefault();
        var liEl = document.createElement('li');
        liEl.textContent = fourLine.renderAsRow();
      });
    }
  }
};
tracker.checkClicks();
