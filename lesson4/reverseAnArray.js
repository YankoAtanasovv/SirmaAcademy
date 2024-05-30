// function reverseAnArray(n, arr) {
//   let newArr = [];

//   for (let i = 0; i < n; i++) {
//     newArr.push(arr[i]);
//   }

//   let reversedArray = [];
//   for (let i = newArr.length - 1; i >= 0; i--) {
//     reversedArray.push(newArr[i]);
//   }

//   console.log(reversedArray.join(" "));
// }

// reverseAnArray(3, [10, 20, 30, 40, 50]);

function reversedArray(n, arr) {
  let newArr = arr.slice(0, n);

  newArr.reverse();

  console.log(newArr.join(" "));
}

reversedArray(3, [10, 20, 30, 40, 50]);
