function f(str) {
  let revStr = "";

  for (let i = str.length - 1; i >=0; i--) {
    revStr += str[i];
  }

  if (str == revStr) {
    console.log("true");
  } else {
    console.log("false");
  }
}

f("hello");
