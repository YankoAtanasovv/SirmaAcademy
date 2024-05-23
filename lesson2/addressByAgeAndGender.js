function address(age, gender) {
  if (age < 16 && gender == "m") {
    console.log("Master");
  } else if (age < 16 && gender == "f") {
    console.log("Miss");
  } else if (age >= 16 && gender == "m") {
    console.log("Mr.");
  } else if (age >= 16 && gender == "f") {
    console.log("Ms.");
  }
}

address(32, "f");
