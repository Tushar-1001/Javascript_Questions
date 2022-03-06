let arr = "hello";

console.log(arr.split("").reverse().join(""));

let numArr = [1, 2, 3, 4, 5];

console.log(numArr.reverse());

let arrOfStr = ["hello", "world"];

let qw = arrOfStr.map((x) => x.split("").reverse().join());

console.log(qw);
