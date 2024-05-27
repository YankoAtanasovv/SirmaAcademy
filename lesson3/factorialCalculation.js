function f(n) {
  let factorial = 1;

  for (let i = 1; i <= n; i++) {
    factorial *= i;
  }
  console.log(factorial);
}

f(3);
