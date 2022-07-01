// Write a program to cyclically rotate an array by one.........

let arr = [1, 2, 3, 4, 6];


function rotateArray(arr) {
  let n = arr.length;
  let x = arr[n - 1];

  for (let i = n - 1; i > 0; i--) {
    arr[i] = arr[i - 1];
  }

  console.log(x)
  console.log(arr[0])
  arr[0] = x;

  return arr;
}
console.log(rotateArray(arr));


















// Find the missing integer...............

// let arr = [1, 2, 3, 4, 6];

// function findMissingNum(arr){
//     let arrSum = 0
//     for (let i = 0; i < arr.length; i++) {
//         arrSum += arr[i]
//     }
//     let n = Math.max(...arr)
//     let totalSum = n * (n+1)/2
//     return totalSum - arrSum
// }

// console.log(findMissingNum(arr))


// let arr = [-1, 2, -3, 4, -5, 6, 8, -7, 11, -12 ];
// function rearrange(arr) {
//   let p = [];
//   let n = [];
//   let res = [];

//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] > 0) {
//       p.push(arr[i]);
//     } else {
//       n.push(arr[i]);
//     }
//   }
//   console.log(p);
//   console.log(n);

//   for (let i = 0 , j = 0; i < p.length , j < n.length ; i++ , j++) {
//     res.push(p[i]);
//     res.push(n[j]);
  
//   }
//   return res;
// }
// console.log(rearrange(arr));



// let arr = [33, 34, 35, 37, 38]
// // let arr = [1, 2, 3, 4, 6];

//     let len = arr.length;
//     let total = 0;
//     for (let i in arr) {
//         total = total + arr[i];
//     }
//     firstDigit = arr[0]
//     let lastDigit = arr.pop()
//     consecutiveSum = (len + 1) * (firstDigit + lastDigit) / 2;
//     let missingNumber = consecutiveSum - total;
//     console.log(missingNumber)

// Find duplicates in an array..........

// let arr = [1, 2, 3, 4, 6, 6 , 7,7,7];

// function findDuplicates(arr) {
//   let obj = {};
//   let res = []

//   for (let i = 0; i < arr.length; i++) {
//     if (obj.hasOwnProperty(arr[i])) {
//       obj[arr[i]] += 1;
//     } else {
//       obj[arr[i]] = 1;
//     }
//   }

//   for(i in obj){
//       if(obj[i] > 1){
//           res.push(i)
//       }
//   }
//   return res

// }

// console.log(findDuplicates(arr));



// find common elements from three arrays using for loop
// function findCommon(arr1, arr2, arr3) {
//     let res = [];
//     for (let i = 0; i < arr1.length; i++) {
//       for (let j = 0; j < arr2.length; j++) {
//         for (let k = 0; k < arr3.length; k++) {
//           if (arr1[i] == arr2[j] && arr2[j] == arr3[k]) {
//             res.push(arr1[i]);
//           }
//         }
//       }
//     }
//     return res;
//   }
  
//   console.log(findCommon(arr1, arr2, arr3));

// Find common elements in three sorted arrays.
// let arr1 = [1, 2, 3, 4, 5];
// let arr2 = [1, 2, 3];
// let arr3 = [2, 4 , 3];

// function findCommon(arr1, arr2,arr3) {

//   let filteredArr = arr1.filter((x) => arr2.includes(x));

//   console.log(filteredArr);


// return filteredArr + findCommon(filteredArr, arr3);
  
// }

// console.log(findCommon(arr1, arr2,arr3));


// let arr1 = [1, 2, 3, 4, 5];
// let arr2 = [1, 2, 3];
// let arr3 = [2, 4 , 3];

// function findCommon(arr1, arr2,arr3) {
// let arr = [arr1,arr2,arr3]

// for (let i = 0; i < arr.length-1; i++) {
    
//    let data = arr[i].filter((x) => arr[i+1].includes(x));

//    return data
// }

//   let filteredArr = arr1.filter((x) => arr2.includes(x));

//   console.log(filteredArr);


      

// return filteredArr + findCommon(filteredArr, arr3);
  
// }

// console.log(findCommon(arr1, arr2,arr3));






// Rearrange the array in alternating positive and negative items.
