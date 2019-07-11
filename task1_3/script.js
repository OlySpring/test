'use strict';
let money, time, key;

function start() {
  money = +prompt('You buget?');
  time = prompt('Enter date in format YYYY-MM-DD');
  while (isNaN(money) || money == '' || money == null) {
    money = +prompt('You buget?');
  }
}
start();

let appData = {
  budget: money,
  date: time,
  expenses: {},
  optionalExpenses: {},
  income: [],
  savings: true
};

function choosExpenses() {
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
  }
}
choosExpenses();

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
    i = 1;99652
  }
} while (i < 2);
 */


console.log(appData.expenses[key]);

function detectDayBudget() {
  appData.moneyPerDay = ((appData.budget) / 30).toFixed();
  alert('Everyday budget:' + appData.moneyPerDay);
}
detectDayBudget();

function detectLevel() {
  if (appData.moneyPerDay < 100) {
    console.log('Minimum level of wealth');
  } else if (appData.moneyPerDay > 100 && appData.moneyPerDay < 2000) {
    console.log('The average level of wealth');
  } else if (appData.moneyPerDay > 200) {
    console.log('High level of affluence');
  } else {
    console.log('Error');
  }
}
detectLevel();
console.log(appData);
console.log(appData.expenses);

function checkSavings() {
  if (appData.savings == true) {
    let save = +prompt('What is the sum of savings?'),
      percent = +('What percentage?');
    appData.monthIncone = save / 100 / 12 * percent;
    alert('Monthly income from your deposit: ' + appData.monthIncone);
  }
}
checkSavings();

function chooseOptExpenses() {
  for (let i = 1; i < 4; i++)
    appData.optionalExpenses[i] = prompt('An optional expense?');

}
chooseOptExpenses();
console.log(appData.optionalExpenses);