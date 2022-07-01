//Print n numbers after every one second

let n = 10;
function printNum(n) {
  for (let i = 1; i <= n; i++) {
    setTimeout(() => {
      console.log(i);
    }, i * 1000);
  }
  return "counting";
}

console.log(printNum(n));
