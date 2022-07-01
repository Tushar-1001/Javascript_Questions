//Find uniques or remove duplicates from an array using hashing or without using any inbuilt method.

function findnique(arr) {
  let obj = {};
  let res = [];

  for (let i = 0; i < arr.length; i++) {
    if (obj[arr[i]]) {
      continue;
    } else {
      obj[arr[i]] = true;
      res.push(arr[i]);
    }
}
  console.log(obj)
  return res;
}
// let arr = [1, 2, 1, 3, 2, 5];
 let arr = [1, 1, 2, 3, 4, 4, 5];

console.log(findnique(arr));

console.log('---------------------------------   ')

function removeDuplicates(arr){
  let obj = {}
  let res = []

  for (const i of arr) {
    if(obj[i]) continue
    else obj[i] = true 
    res.push(i)
  }
  console.log(obj)
  return res
}


console.log(removeDuplicates(arr))