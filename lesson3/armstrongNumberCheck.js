function f(n) {
  let numStr = n.toString();
  let numDigits = numStr.length;
  let sum = 0;

  for (let char of numStr) {
    let digit = parseInt(char);
    sum += Math.pow(digit, numDigits);
  }

  if (sum === n) {
    console.log("true");
  } else {
    console.log("false");
  }
}

f(123);
