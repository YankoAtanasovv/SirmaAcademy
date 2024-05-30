function processOddNumbers(arr) {
  let newArr = [];

  for (let i = 0; i <= arr.length - 1; i++) {
    if (i % 2 != 0) {
      newArr.push(arr[i] * 2);
    }
  }

  console.log(newArr.reverse().join(" "));
}

processOddNumbers([3, 0, 10, 4, 7, 3]);
