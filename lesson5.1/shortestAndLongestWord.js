function shortestAndLongest(str) {
  const words = str.match(/\b\w+\b/g);

  let shortest = words[0];
    let longest = words[0];
    
    words.map(word => {
        if (word.length < shortest.length) {
            shortest = word;
        }
        if (word.length > longest.length) {
            longest = word;
        }
    });

  console.log(`Longest -> ${longest} \nShortest -> ${shortest}`);
}

shortestAndLongest("Hello how are you today? I hope you are fine");
