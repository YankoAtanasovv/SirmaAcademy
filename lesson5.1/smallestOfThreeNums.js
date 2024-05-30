function smallestOfThreeNum(a, b, c) { 
    let smallest = 0;

    if (a < b && a < c) {
        smallest = a;
    } else if (b < a && b < c) {
        smallest = b;
    } else {
        smallest = c;
    }

    console.log(smallest);




}


smallestOfThreeNum(600, 342, 123);