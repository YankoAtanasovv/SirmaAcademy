function journey(budget, season) {
 

  let destination = "";
  let rest = "";
  let price = 0;

  switch (season) {
    case "summer":
      rest = "Camp";
      if (budget <= 100) {
        destination = "Bulgaria";
        price = budget * 0.7;
      } else if (budget <= 1000) {
        destination = "Europe";
        price = budget * 0.6;
      } else {
        destination = "Asia";
        rest = "Hotel";
        price = budget * 0.1;
      }
      break;

    case "winter":
      rest = "Hotel";
      if (budget <= 100) {
        destination = "Bulgaria";
        price = budget * 0.3;
      } else if (budget <= 1000) {
        destination = "Europe";
        price = budget * 0.2;
      } else {
        destination = "Asia";

        price = budget * 0.1;
      }
      break;
  }
  let diff = Math.abs(budget - price);
  console.log(`Somewhere in ${destination}`);
  console.log(`${rest} - ${diff.toFixed(2)}`);
}

journey(678.53, "winter");
