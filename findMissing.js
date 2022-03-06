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

// let obj = {a:1 , b:2}

// console.table(obj)

const candidates = [
  {
    name: "user1",
    skills: ["reactjs", "redux", "nodejs", "mongodb"],
  },
  {
    name: "user2",
    skills: ["reactjs", "redux", "nodejs"],
  },
  {
    name: "user3",
    skills: ["java", "redis", "kafka"],
  },
];

const required_skills = ["reactjs", "redux"];

function findUser(arr, reqSk) {
  let res = [];
  for (j in reqSk) {
    let data = arr.filter((x, i) => x.skills[i] == reqSk[j]);
    res.push(data[0]);
  }

  let skillsLen = res.map((x) => x.skills.length);
  console.log(skillsLen);

  let indexOFMax = skillsLen.indexOf(Math.max(...skillsLen));

  return res[indexOFMax]["name"];


}

console.log(findUser(candidates, required_skills));


//replace 0 with 5
let num = 1004
function convertFive(num){

  let numStr =  num.toString().split('').map(Number)
  console.log(numStr)


  for (let i = 0; i < numStr.length; i++) {
    if(numStr[i] == 0){
      numStr[i] = 5
    }
    
  }
  return numStr.join('')
  
}

console.log(convertFive(num))