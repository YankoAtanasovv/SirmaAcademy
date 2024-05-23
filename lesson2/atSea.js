function sea(days, type, mood) {
  let price
  let singleRoom = 25.0;
  let apartment = 50.0;
  let presidential = 100.0;

  let nights = days - 1;

  switch (type) {
    case "single room":
      price = singleRoom * nights;
      break;

    case "apartment":
      if (days < 10) {
        price = (apartment * nights) * 0.7;
      } else if (days >= 10 && days <= 15) {
        price = (apartment * nights) * 0.65;
      } else if (days > 15) {
        price = (apartment * nights) * 0.5;
      }
      break;

    case "president apartment":
      if (days < 10) {
        price = (presidential * nights) * 0.9;
      } else if (days >= 10 && days <= 15) {
        price = (presidential * nights) * 0.85;
      } else if (days > 15) {
        price = (presidential * nights) * 0.8;
      }
      break;

    default:
      break;
    }
    
    if (mood === "positive") { 
        price = price * 1.25;
    } else {
        price = price * 0.9;
    }

    console.log(price.toFixed(2));
}

sea(30, "president apartment", "negative");
