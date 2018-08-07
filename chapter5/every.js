function every(array, test) {
  for (let i=0; i<array.length; i++) {
    if (!test(array[i])) {
      return false;
    }
  }
  return true;
}

function everyWithSome(array, test) {
  return !array.some(element=> !test(element));
}
