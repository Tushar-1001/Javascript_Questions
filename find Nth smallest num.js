let arr = [10, 6, 5, 4, -1, -10, -1, -10, 4]; //output 4
let k = 4;

function kthSmallest(arr, k) {
    
  if (arr.length < k) {
    return "Invalid Input";
  }

  let sortedArr = arr.sort((a, b) => a - b);

  let uniqueArr = [...new Set(sortedArr)];

  console.log(uniqueArr);

  return uniqueArr[k - 1];
}

console.log(kthSmallest(arr, k));
