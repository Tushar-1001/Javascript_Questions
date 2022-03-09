// // Write a function to find common the element from three given array of integers.

// const arr1 = [2,1,4,3]
// const arr2 = [4,3,2]
// const arr3 = [4,2]

// const first = [2, 6, 7, 1, 7, 8, 4, 3];
// const second = [5, ,7, 2, 2, 1, 3];
// const third = [1, 56, 345, 6, 54, 2, 68, 85, 3];

// function findCommon(arr1, arr2){

// let obj = {}

// if()

// }

// console.log(findCommon(arr1, arr2))


let first = [ 1, 2, 3 ];
let second = [ 2, 3, 4, 5 ];
let third = [5, ,7, 2, 2, 1, 3];


let common = first.filter(x => second.indexOf(x) !== -1)
console.log( common);


let common2 = common.filter(x => third.indexOf(x) !== -1)
console.log( common2);


