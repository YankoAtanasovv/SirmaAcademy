function f(word) {
  let sum = 0;

  let lowerCaseText = word.toLowerCase();

  for (let char of lowerCaseText) {
    switch (char) {
      case "a":
        sum += 1;
        break;
      case "e":
        sum += 2;
        break;
      case "i":
        sum += 3;
        break;
      case "o":
        sum += 4;
        break;
      case "u":
        sum += 5;
        break;
    }
  }
  console.log(sum);
}

f("zzzz");
