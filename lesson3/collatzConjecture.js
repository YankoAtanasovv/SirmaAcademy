function f(n) {
  let sequence = [];

  while (n !== 1) {
    sequence.push(n);

    if (n % 2 === 0) {
      n = n / 2;
    } else {
      n = 3 * n + 1;
    }
  }
  sequence.push(1);
  console.log(sequence);
}

f(6);
