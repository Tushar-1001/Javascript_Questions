// //encrypt a string
// function encrypt(str) {
//   let newStr = "";
//   for (let i = 0; i < str.length; i++) {
//     newStr += String.fromCharCode(str.charCodeAt(i) + 25);
//   }
//   return newStr;
// }

// console.log(encrypt("hello"));

// //decrypt a string

// function decrypt(str) {
//   let newStr = "";
//   for (let i = 0; i < str.length; i++) {
//     newStr += String.fromCharCode(str.charCodeAt(i) - 25);
//   }
//   return newStr;
// }

// console.log(decrypt("~"));


// let arr = [ 'ij', 'ifmmp', 'ifmmp' ]

// let qw = arr.map(function decrypt(str) {
//   let newStr = "";
//   for (let i = 0; i < str.length; i++) {
//     newStr += String.fromCharCode(str.charCodeAt(i) - 1);
//   }
//   return newStr;
// })

// console.log(qw)


// let array = "!@#$%^&*()_+"
// let newArray = []
// for(let i = 0; i < array.length; i++) {
//  newArray.push(array.charCodeAt(i))
// }
// let newArraySum = newArray.reduce((a, b) => a + b)

// console.log(newArray)
// console.log(newArraySum)


let str = 'hello'

let encrypt = "";
for (let i = 0; i < str.length; i++) {
  encrypt += String.fromCharCode(str.charCodeAt(i) + 25);
}

console.log(encrypt)




// 1- intro

// 3 - what is purpose of javascript
// 4- node is single threaded or multi threaded ?
// 5- what is express ?
// 6 - what do you mean by API 
// 7 - told me to explain the url shortner project proccess
// 8 - in url shortner if identical url pass so change in short url or not?
// 9 - i done my project without using short_id package so they ask me for logic how to genrate code and Math.random like some function use case. all question related project ask me without opening my project. 
// 10 - at the last project question was told me to conclusion of url shortner
// 2- defference between var, let & const
// 12- write down the approach what are you using here in this question.


// 1. 2 DSA Problems count the number of repetative alphabets in a given string and sum of prices and totalling of it.
// 2.Purpose of JavaScript and in more detail.
// 3.NodeJs 
// 4.RestFul API's and their uses.
// 5.Short Url Project based questions
// 6.About AWS3
// 7.About Git Push ,Pull,Conflicts,Reset.