// // 06.printing
// function print(name, integer, realNumber) {
//   console.log(name);
//   console.log(integer);
//   console.log(realNumber);
// }

// print("George", 200, 6.0);

// 07.weatherForecast
// function weatherForecast(town, degrees) {
//   let output = "Today in town " + town + " it is " + degrees + " degrees.";

//   console.log(output);
// }

// weatherForecast("Sofia", 29);

// 08.kilometresInMiles
// function convert(kilometers) {
//     let miles = kilometers * 0.621371;

//     console.log(miles);
// }

// convert(5);

// 09.calculate
// function calculate(numOne, numTwo) {
//     let sum = numOne + numTwo;
//     let difference = Math.abs(numOne - numTwo);
//     let product = numOne * numTwo;
//     let average = sum / 2;

//     console.log("Sum: " + sum);
//     console.log("Difference: " + difference);
//     console.log("Product: " + product);
//     console.log("Average: " + average);
// }

// calculate(25, 5);

// 10.time
// function time(seconds) {
//     let minutes = Math.floor(seconds / 60);
//     let remainingSeconds = seconds - minutes * 60;

//     console.log(minutes + ":" + remainingSeconds);
// }

// time(325);

// 13.panitng

// function painting(yellow) {
//     let red = yellow / 4;
//     let white = yellow * 2;

//     console.log(`Red: ${red}`);
//     console.log(`Yellow: ${yellow}`);
//     console.log(`White: ${white}`);
//     console.log(`Total: ${yellow + red + white}`);
// }

// painting(10);

// 14.Converter

// function converter(eur) {

//     let bgn = 1.95583;

//     let output = (eur * bgn).toFixed(2);

//     console.log(output);

// }

// converter(123);

// // 15.Speed

// function speed(distance, hours, minutes, seconds) {

//     let time = hours * 3600 + minutes * 60 + seconds;

//     let totalSpeed = distance / time;

//     console.log(totalSpeed.toFixed(6));

// }

// speed(2500,5,56,23);

// // 16.office

// function office(first) {
//   let secondDisc = first * 0.8;
//   let second = first - (first - secondDisc);
//   let third = (first + second) * 1.15;

//   let output = first + second + third;

//   console.log(output.toFixed(3));
// }

// office(380);

// 17.journey

// function journey(carOne, carTwo) {
//     let t2 = 3;
//     let t1 = t2 + 2;
//     let d1 = carOne * t1;
//     let d2 = carTwo * t2;
//     let distance = d1 - d2;
//     console.log(distance);


// }

// journey(81, 120);

// 18.BMI

// function bmi(weight, height) {
//     let totalBmi = weight / (height * height);

//     console.log(totalBmi.toFixed(2));

// }

// bmi(100, 1.92);

// 19.waterConsumption

function water(total, people) {

    let daily = total / (7 * people);

    console.log(daily.toFixed(2));

}

water(2450, 7);