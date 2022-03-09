// Write a multiply function without using * operator and loops

let num1 = 5;
let num2 = 4;

function multiply(num1, num2) {
  if (num1 == 0 || num2 == 0) {
    return 0;
  } else {
    return num1 + multiply(num1, num2 - 1);
  }
}

console.log(multiply(num1, num2));

