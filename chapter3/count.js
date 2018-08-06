function countBs(word) {
  let counter = 0;
  for (let i=0; i<word.length; i++) {
    if (word[i] === "B") {
      counter += 1;
    }
  }
  return counter;

}

function countChar(word, letter) {
  let counter = 0;
  for (let i=0; i<word.length; i++) {
    if (word[i] === letter) {
      counter += 1;
    }
  }
  return counter;
}
