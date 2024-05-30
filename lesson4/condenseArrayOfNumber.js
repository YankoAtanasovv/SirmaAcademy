function condenseArrayOfNumber(arr) {
  while (arr.length > 1) {
    let condeseArr = [];

    for (let i = 0; i < arr.length - 1; i++) {
      condeseArr.push(arr[i] + arr[i + 1]);
    }

    arr = condeseArr;
  }
  console.log(arr[0]);
}

condenseArrayOfNumber([5, 0, 4, 1, 2]);
