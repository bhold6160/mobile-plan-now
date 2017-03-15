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

var yourResults = function () {
  var planTable = document.getElementById('table');
  var trEl = document.createElement('tr');
  var carrier = document.createElement('td');
  var line = document.createElement('td');
  var monthlyPayment = document.createElement('td');

  if (document.getElementById('carrier')) {
    carrier.textContent = this.name;
  }

  if (document.getElementById('lines')) {
    line.textContent = this.plan;
  }

  var amountOne = document.getElementById('monthlyPayment').value;
  monthlyPayment.textContent = 'Your Plan: $' + amountOne;

  trEl.appendChild(carrier);
  trEl.appendChild(line);
  trEl.appendChild(monthlyPayment);
  table.appendChild(trEl);
};

// Appending comparison to user input
MobilePlan.prototype.renderAsRow = function () {
    var planTable = document.getElementById('table');
    var trEl = document.createElement('tr');
    var line = document.createElement('td');
    var comparePayment = document.createElement('td');
    comparePayment.textContent = 'Latest Plan:';
    trEl.appendChild(comparePayment);
    trEl.appendChild(line);
    table.appendChild(trEl);

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

// var tracker = {
//   selectEl: document.getElementById('select'),
//
//   checkClicks: function () {
//     this.selectEl.addEventListener('change', function (e) {
//       // e.preventDefault();
//       var liEl = document.createElement('li');
//       if (document.getElementById('select').value == 'choose') {
//
//       } else if (document.getElementById('select').value == 'oneLine') {
//         console.log('oneLine');
//         liEl.textContent = oneLine.renderAsRow();
//       } else if (document.getElementById('select').value == 'twoLine') {
//         console.log('twoLine');
//         liEl.textContent = twoLine.renderAsRow();
//       } else if (document.getElementById('select').value == 'threeLine') {
//         console.log('threeLine');
//         liEl.textContent = threeLine.renderAsRow();
//       } else if (document.getElementById('select').value == 'fourLine') {
//         console.log('fourLine');
//         liEl.textContent = fourLine.renderAsRow();
//       }
//     });
//   },
// };

comparePlan.checkClicks();
