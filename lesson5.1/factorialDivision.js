function factorial(n) {
  if (n === 0 || n === 1) {
    return 1;
  }
  let result = 1;
  for (let i = n; i > 1; i--) {
    result *= i;
  }
  return result;
}

function factorialDivision(num1, num2) {
  const factorial1 = factorial(num1);
  const factorial2 = factorial(num2);

  const divisionResult = factorial1 / factorial2;

  console.log(divisionResult.toFixed(2));
}

factorialDivision(6, 2);
