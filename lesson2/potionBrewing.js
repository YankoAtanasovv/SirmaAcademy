function potion(one, two) {
  if (one === "herbs") {
    if (two === "water") {
      console.log("Health potion");
    } else if (two === "oil") {
      console.log("Stealth potion");
    } else {
      console.log("Minor stamina potion");
    }
  } else if (one === "berries") {
    if (two === "sugar") {
      console.log("Speed potion");
    } else {
      console.log("Minor energy potion");
    }
  } else {
    console.log("No potion");
  }
}

potion("herbs", "banana");
