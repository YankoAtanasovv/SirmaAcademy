function extract(arr) {
  let newArr = [];

  let biggest = 0;

  for (let i = 0; i <= arr.length - 1; i++) {
    if (arr[i] > biggest) {
      biggest = arr[i];
      newArr.push(arr[i]);
    }
  }

  console.log(newArr.join(" "));
}

extract([1, 3, 8, 4, 10, 12, 3, 2, 24]);
