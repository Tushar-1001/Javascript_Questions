// // Subarray with given sum or target sum.

// //Function to find a continuous sub-array which adds up to a given number.

let array = [1, 2, 3,-9, 7, 5 , -8, -10, -7];
let sum = -17;

// let targetSum = (array, sum) => {
//   let nums = [];

//   for (let i in array) {
//     let diff = sum - array[i];

//     if (array.includes(diff)) {
//       nums.push([array[i], diff]);
//       // break;
//     }
//   }

//   return nums;
// };

// console.log(targetSum(array, sum));


// Target sum.............

let hashTwoSum = (array, sum) => {
  let storageHash = {}
  let nums = []
  
  for(let i in array){
    let addend = sum - array[i]
      
      if (addend in storageHash){
          nums.push([addend, array[i]])
      }
      storageHash[array[i]] = i
    }
    console.log(storageHash)
  return nums

}


console.log(hashTwoSum(array,sum))