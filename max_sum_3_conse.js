// let arr = [1, 17, 7, 33, 73, 62, 777, 0, 12];
let arr = [1, 2, 3, 2, 0, 5, 1, 6, 0, 1];

//max sum of three cosecutive elements

function maxSum(arr) {
  let res = [];
  let maxSum = 0;
  for (let i = 0; i <= arr.length - 3; i++) {
    let sum = 0;
    sum = sum + arr[i] + arr[i + 1] + arr[i + 2];

    maxSum = sum;
    res.push(maxSum);
    // console.log(maxSum, "max");
  }
  return Math.max(...res);
}

console.log(maxSum(arr));
