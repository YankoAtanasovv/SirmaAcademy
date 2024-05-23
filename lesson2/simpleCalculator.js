function calculator(num1, num2, op) {
  
  let result = 0;

  switch (op) {
    case "add":
          result = num1 + num2;
          console.log(result.toFixed(2));
      break;

    case "subtract":
      result = num1 - num2;
      console.log(result.toFixed(2));
      break;

    case "multiply":
      result = num1 * num2;
      console.log(result.toFixed(2));
      break;

    case "divide":
          result = num1 / num2;
          console.log(result.toFixed(2));
      break;

      default:
          break;
  }
}

calculator(5, 5, "add");
