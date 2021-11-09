'use strict'

function solveEquation(a, b, c) {
  let arr = [];
  let d = b ** 2 - 4 * a * c;
  if (d > 0) {
    arr[0] = (- b + Math.sqrt(d)) / (2 * a);
    arr[1] = (- b - Math.sqrt(d)) / (2 * a);
  }
  else if (d == 0) {
    arr[0] = -b / (2 * a);
  }
  else if (d < 0) {
    arr;
  }
  return arr; // array
}


function calculateTotalMortgage(percent, contribution, amount, date) {
  if (isNaN(percent)) {
    return `Параметр "Процентная ставка" содержит неправильное значение "${percent}"`
  } else if (isNaN(contribution)) {
    return `Параметр "Начальный взнос" содержит неправильное значение "${contribution}"`
  } else if (isNaN(amount)) {
    return `Параметр "Общая стоимость" содержит неправильное значение "${amount}"`
  }
  let month = new Date().getMonth();
  let year = new Date().getFullYear();
  let numberOfyears = date.getFullYear() - year;
  let n = numberOFyears * 12 - month + date.getMonth();
  let P = (percent / 100) / 12;
  let S = amount - contribution;
  let payment = S * (P + (P / (((1 + P) ** n) - 1)))
  let totalAmount = (payment * n).toFixed(2);

  return Number(totalAmount);
}
