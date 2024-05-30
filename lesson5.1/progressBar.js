function progressBar(progress) {
    let numPercentSigns = progress / 10;
    let numDots = 10 - numPercentSigns;

    let loadingBar = '[' + '%'.repeat(numPercentSigns) + '.'.repeat(numDots) + ']';

    if (progress === 100) {
        console.log(loadingBar);
        console.log('Complete!');
    } else {
        console.log(`${progress}% ${loadingBar}`);
        console.log(`Still loading...`);
    }
}

progressBar(100);