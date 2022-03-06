// find common elements from three arrays using for loop


let arr1 = [1, 2, 3, 4, 5];
let arr2 = [1, 2, 3];
let arr3 = [2, 4 , 3];


function findCommon(arr1, arr2, arr3) {
    let res = [];
    for (let i = 0; i < arr1.length; i++) {
      for (let j = 0; j < arr2.length; j++) {
        for (let k = 0; k < arr3.length; k++) {
          if (arr1[i] == arr2[j] && arr2[j] == arr3[k]) {
            res.push(arr1[i]);
          }
        }
      }
    }
    return res;
  }
  
  console.log(findCommon(arr1, arr2, arr3));