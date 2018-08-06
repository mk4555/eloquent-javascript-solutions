function reverseArray(array) {
  let reversed = [];
  for (let i=0; i<array.length; i++) {
    reversed.unshift(array[i]);
  }
  return reversed;
}

function reverseArrayInPlace(array) {
  let first = 0; // first index
  let last = array.length-1; // last index
  while (first < last && first !== last) {
    let tmp = array[first];
    array[first] = array[last];
    array[last] = tmp;
    first++;
    last--;
  }
  return array;
}
