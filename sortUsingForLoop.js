//Sort using for loop

let arr = [1, 5, 4, 3, 2];

// for (let i = 1; i < arr.length; i++) {
//   for (let j = 0; j < i; j++) {
//     if (arr[i] < arr[j]) {
//       let x = arr[i];
//       arr[i] = arr[j];
//       arr[j] = x;
//     }
//   }
// }

// console.log(arr);

for (let i = 1; i < arr.length; i++) {
  for (let j = 0; j < i; j++) {
    if (arr[i] < arr[j]) {
      [arr[i], arr[j]] = [arr[j], arr[i]];
    }
  }
}

console.log(arr);

function sortArrays(arr) {
  let length = arr.length;

  for (let j = 0; j < length - 1; j++) {
    if (arr[j] > arr[j + 1]) {
      let temp = arr[j];
      arr[j] = arr[j + 1];
      arr[j + 1] = temp;

      j = -1;
    }
  }

  return arr;
}

let arr1 = [1, 2, 99, 9, 8, 7, 6, 0, 5, 4, 3];

// console.log(sortArrays(arr1))

let arr2 = [5,6,2,1,3,4];

for (let i = 0; i < arr2.length; i++) {
  if (arr2[i] > arr2[i + 1]) {
    let temp = arr2[i];
    arr2[i] = arr2[i + 1];
    arr2[i + 1] = temp;
    i = -1;
  }
}
console.log(arr2);




