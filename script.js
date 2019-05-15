'use strict';
let money = prompt('You buget?');
let time = prompt('Enter date in format YYYY-MM-DD');
let key = prompt('Enter mandatory budget item in this mounth');
let value = prompt('How much?');
let appData = {
  budget: money,
  date: time,
  expenses: {
    [key]: value
  },
  optionalExpenses: {},
  income: [],
  savings: false
};
alert((appData.budget - appData.expenses[key]) / 30);
console.log(appData);
console.log(appData.expenses[key]);