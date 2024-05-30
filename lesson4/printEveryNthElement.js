function printEveryNthElement(arr, step) {
  let newArr = [];

  for (let i = 0; i < arr.length - 1; i += step) {
    newArr.push(arr[i]);
  }

  console.log(newArr.join(" "));
}

printEveryNthElement(["1", "2", "3", "4", "5"], 6);
