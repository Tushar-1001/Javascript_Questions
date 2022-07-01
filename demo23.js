//generate fibonacci sequence

function generateFirstN(n) {
  let fibonacci = [0, 1];
  for (let i = 2; i < n; i++) {
    fibonacci[i] = fibonacci[i - 1] + fibonacci[i - 2];
  }
  return fibonacci;
}


console.log(generateFirstN(10));



//generate discount coupon

function generateDiscountCoupon(n) {
  let coupon = '';
  for (let i = 0; i < n; i++) {
    coupon += String.fromCharCode(Math.floor(Math.random() * 26) + 97);
  }
  return coupon;
}

console.log(generateDiscountCoupon(10));

//encrypt decryption string

function encrypt(str) {
  let encrypted = '';
  for (let i = 0; i < str.length; i++) {
    encrypted += String.fromCharCode(str.charCodeAt(i) + 20);
  }
  return encrypted;
}


console.log(encrypt('abc'));


//find the longest word in a string

function largestWord(str) {
  let words = str.split(' ');
  let largest = '';
  for (let i = 0; i < words.length; i++) {
    if (words[i].length > largest.length) {
      largest = words[i];
    }
  }
  return largest;
}

console.log(largestWord('hello world'));


//find a maximun frequency of a word in a string


function maxFrequency(str) {
  let words = str.split(' ');
  let max = 0;
  let maxWord = '';
  for (let i = 0; i < words.length; i++) {
    let count = 0;
    for (let j = 0; j < words.length; j++) {
      if (words[i] === words[j]) {
        count++;
      }
    }
    if (count > max) {
      max = count;
      maxWord = words[i];
    }
  }
  return maxWord;
}
console.log(maxFrequency('hello hello hellopopopop'));