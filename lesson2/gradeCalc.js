function grade(num) {

    if (num >= 0 && num <= 59) {
        console.log("F");
        
    } else if (num >= 60 && num <= 69) {
        console.log("D");
    } else if (num >= 70 && num <= 79) {
        console.log("C");
    } else if (num >= 80 && num <= 89) {
        console.log("B");
    } else if (num >= 90 && num <= 100) {
        console.log("A");
    }




}


grade(95);