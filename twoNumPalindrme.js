//inp 141 + 141 = 282

// 1271 + 1721 = 2992

let num = 9985;

function palindrome(num) {
  let numReverse = num.toString().split("").map(Number).reverse().join("");

  let numRevToNum = Number(numReverse.split("").map(Number).join(""));

  let sum = num + numRevToNum;
  console.log(sum , 'sum');

  let revSum = Number(sum.toString().split("").map(Number).reverse().join(''));
  console.log(revSum, "revSum");
//   console.log(typeof revSum)


  if (revSum === sum) {
    return revSum;
  } else {
    return "Not a palindrome";
  }

}

console.log(palindrome(num));

// console.log(num % 10)
