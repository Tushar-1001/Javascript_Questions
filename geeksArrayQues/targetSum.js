// Subarray with given sum or target sum.

//Function to find a continuous sub-array which adds up to a given number.

// let arr = [1,2,3,7,5]
// let targetSum = 10
// let res = []
// function subarraySum(arr, targetSum){
//     for (let i = 0; i < arr.length; i++) {
//         if(arr[i] + arr[i+1] == targetSum){
//             res.push(arr[i] ,arr[ i+1])
//         }

//     }return res
// }

// console.log(subarraySum(arr,  targetSum))

// console.log(arr[arr.length-1])

let array = [1, 2, 3,-9, 7, 5 , -8];
let sum = -17;

let targetSum = (array, sum) => {
  let nums = [];

  for (let i in array) {
    let diff = sum - array[i];

    if (array.includes(diff)) {
      nums.push(array[i], diff);
      break;
    }
  }

  return nums;
};

console.log(targetSum(array, sum));
