function longestSequence(arr) {
  let maxSequence = [];
  let currentSequence = [];

  for (let i = 0; i < arr.length; i++) {
    if (i === 0 || arr[i] !== arr[i - 1]) {
      currentSequence = [arr[i]];
    } else {
      currentSequence.push(arr[i]);
    }

    if (
      currentSequence.length > maxSequence.length ||
      (currentSequence.length === maxSequence.length && i === arr.length - 1)
    ) {
      maxSequence = currentSequence;
    }
  }

  console.log(maxSequence.join(" "));
}

longestSequence([2, 2, 2, 3, 4, 4, 2, 2, 2, 1]);
