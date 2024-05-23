function climate(latitude, char) {
  if (latitude > 66.5) {
    console.log("Arctic Zone");
  } else if (latitude > 23.5 && latitude <= 66.5) {
    console.log("Temperate Zone");
  } else if (latitude > 0 && latitude <= 23.5) {
    console.log("Tropic Zone");
  } else if ((latitude = 0)) {
    console.log("Equator");
  }
}

climate(45, "S");
