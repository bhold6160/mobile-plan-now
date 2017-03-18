// 'use strict'
// var table = document.getElementById('planTable');
//
// var yourResults = function() {
//   var planTable = document.getElementById('planTable');
//   var trEl = document.createElement('tr');
//   var carrier = document.createElement('td');
//   var line = document.createElement('td');
//   var monthlyPayment = document.createElement('td');
//
//   if (document.getElementById('carrier').value == 'att') {
//     carrier.textContent = 'AT&T';
//   }  else if (document.getElementById('carrier').value == 'verizon') {
//     carrier.textContent = 'Verizon';
//   } else if (document.getElementById('carrier').value == 't-mobile') {
//     carrier.textContent = 'T-Mobile';
//   } else if (document.getElementById('carrier').value == 'sprint') {
//     carrier.textContent = 'Sprint';
//   }
//
//   if (document.getElementById('lines').value == 'oneLine') {
//     line.textContent = '1 line';
//   }  else if (document.getElementById('lines').value == 'twoLine') {
//     line.textContent = '2 lines';
//   } else if (document.getElementById('lines').value == 'threeLine') {
//     line.textContent = '3 lines';
//   } else if (document.getElementById('lines').value == 'fourLine') {
//     line.textContent = '4 lines';
//   } else if (document.getElementById('lines').value == 'fiveLine') {
//     line.textContent = '5 lines';
//   }
//
// var amountOne = document.getElementById('monthlyPayment').value;
//   monthlyPayment.textContent = 'Your Plan: $' + amountOne;
//
//   trEl.appendChild(carrier);
//   trEl.appendChild(line);
//   trEl.appendChild(monthlyPayment);
//   planTable.appendChild(trEl);
//
// };
//

//
// function mobilePlan(name, plan) {
//   this.name = name;
//   this.plan = plan;
// };
//
// mobilePlan.prototype.renderAsRow = function() {
//   var planTable = document.getElementById('planTable');
//   var trEl = document.createElement('tr');
//   var line = document.createElement('td');
//   var comparePayment = document.createElement('td');
//   comparePayment.textContent = 'Latest Plan:';
//   trEl.appendChild(comparePayment);
//   trEl.appendChild(line);
//   planTable.appendChild(trEl);
//
//   if (document.getElementById('carrier').value == 'att' && document.getElementById('lines').value == 'oneLine') {
//     carrier.textContent = 'AT&T';
//     line.textContent = att.plan[0];
//   } else if (document.getElementById('carrier').value == 'att' && document.getElementById('lines').value == 'twoLine') {
//     carrier.textContent = 'AT&T';
//     line.textContent = att.plan[1];
//   } else if (document.getElementById('carrier').value == 'att' && document.getElementById('lines').value == 'threeLine') {
//     carrier.textContent = 'AT&T';
//     line.textContent = att.plan[2];
//   } else if (document.getElementById('carrier').value == 'att' && document.getElementById('lines').value == 'fourLine') {
//     carrier.textContent = 'AT&T';
//     line.textContent = att.plan[3];
//   } else if (document.getElementById('carrier').value == 'att' && document.getElementById('lines').value == 'fiveLine') {
//     carrier.textContent = 'AT&T';
//     line.textContent = att.plan[4];
//   }
// };
//
// var comparePlan = {
//   showResultsEl: document.getElementById('show-results'),
//
//   checkClicks: function() {
//     this.showResultsEl.addEventListener('click', function(e){
//       e.preventDefault();
//       var liEl = document.createElement('li');
//         liEl.textContent = yourResults();
//         liEl.textContent = att.renderAsRow();
//     });
//   }
// };
// comparePlan.checkClicks();
//


//ixs turn//

//lets make a constructor function for the form//

// var PikePlace = new comparePlan ('Pike Place','77','88');
//
// var table = document.getElementById('planTable');
// ix////
// 'use strict';
//
// var allItems = [];
//
// var form = document.getElementById('form');
// var button = document.getElementById('fun-button');
//
// var table = document.getElementById('table');
// var tbody = document.getElementById('table-body');
// var tfoot = document.getElementsByTagName('tfoot')[0];
//
//
// function Item(name,line, price) {
//   this.name = name;
//   this.line = line;
//   this.price = price;
//
//   allItems.push(this);
// }
//
//
// function makeItemRow(obj) {
//   var row = document.createElement('tr');
//
//   var nameCell = document.createElement('td');
//   nameCell.textContent = obj.name;
//   row.appendChild(nameCell);
//
//   var priceCell = document.createElement('td');
//   priceCell.textContent = obj.price;
//   row.appendChild(priceCell);
//
//   var taxCell = document.createElement('td');
//   taxCell.textContent = obj.line;
//   row.appendChild(taxCell);
//
//   tbody.appendChild(row);
// }
//
// function makeAllItemRows() {
//   for (var item of allItems) {
//     makeItemRow(item);
//   }
// }
//
//
// function handleFormSubmit(event) {
//   event.preventDefault();
//   console.log(event);
//
//   var name = event.target.name.value;
//   var line = event.target.line.value;
//   var price = event.target.price.value;
//
//
//   var newItem = new Item(name, line,price);
//
//   makeItemRow(newItem);
//   tfoot.innerHTML = ''
//
//   event.target.name.value = null;
//   event.target.line.value = null;
//   event.target.price.value = null;
//
// }
//
// form.addEventListener('submit', handleFormSubmit);
//
// makeAllItemRows();


/////////////kenny///
// var carriers = {
// var att = ['$60','$115','$135','$155','$175'];
// var verizon= ['$80','$140','$160','$180','$230'];
// var tmobile = ['$70','$100','$140','$160','$180'];
// var sprint = ['$50','$90','$90','$90','$90'];
// }
//
// var carrierArr=carrier[i]
//
//
//
// var something= []
// function Compare(name,line,price){
//   this.name=name;
//   this.line=line;
//   this.price=price;
//   this.arr = name[i];
//
//   something.push(this);
// }
//
// price:function(){
//   carrierArr[this.line]
// }
//
// (function() {
//
//   for (var i in carrierName){
//     var newPlan = new Compare(carrierName[i], line[i], price() )
//   };
// })()


function showLines(){
  var selectBox = document.getElementById('carrier');
  var userInput = selectBox.options[selectBox.selectedIndex].value;
  if(userInput == 'AtT'){
    document.getElementById('selectLine').style.visibility ='visible';
  } else{
    document.getElementById('selectLine').style.visiblity='hidden';
  }
return false;
}

function showPrice(){
  var selectBox = document.getElementById('selectLine');
  var userInput = selectBox.options[selectBox.selectedIndex].value;
  if(userInput == '1'){
    document.getElementById('price').style.visibility ='visible';
  } else{
    document.getElementById('selectLine').style.visiblity='hidden';
  }
return false;
}
