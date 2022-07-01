// Given an array Arr[] of N integers. Find the contiguous sub-array(containing at least one number) which has the maximum sum and return its sum

// Kadane's Algorithm

// let arr = [-1,-2,-3,-4 ]
// let arr = [1, 2, 3, -2, 5];
let arr = [-2, -3, 4, -1, -2, 1, 5, -3]

function maxSubArray(arr) {
  if (arr.length == 0) {
    return 0;
  }

  let max = arr[0];
  for (let i = 1; i < arr.length; i++) {
    if (arr[i - 1] > 0) {
      arr[i] += arr[i - 1];
      console.log(arr[i])
    }
    max = Math.max(arr[i], max);
  
  }
  return max;
}

console.log(maxSubArray(arr));






