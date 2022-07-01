



// let sortArr = arr.sort();

// console.log(sortArr);

// let lastEle = sortArr[sortArr.length - 1];
// let firstEle = sortArr[0];

// console.log(lastEle, firstEle);

// let res = "";

// for (let i = 0; i < lastEle.length; i++) {
//   if (lastEle[i] == firstEle[i]) {
//     res += lastEle[i];
//     //    console.log(lastEle[i])
//     //    console.log(firstEle[i])
//   } else if (lastEle[i] != firstEle[i]) {
//     console.log(-1);
//     break;
//   }
// }
// console.log(res);


let arr = ["geeksforgeeks", "geeks", "geek", "geezer"];
// let arr = ['hello', 'geeks']


function longestCommonPrefix(arr) {
  let sortedArr = arr.sort();
  console.log(sortedArr);

  let lastEle = sortedArr[sortedArr.length - 1];
  let firstEle = sortedArr[0];
  let res = "";

  for (let i = 0; i < lastEle.length; i++) {
    if (lastEle[i] == firstEle[i]) {
      res += lastEle[i];
    } else if (lastEle[0] != firstEle[0]) {
      return -1;
    }
  }
  return res
}

console.log(longestCommonPrefix(arr));
