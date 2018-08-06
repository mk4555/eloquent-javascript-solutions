function arrayToList(array) {
  let list = {value: null, next: null}
  let first = list
  for (let i=0; i<array.length; i++) {
    list.value = array[i];
    if (i === array.length-1) {
      list.next = null;
    } else {
      list.next = {value: null, next: null}
    }
    list = list.next
  }
  return first;
}

function listToArray(list) {
  let arr = []
  while (list !== null) {
    arr.push(list.value);
    list = list.next;
  }
  return arr;
}

function prepend(val, list) {
  let newList = {value: val, next: list}
  return newList
}

function nth(list, n) {
  if (n === 0) {
    return list.value
  } else {
    return nth(list.next, n-1)
  }
}
