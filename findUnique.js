// let arr = [1, 2, 2, 2, 3, 5];

// let output = [];
// let obj = {};

// for (let i = 0; i < arr.length; i++) {
//   if (obj.hasOwnProperty(arr[i])) {
//     obj[arr[i]] += 1;
//   } else {
//     obj[arr[i]] = 1;
//   }
// }

// let newObj = Object.entries(obj);

// for (let i = 0; i < newObj.length; i++) {
//   if (newObj[i][1] == 1) {
//     // console.log(newObj[i][0]);
//     output.push(newObj[i][0])
//   }
// }
// console.log(output.map(Number) , 'Unique values')

// console.log(obj);
// console.log(newObj);


//degree of an array
function degree(arr) {
  let max = 0;
  let obj = {};
  for (let i = 0; i < arr.length; i++) {
    if (obj.hasOwnProperty(arr[i])) {
      obj[arr[i]] += 1;
    } else {
      obj[arr[i]] = 1;
    }
  }
  let newObj = Object.entries(obj);
  for (let i = 0; i < newObj.length; i++) {
    if (newObj[i][1] > max) {
      max = newObj[i][1];
    }
  }
  return max;
}

console.log(degree([1,2,1,3,2]));


//alladin and his carpet
function alladin(arr) {
  let obj = {};
  let output = [];
  for (let i = 0; i < arr.length; i++) {
    if (obj.hasOwnProperty(arr[i])) {
      obj[arr[i]] += 1;
    } else {
      obj[arr[i]] = 1;
    }
  }
  let newObj = Object.entries(obj);
  for (let i = 0; i < newObj.length; i++) {
    if (newObj[i][1] > 1) {
      // console.log(newObj[i][0]);
      output.push(newObj[i][0])
    }
  }
  return output;
}