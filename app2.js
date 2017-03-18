var nameArr = [];
var lineArr = [];
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

this.yourResults = function () {
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
  var amountTwo = mobileArr[mobileArr.length - 1];
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

// Appending comparison to user input
// MobilePlan.prototype.renderAsRow = function () {
    // var planTable = document.getElementById('table');
    // var trEl = document.createElement('tr');
    // var line = document.createElement('td');
    // var comparePayment = document.createElement('td');
    // comparePayment.textContent = this.name;
    // trEl.appendChild(comparePayment);
    // trEl.appendChild(line);
    // table.appendChild(trEl);
    //
    // for (var i in mobileArr) {
    //   var carrier = document.getElementById('carrier');
    //   carrier.textContent = this.name;
    //   line.textContent = this.plan;
    // }
  // };


// var comparePlan = {
//   showResultsEl: document.getElementById('show-results'),
//
//   checkClicks: function () {
//     this.showResultsEl.addEventListener('click', function (e) {
//       e.preventDefault();
//       var liEl = document.createElement('li');
//       liEl.textContent = yourResults();
//       liEl.textContent = mobileArr[0].renderAsRow();
//     });
//   },
// };

var selectLines = {
  showResultsEl: document.getElementById('lines'),

  checkSelectTwo: function () {

    // event listern : by selecting carrier from dropdown menu, push it to arrayNumber
    this.showResultsEl.addEventListener('change', function (e) {
      e.stopPropagation();
      if (document.getElementById('lines').value == 'chooseLine') {

      } else if (document.getElementById('carrier').value == 'att' && document.getElementById('lines').value == '1') {
        console.log('att : 1 line');
        mobileArr.push(att[0]);
      } else if (document.getElementById('carrier').value == 'att' && document.getElementById('lines').value == '2') {
        console.log('att : 2 lines');
        mobileArr.push(att[1]);
      } else if (document.getElementById('carrier').value == 'att' && document.getElementById('lines').value == '3') {
        console.log('att : 3 lines');
        mobileArr.push(att[2]);
      } else if (document.getElementById('carrier').value == 'att' && document.getElementById('lines').value == '4') {
        console.log('att : 4 line');
        mobileArr.push(att[3]);
      } else if (document.getElementById('carrier').value == 'att' && document.getElementById('lines').value == '5') {
        console.log('att : 5 line');
        mobileArr.push(att[4]);
      } else if (document.getElementById('carrier').value == 'verizon' && document.getElementById('lines').value == '1') {
        console.log('verizon : 1 line');
        mobileArr.push(mobileArr[5]);
      } else if (document.getElementById('carrier').value == 'verizon' && document.getElementById('lines').value == '2') {
        console.log('verizon : 2 lines');
        mobileArr.push(mobileArr[6]);
      } else if (document.getElementById('carrier').value == 'verizon' && document.getElementById('lines').value == '3') {
        console.log('verizon : 3 lines');
        mobileArr.push(mobileArr[7]);
      } else if (document.getElementById('carrier').value == 'verizon' && document.getElementById('lines').value == '4') {
        console.log('verizon : 4 lines');
        mobileArr.push(mobileArr[8]);
      } else if (document.getElementById('carrier').value == 'verizon' && document.getElementById('lines').value == '5') {
        console.log('verizon : 5 lines');
        mobileArr.push(mobileArr[9]);
      } else if (document.getElementById('carrier').value == 't-mobile' && document.getElementById('lines').value == '1') {
        console.log('tmobile : 1 line');
        mobileArr.push(mobileArr[10]);
      } else if (document.getElementById('carrier').value == 't-mobile' && document.getElementById('lines').value == '2') {
        console.log('tmobile : 2 lines');
        mobileArr.push(mobileArr[11]);
      } else if (document.getElementById('carrier').value == 't-mobile' && document.getElementById('lines').value == '3') {
        console.log('tmobile : 3 lines');
        mobileArr.push(mobileArr[12]);
      } else if (document.getElementById('carrier').value == 't-mobile' && document.getElementById('lines').value == '4') {
        console.log('tmobile : 4 lines');
        mobileArr.push(mobileArr[13]);
      } else if (document.getElementById('carrier').value == 't-mobile' && document.getElementById('lines').value == '5') {
        console.log('tmobile : 5 lines');
        mobileArr.push(mobileArr[14]);
      } else if (document.getElementById('carrier').value == 'sprint' && document.getElementById('lines').value == '1') {
        console.log('sprint : 1 line');
        mobileArr.push(mobileArr[15]);
      } else if (document.getElementById('carrier').value == 'sprint' && document.getElementById('lines').value == '2') {
        console.log('sprint : 2 lines');
        mobileArr.push(mobileArr[16]);
      } else if (document.getElementById('carrier').value == 'sprint' && document.getElementById('lines').value == '3') {
        console.log('sprint : 3 lines');
        mobileArr.push(mobileArr[17]);
      } else if (document.getElementById('carrier').value == 'sprint' && document.getElementById('lines').value == '4') {
        console.log('sprint : 4 lines');
        mobileArr.push(mobileArr[18]);
      } else if (document.getElementById('carrier').value == 'sprint' && document.getElementById('lines').value == '5') {
        console.log('sprint : 5 lines');
        mobileArr.push(mobileArr[19]);
      }
    });
    // localStorage.setItem('stringifiedUserInput', JSON.stringify(arrayNumber));
  },
};

var planTable = document.getElementById('planTable');
var trEl = document.createElement('tr');
var comparePayment = document.createElement('td');

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
// var tracker = {
//   selectEl: document.getElementById('select'),
//
//   checkClicks: function () {
//     this.selectEl.addEventListener('change', function (e) {
//       // e.preventDefault();
//       var liEl = document.createElement('li');
//       if (document.getElementById('select')) {
//
//       } else if (document.getElementById('select')) {
//         console.log('oneLine');
//         liEl.textContent = oneLine.renderAsRow();
//       } else if (document.getElementById('select')) {
//         console.log('twoLine');
//         liEl.textContent = twoLine.renderAsRow();
//       } else if (document.getElementById('select')) {
//         console.log('threeLine');
//         liEl.textContent = threeLine.renderAsRow();
//       } else if (document.getElementById('select')) {
//         console.log('fourLine');
//         liEl.textContent = fourLine.renderAsRow();
//       }
//     });
//   },
// };

comparePlan.checkClicks();
