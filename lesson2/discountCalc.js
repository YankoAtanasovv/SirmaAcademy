function discCalc(age, card) {

    if (age < 18) {
        console.log("10% discount");
    } else if (age >= 18 && age <= 64) {
        if (card === "Yes") {
            console.log("20% discount");
        } else {
            console.log("10% discount");
        }
    } else if (age >= 65) {
        console.log("30% discount");
        
    }


}

discCalc(15, "No");