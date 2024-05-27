function f(n) {
  let a = 0;
  let b = 1;
  let sum = 0;

  for (let i = 0; i <= n; i++) {
    sum += a;

    let next = a + b;
    a = b;
    b = next;
  }

  console.log(sum);
}

f(3);
