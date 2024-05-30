function arrayManipulations(input) {
  let arr = input[0].split(" ").map(Number);
  let commands = input.slice(1);

  commands.forEach((command) => {
    let parts = command.split(" ");
    let action = parts[0];
    let number, index;

    switch (action) {
      case "Add":
        number = parseInt(parts[1]);
        arr.push(number);
        break;
      case "Remove":
        number = parseInt(parts[1]);
        arr = arr.filter((el) => el !== number);
        break;
      case "RemoveAt":
        index = parseInt(parts[1]);
        arr.splice(index, 1);
        break;
      case "Insert":
        number = parseInt(parts[1]);
        index = parseInt(parts[2]);
        arr.splice(index, 0, number);
        break;
      default:
        break;
    }
  });

  console.log(arr.join(" "));
}

arrayManipulations([
  "4 19 2 53 6 42",
  "Add 3",
  "Remove 2",
  "RemoveAt 1",
  "Insert 8 3",
]);
