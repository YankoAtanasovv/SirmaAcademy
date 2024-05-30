function sumEvenNumbers(arr) {
  let sum = 0;
  let newArr = [];

  for (let i = 0; i <= arr.length - 1; i++) {
    newArr.push(Number(arr[i]));
  }

  for (let j = 0; j <= newArr.length - 1; j++) {
    if (newArr[j] % 2 === 0) {
      sum += newArr[j];
    }
  }

  console.log(sum);
}

sumEvenNumbers(["2", "4", "6", "8", "10"]);
