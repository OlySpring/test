'use strict';
let startButoon = document.getElementById('start'),
  classTitleValue = document.querySelectorAll('.result-table div:nth-child(2n)'),
  inputData = document.querySelectorAll('.expenses-item'),
  btnApproveExpenses = document.getElementsByTagName('button')[0],
  btnOptionalExpenses = document.getElementsByTagName('button')[1],
  countBudgetBtn = document.getElementsByTagName('button')[2],
  fieldOptionalExpenses = document.querySelectorAll('.optionalexpenses-item'),
  fieldIncome = document.querySelector('.choose-income'),
  fieldSum = document.querySelector('.choose-sum'),
  fieldPercent = document.querySelector('.choose-percent'),
  fielaYear = document.querySelector('.year-value'),
  fielaMonth = document.querySelector('.month-value'),
  fielaDay = document.querySelector('.day-value'),
  checkbox = document.getElementById('savings');
console.log(fieldIncome);
console.log(fieldSum);

let money, time, key;

function start() {
  money = +prompt('Бюджет?');
  time = prompt('Enter date in format YYYY-MM-DD');
  while (isNaN(money) || money == '' || money == null) {
    money = +prompt('Бюджет?');
  }
}
start();

let appData = {
  budget: money,
  date: time,
  expenses: {},
  optionalExpenses: {},
  income: [],
  savings: true,
  choosExpenses: function () {
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
  },
  detectDayBudget: function () {
    appData.moneyPerDay = ((appData.budget) / 30).toFixed();
    alert('Everyday budget:' + appData.moneyPerDay);
  },
  detectLevel: function () {
    if (appData.moneyPerDay < 100) {
      console.log('Minimum level of wealth');
    } else if (appData.moneyPerDay > 100 && appData.moneyPerDay < 2000) {
      console.log('The average level of wealth');
    } else if (appData.moneyPerDay > 200) {
      console.log('High level of affluence');
    } else {
      console.log('Error');
    }
  },
  checkSavings: function () {
    if (appData.savings == true) {
      let save = +prompt('What is the sum of savings?'),
        percent = +('What percentage?');
      appData.monthIncone = save / 100 / 12 * percent;
      alert('Monthly income from your deposit: ' + appData.monthIncone);
    }
  },
  chooseOptExpenses: function () {
    for (let i = 1; i < 3; i++)
      appData.optionalExpenses[i] = prompt('An optional expense?');
  },
  chooseIncome: function () {
    let income = prompt('What can bring additional income? (Comma separated)', '');

    if (typeof (income) != "string" || income == null || income == '') {
      console.log('Вы ввели некоректные данные');
    } else {
      appData.income = income.split(',');
      appData.income.push(prompt('Maybe something else?'));
      appData.income.sort();
    }
    appData.income.forEach((item, index) => {
      alert(`ways to make extra money: ${index+1}. ${item} `);
    });
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
    i = 1;99652
  }
} while (i < 2);
 */

for (key in appData) {
  console.log(`Our program includes data: ${key}`);
}
console.log(appData.expenses[key]);


console.log(appData);
console.log(appData.expenses);


console.log(appData.optionalExpenses);