function f() {

    for (let hour = 0; hour < 24; hour++) {
        for (let minute = 0; minute < 59; minute++) {
            let formattedHour = hour.toString();
            let formattedMin = minute.toString();

            console.log(`${formattedHour}:${formattedMin}`);
        }
    }



}

f();