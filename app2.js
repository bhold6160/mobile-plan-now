
var yourResults = function () {
  var planTable = document.getElementById('planTable');
  var trEl = document.createElement('tr');
  var carrier = document.createElement('td');
  var line = document.createElement('td');
  var monthlyPayment = document.createElement('td');

  if (document.getElementById('carrier')) {
    carrier.textContent = 'AT&T';
  }  else if (document.getElementById('carrier')) {
    carrier.textContent = 'Verizon';
  } else if (document.getElementById('carrier')) {
    carrier.textContent = 'T-Mobile';
  } else if (document.getElementById('carrier')) {
    carrier.textContent = 'Sprint';
  }

  if (document.getElementById('lines')) {
    line.textContent = '1 line';
  }  else if (document.getElementById('lines')) {
    line.textContent = '2 lines';
  } else if (document.getElementById('lines')) {
    line.textContent = '3 lines';
  } else if (document.getElementById('lines')) {
    line.textContent = '4 lines';
  } else if (document.getElementById('lines')) {
    line.textContent = '5 lines';
  }

  var amountOne = document.getElementById('monthlyPayment').value;
  monthlyPayment.textContent = 'Your Plan: $' + amountOne;

  trEl.appendChild(carrier);
  trEl.appendChild(line);
  trEl.appendChild(monthlyPayment);
  planTable.appendChild(trEl);

};

var mobileArr = [];
var att = new MobilePlan('AT&T', ['$60', '$115', '$135', '$155', '$175']);
var verizon = new MobilePlan('Verizon', ['$80', '$140', '$160', '$180', '$230']);
var tmobile = new MobilePlan('T-Mobile', ['$70', '$100', '$140', '$160', '$180']);
var sprint = new MobilePlan('Sprint', ['$50', '$90', '$90', '$90', '$90']);

// Constructor function
function MobilePlan(name, plan) {
  this.name = name;
  this.plan = plan;
  mobileArr.push(this);
  console.log(mobileArr);
};

// Appending comparison to user input
MobilePlan.prototype.renderAsRow = function () {
    var planTable = document.getElementById('planTable');
    var trEl = document.createElement('tr');
    var line = document.createElement('td');
    var comparePayment = document.createElement('td');
    comparePayment.textContent = 'Latest Plan:';
    trEl.appendChild(comparePayment);
    trEl.appendChild(line);
    planTable.appendChild(trEl);

    for (var i in mobileArr) {
      var carrier = document.getElementById('carrier');
      carrier.textContent = this.name;
      line.textContent = this.plan;

      // for (var i in mobileArr) {
      //   var lineArr =
      // }
    }
  };

var comparePlan = {
  showResultsEl: document.getElementById('show-results'),

  checkClicks: function () {
    this.showResultsEl.addEventListener('click', function (e) {
      e.preventDefault();
      var liEl = document.createElement('li');
      liEl.textContent = yourResults();
      liEl.textContent = mobileArr[0].renderAsRow();
    });
  },
};

comparePlan.checkClicks();
