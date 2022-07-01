// print fibonacci sequence

function fibonacciSequence(n) {
  let fibonacci = [0, 1];
  for (let i = 2; i < n; i++) {
    fibonacci[i] = fibonacci[i - 1] + fibonacci[i - 2];
  }
  return fibonacci;
}

console.log(fibonacciSequence(3));



let n = 10;
let n1 = 0,
  n2 = 1,
  nextTerm;
  let res = []
for (let i = 0; i < n; i++) {
  // console.log(n1);
  res.push(n1)
  nextTerm = n1 + n2;
  n1 = n2;
  n2 = nextTerm;
}
console.log(res)
