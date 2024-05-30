function firstAndLast(k, arr) {
    let first = arr.slice(0, k);
    let last = arr.slice(-k);

    console.log(first.join(' '));
    console.log(last.join(' '));


}


firstAndLast(3, [6, 7, 8, 9]);