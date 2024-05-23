function uni(score, extra) {
  if (score >= 90) {
    console.log("Admitted");
  } else if (score >= 80 && score <= 89) {
    if (extra >= 2) {
      console.log("Admitted");
    } else {
      console.log("Not admitted");
    }
  } else if (score < 80) {
    console.log("Not admitted");
  }
}

uni(85, 3);
