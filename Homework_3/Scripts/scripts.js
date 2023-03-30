//========================Task1===============
function findMin(a, b) {
    return Math.min(a, b);
  }
  console.log(findMin(10, 5));
console.log(findMin(3, 8));
//========================Task2================
function printEvenNumbersDescending(a, b) {
    let start, end;
    if (a > b) {
      start = a;
      end = b;
    } else {
      start = b;
      end = a;
    }
      for (let i = start; i >= end; i--) {
      if (i % 2 === 0) {
        console.log(i);
      }
    }
  }
  //=========================Task3================
function power(base, exponent = 2) {
    return Math.pow(base, exponent);
}
console.log(power(2));
console.log(power(2, 3));
console.log(power(5, 4));
//=============================Task4================
function sumNumbers(n) {
    let sum = 0;
    for (let i = 1; i <= n; i++) {
      sum += i;
    }
    return sum;
}
console.log(sumNumbers(5));
//==============================Task5=================
let sumEven = 0;
let sumOdd = 0;
function sumEvenOdd(n, m) {
   
    for (let i = n; i <= m; i++) {
      if (i % 2 === 0) {
        sumEven += i;
      } else {
        sumOdd += i;
      }
    }
}
console.log(`Сумма четных чисел: ${sumEven}`);
console.log(`Сумма нечетных чисел: ${sumOdd}`);
//=================================Task6==================
function getLongestString(arr) {
    if (arr.length === 0) {
      return null;
    }
    let longestString = arr[0];
    for (let i = 1; i < arr.length; i++) {
      if (arr[i].length > longestString.length) {
        longestString = arr[i];
      }
    }
    return longestString;
}
const strings = ['Hello', 'World', '!', 'I', 'am', 'a', 'programmer'];
console.log(getLongestString(strings));
console.log(getLongestString([]));
//===================================Task*===================
const selectElement = document.createElement('select');

for (let i = 1; i <= 5; i++) {
  const optionElement = document.createElement('option');
  optionElement.textContent = 'Опция ' + i;
  selectElement.appendChild(optionElement);
}
document.body.appendChild(selectElement);
//===================================Task**==================
const tableElement = document.createElement('table');

for (let i = 1; i <= 3; i++) {
  const trElement = document.createElement('tr');
  
  for (let j = 1; j <= 3; j++) {
    const tdElement = document.createElement('td');
    tdElement.textContent = (i - 1) * 3 + j;
    trElement.appendChild(tdElement);
  }
  
  tableElement.appendChild(trElement);
}

document.body.appendChild(tableElement);