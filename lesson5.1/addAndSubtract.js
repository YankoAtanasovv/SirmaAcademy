function sum(a, b) {
  return a + b;
}

function subtract(sumResult, c) {
  return sumResult - c;
}

const num1 = 23;
const num2 = 6;
const num3 = 10;

const sumResult = sum(num1, num2);
const finalRes = subtract(sumResult, num3);

console.log(finalRes);
