// let arr =  [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75, 76, 77, 78, 79, 80, 81, 82, 83, 84, 85, 86, 87, 88, 89, 90, 91, 92, 93, 94, 95, 96, 97, 98, 99, 100];

// function findMissingNum(arr) {
//   let arrSum = 0;
//   for (let i = 0; i < arr.length; i++) {
//     arrSum += arr[i];
//   }
//   let n = Math.max(...arr);
//   let totalSum = (n * (n + 1)) / 2;
//   return totalSum - arrSum;
// }

// console.log(findMissingNum(arr));

//------------------------------------------------------------------------

// let arr = [1, 2, 3, 6,8];
// let arr = [3, 2, 1, 8, 6];
let arr = [32, 35 ,38 , 37, 38,38];
// let arr = [1, 1, 2, 3, 5, 5, 7, 9, 9, 9];
// let arr = [0,1];


function findMissingNumbers(arr) {
  let res = [];
  for (let i = Math.min(...arr); i <= Math.max(...arr); i++) {
    if (arr.indexOf(i) < 0) res.push(i);
  }

  return res;
}

console.log(findMissingNumbers(arr));

//------------------------------------------------------------------------















//------------------------------------------------------------------------




// let cars = [
//   [
//     {
//       model : 'BMW',
//       color: "purple",
//     },
//     {
//       model : 'Audi',
//       color: "red",
//     },
//   ],
//   [
//     {
//       model : 'Mercedes',
//       color: "blue",
//     },
//     {
//       model : 'Ferrari',
//       color: "yellow",
//     },
//   ],
// ];

// console.log(cars[0][1].model) //output - Audi
// console.log(cars[1][0].color) //output - blue

// const candidates = [
//   {
//     name: "user1",
//     skills: ["reactjs", "redux", "nodejs", "mongodb"],
//   },
//   {
//     name: "user2",
//     skills: ["reactjs", "redux", "nodejs"],
//   },
//   {
//     name: "user3",
//     skills: ["java", "redis", "kafka"],
//   },
// ];

// const required_skills = ["reactjs", "redux"];

// function findUser(arr, reqSk) {
//   let res = [];
//   for (j in reqSk) {
//     let data = arr.filter((x, i) => x.skills[i] == reqSk[j]);
//     res.push(data[0]);
//   }

//   let skillsLen = res.map((x) => x.skills.length);
//   console.log(skillsLen);

//   let indexOFMax = skillsLen.indexOf(Math.max(...skillsLen));

//   return res[indexOFMax]["name"];

// }

// console.log(findUser(candidates, required_skills));

// //replace 0 with 5
// let num = 1004
// function convertFive(num){

//   let numStr =  num.toString().split('').map(Number)
//   console.log(numStr)

//   for (let i = 0; i < numStr.length; i++) {
//     if(numStr[i] == 0){
//       numStr[i] = 5
//     }

//   }
//   return numStr.join('')

// }

// console.log(convertFive(num))
