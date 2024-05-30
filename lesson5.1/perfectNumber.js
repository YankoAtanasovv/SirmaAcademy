function perfectNumber(num) {
    let sumOfDivisors = 0;

    for (let i = 1; i <= num / 2; i++) {
        if (num % i === 0) {
            sumOfDivisors += i;
        }
    }

    return sumOfDivisors === num;


}

const num = 1236498;
if (perfectNumber(num)) {
    console.log("Perfect number!");
} else {
    console.log("It's not so perfect.");
}