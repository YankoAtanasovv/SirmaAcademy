function characterInRange(char1, char2) {
  let startCode = char1.charCodeAt(0);
  let endCode = char2.charCodeAt(0);

  if (startCode > endCode) {
    [startCode, endCode] = [endCode, startCode];
  }

  let characterInBtw = [];

  for (let i = startCode + 1; i < endCode; i++) {
    characterInBtw.push(String.fromCharCode(i));
  }

  console.log(characterInBtw.join(" "));
}

characterInRange("a", "d");
