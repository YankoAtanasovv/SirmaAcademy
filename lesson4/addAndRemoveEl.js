function addRemoveCommands(commands) {
  let arr = [];
  let currentNumber = 1;

  for (let command of commands) {
    if (command === "add") {
      arr.push(currentNumber);
      currentNumber++;
    } else if (command === "remove") {
      if (arr.length > 0) {
        arr.pop();
      }
    }
  }

  if (arr.length === 0) {
    console.log("Empty");
  } else {
    console.log(arr.join(" "));
  }
}

addRemoveCommands(["add", "add", "remove", "add", "add"]);
