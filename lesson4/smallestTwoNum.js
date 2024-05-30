function smallestTwoNumbers(arr) {
  let smallest = Number.POSITIVE_INFINITY;
  let secondsSmallest = Number.POSITIVE_INFINITY;

  for (let num of arr) {
    if (num < smallest) {
      secondsSmallest = smallest;
      smallest = num;
    } else if (num < secondsSmallest) {
      secondsSmallest = num;
    }
  }

  console.log(`${smallest} ${secondsSmallest}`);
}

smallestTwoNumbers([30, 15, 50, 5]);
