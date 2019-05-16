'use strict';
let money = +prompt('You buget?');
let time = prompt('Enter date in format YYYY-MM-DD');
let appData = {
  budget: money,
  date: time,
  expenses: {},
  optionalExpenses: {},
  income: [],
  savings: false
};
for (let i = 1; i < 2; i++) {
  var key = prompt('Enter mandatory budget item in this mounth'),
    value = +prompt('How much?');
  if (typeof (key) === 'string' && key != '' && value != '' && typeof (key) != null &&
    typeof (value) != null && key.length < 50) {
    console.log('Done');
    appData.expenses[key] = value;
  } else {
    alert('Be careful. Enter the data again');
    i = 0;
  }
};
/* let i = 1;
while (i < 2) {
  var key = prompt('Enter mandatory budget item in this mounth'),
    value = +prompt('How much?');
  if (typeof (key) === 'string' && key != '' && value != '' && typeof (key) != null &&
    typeof (value) != null && key.length < 50) {
    console.log('Done');
    appData.expenses[key] = value;
    i++;
  } else {
    alert('Be careful. Enter the data again');
    i = 1;
  }
} */
/* let i = 1;
do {
  var key = prompt('Enter mandatory budget item in this mounth'),
    value = +prompt('How much?');
  if (typeof (key) === 'string' && key != '' && value != '' && typeof (key) != null &&
    typeof (value) != null && key.length < 50) {
    console.log('Done');
    appData.expenses[key] = value;
    i++;
  } else {
    alert('Be careful. Enter the data again');
    i = 1;
  }
} while (i < 2);
 */


console.log(appData.expenses[key]);
appData.moneyPerDay = ((appData.budget - appData.expenses[key]) / 30);
alert('Everyday budget:' + appData.moneyPerDay);
if (appData.moneyPerDay < 100) {
  console.log('Minimum level of wealth');
} else if (appData.moneyPerDay > 100 && appData.moneyPerDay < 2000) {
  console.log('The average level of wealth');
} else if (appData.moneyPerDay > 200) {
  console.log('High level of affluence');
} else {
  console.log('Error')
};
console.log(appData);
console.log(appData.expenses);