//reverse array using for loop

let arr = [1, 6, 4, 3, 2, 8];

//ouytput = [8,2,3,4,6,1]

function reverseArr(arr) {
  for (let i = 0; i < arr.length / 2; i++) {
    let temp = arr[i];

    arr[i] = arr[arr.length - 1 - i];

    // console.log(arr[(arr.length-1) - i])

    arr[arr.length - 1 - i] = temp;
  }
  return arr;
}
console.log(reverseArr(arr));
