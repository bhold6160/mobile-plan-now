var oneLine = new MobilePlan('1 line',['$60','$70','$80','$90']);
var twoLine = new MobilePlan('2 lines',['$160','$170','$180','$190']);
var threeLine = new MobilePlan('3 lines',['$260','$270','$280','$290']);
var fourLine = new MobilePlan('4 lines',['$360','$470','$580','$960']);

var table = document.getElementById('planTable');


function MobilePlan(name, plan) {
  this.name = name;
  this.plan = plan;
};

MobilePlan.prototype.renderAsRow = function() {
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
};


var tracker = {
  selectEl: document.getElementById('select'),

  checkClicks: function() {
    this.selectEl.addEventListener('change', function(e){
      // e.preventDefault();
      var liEl = document.createElement('li');
      if (document.getElementById('select').value == 'choose') {
      } else if (document.getElementById('select').value == 'oneLine') {
        console.log('oneLine');
        liEl.textContent = oneLine.renderAsRow();
      }  else if (document.getElementById('select').value == 'twoLine') {
        console.log('twoLine');
        liEl.textContent = twoLine.renderAsRow();
      } else if (document.getElementById('select').value == 'threeLine') {
        console.log('threeLine');
        liEl.textContent = threeLine.renderAsRow();
      } else if (document.getElementById('select').value == 'fourLine') {
        console.log('fourLine');
        liEl.textContent = fourLine.renderAsRow();
      }
    });
  },
};
tracker.checkClicks();
