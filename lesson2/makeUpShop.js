function shop(renovation, powders, lipsticks, spirals, shadows, correctors) {
    let powderPrice = 2.60;
    let lipstickPrice = 3.00;
    let spiralPrice = 4.10;
    let shadowPrice = 8.20;
    let correctorPrice = 2.00;

    let totalPowder = powders * powderPrice;
    let totalLipstick = lipsticks * lipstickPrice;
    let totalSpiral = spirals * spiralPrice;
    let totalShadow = shadows * shadowPrice;
    let totalCorrector = correctors * correctorPrice;

    let total = totalPowder + totalLipstick + totalSpiral + totalShadow + totalCorrector;

    let totalCount = powders + lipsticks + spirals + shadows + correctors;

    if (totalCount >= 50) {
        total *= 0.75;
    }

    let netProfit = total * 0.90;

    let difference = netProfit - renovation;

    if (difference >= 0) {
        console.log(`Yes! ${difference.toFixed(2)} BGN left.`);
    } else {
        console.log(`Not enough money! ${Math.abs(difference).toFixed(2)} BGN needed.`);
    }

}


shop(320, 8, 2, 5, 5, 1);