// // Merge two sorted arrays
// // https://www.geeksforgeeks.org/merge-two-sorted-arrays-o1-extra-space/

// let arr1 = [1, 5, 9, 10, 15, 20];
// let arr2 = [2, 3, 8, 13];
// sortMerge = (arr1, arr2) => {
//   let resArr = [...arr1, ...arr2];
//   let sortArr = resArr.sort((a, b) => a - b);
//   let lenArr1 = arr1.length;
//   arr1 = sortArr.splice(0,lenArr1)
//   arr2 = sortArr;
//  console.log(arr1);
//  console.log(arr2);
//  return ;
// };
// console.log(sortMerge(arr1, arr2));

// var a = [100, 180, 260, 310, 40, 535, 695];
// var a = [100, 90, 60, 80, 50];

// for(let i = 0; i < a.length ; i++){
//     if(a[i] < a[i+1]){
//         console.log('no')

//     }
//     console.log('yes')

// }

let a1 = [1, 2, 3];
let a2 = [1, 2, 3];
let value = false;
for (i = 0; i < a1.length; i++) {
  if (a1[i] == a2[i]) {
    value = false;
  } else {
    value = true;
    break
  }
}
if (value) {
  console.log("no");
} else {
  console.log("yes");
}







// 4 5 8


// 4 5 8

