function archEra(year, mat) {
  if (year < 500 && mat === "stone") {
    console.log("Ancient");
  } else if (year <= 1500 && mat === "stone") {
    console.log("Medieval");
  } else if (year <= 1800 && met === "wood") {
    console.log("Colonial");
  } else if (year <= 1900 && mat === "steel") {
    console.log("Industrial");
  } else if (year > 1900 && mat === "steel") {
    console.log("Modern");
  }
}

archEra(1500, "stone");
