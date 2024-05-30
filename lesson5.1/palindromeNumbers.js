function palindromeNumbers(arr) {
  arr.forEach((number) => {
    if (isPalindrome(number)) {
      console.log("true");
    } else {
      console.log("false");
    }
  });
}

palindromeNumbers([123, 323, 421, 121]);

function isPalindrome(number) {
  const str = number.toString();
  const reversedStr = str.split("").reverse().join("");

  return str === reversedStr;
}
