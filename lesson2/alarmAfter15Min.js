function alarm(hour, min) {

    min += 15;

    if (min >= 60) {
        min -= 60;
        hour += 1;
    }

    if (hour >= 24) {
        hour -= 24;
    }

    let formattedMin = min < 10 ? '0' + min : min;

    console.log(`${hour}:${formattedMin}`);

}

alarm(1, 47);