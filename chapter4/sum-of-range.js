function range(start, end, step = 1) {
  let answer = [];
  if (step < 0) {
    for (let i=start; i>=end; i+=step) {
      answer.push(i);
    }
    return answer
  }
  for (let i=start; i<=end; i+=step) {
    answer.push(i);
  }
  return answer
}

function sum(numbers) {
  let total = 0;
  for (let i=0; i<numbers.length; i++) {
    total += numbers[i];
  }
  return total;
}
