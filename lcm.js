//find lcm of two numbers
function lcm(a, b) {
  // let min = (a > b) ? b : a;
  let min = Math.min(a, b);

  for (var i = min; i <= a * b; i++) {
    if (i % a == 0 && i % b == 0) {
      break;
    }
  }
  return i;
}

console.log(lcm(15, 20));




