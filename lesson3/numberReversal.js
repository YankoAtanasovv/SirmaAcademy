function f(n) {
  let reversal = "";

  let numStr = n.toString();

  for (let i = numStr.length - 1; i >= 0; i--) {
    reversal += numStr[i];
  }

  let reversalNum = parseInt(reversal, 10);

  console.log(reversalNum);
}

f(10203);

// function f(n) {
//   let numStr = n.toString();

//   let reversedStr = numStr.split("").reverse().join("");

//   let reverseNum = parseInt(reversedStr);

//   console.log(reverseNum);
// }

// f(123);
