function negativePositive(arr) {
  let newArr = [];

  for (let el of arr) {
    if (el < 0) {
      newArr.unshift(el);
    } else {
      newArr.push(el);
    }
  }
  console.log(newArr.join(" "));
}

negativePositive([7, -2, 8, 9]);
