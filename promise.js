// // //How to write a promise function?

// // function sum(a,b){
// //     let x = a+b
// //       return new Promise((resolve, reject) => {
// //      if(x>5) {
// //         resolve(console.log(x))
// //      } else {
// //         reject(console.log('err'));
// //      }
// //   });
// //   }
// //   sum(1,5)

// // let promise = new Promise(function(resolve, reject) {
// //    const x = "hello";
// //    const y = "hello"
// //    if(x === y) {
// //       resolve();
// //    } else {
// //       reject();
// //    }
// //    });

// //    promise.
// //       then(function () {
// //          console.log('Success');
// //       }).
// //       catch(function () {
// //          console.log('Error');
// //       });

// const promise = new Promise((resolve, reject) => {
//   const x = "qwe";
//   const y = "qwe";
//   if (x === y) {
//     resolve();
//   } else {
//     reject();
//   }
// });

// promise
//   .then(() => {
//     console.log("success");
//   })
//   .catch(() => {
//     console.log("error");
//   });

// const arr = [
//   { name: "amit" },

//   { name: "abhishek" },

//   { name: "ABHIshek" },

//   { name: "AMIT" },

//   { name: "anil" },
// ];


// let arrValues = arr.map(x=> x.name.toLowerCase())

// console.log([...new Set(arrValues)])



// let arr = "hello";
 
// console.log(arr.split("").reverse().join(""));
 
// let numArr = [1, 2, 3, 4, 5];
 
// console.log(numArr.reverse());
 
// let arrOfStr = ["hello", "world"];
 
// let qw = arrOfStr.map((x) => x.split("").reverse().join());
 
// console.log(qw);



function getMinMax(arr,n){
  //code here
  
  // let min = Math.min(...arr)
  // let max = Math.max(...arr)
  // return `min = ${min} , max = ${max}`

  return `min = ${Math.min(...arr)} , max = ${Math.max(...arr)}`
}

console.log(getMinMax([3, 2, 1, 56, 10000, 167] , 6))


