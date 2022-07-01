// let digits = [1,2,3]
// let digits = [4,3,2,1]
let digits = [9]
// let digits = [6, 1, 4, 5, 3, 9, 0, 1, 9, 5, 1, 8, 6, 7, 0, 5, 5, 4, 3];

var plusOne = function (digits) {
  let lastEle = digits.length - 1;
//   console.log(lastEle);
  if (lastEle == 9) {
    digits[lastEle] = 0;
    digits[lastEle - 1] += 1;
  } else {
    digits[lastEle] += 1;
  }

  return digits;
};
console.log(plusOne(digits));
