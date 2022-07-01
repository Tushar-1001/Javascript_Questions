// Count pairs with given sum

// let array = [1, 5, 7, 1]
// let sum = 6



// function countPairs(array){




// }


// console.log(countPairs(array))


// var arr = [ 1, 5, 7, -1, 5 ];
// var n = arr.length;
// var sum = 6;

let arr = [1, 5, 5, 5, 5, 7]
let n = arr.length
let k = 10

	function getPairsCount(arr , n , k) {
		var m = new Map();
		var count = 0;
		for (var i = 0; i < n; i++) {
			if (m.has(k - arr[i])) {
				count += m.get(k - arr[i]);
			}
			if (m.has(arr[i])) {
				m.set(arr[i], m.get(arr[i]) + 1);
			} else {
				m.set(arr[i], 1);
			}
		}
        console.log(m)
		return count;
	}

	
		console.log(getPairsCount(arr, n, k)) ;



// let array = [1, 2, 3,-9, 7, 5 , -8];
// let sum = -17;

// let targetSum = (array, sum) => {
//   let nums = [];

//   for (let i in array) {
//     let diff = sum - array[i];

//     if (array.includes(diff)) {
//       nums.push([array[i], diff]);
      
//     }
//   }

//   return nums;
// };

// console.log(targetSum(array, sum));














// let array = [1, 2, 3,-9, 7, 5 , -8];
// let sum = -17;



