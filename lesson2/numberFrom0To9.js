function numbers(number) {
  let output = "";

  if (number > 9) {
    console.log("too big");
  } else {
    if (number == 1) {
      output = "one";
    } else if (number == 2) {
      output = "two";
    } else if (number == 3) {
      output = "three";
    } else if (number == 4) {
      output = "four";
    } else if (number == 5) {
      output = "five";
    } else if (number == 6) {
      output = "six";
    } else if (number == 7) {
      output = "seven";
    } else if (number == 8) {
      output = "eight";
    } else if (number == 9) {
      output = "nine";
    }
  }

  console.log(output);
}

numbers(5);
