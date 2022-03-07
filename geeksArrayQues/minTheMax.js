// Minimize the maximum difference between the heights


// let arr = [1, 10, 14, 14, 14, 15]
// function minTheMaxDiff(arr,k) {
    
// }

// console.log(minTheMaxDiff(arr,k))


// User function Template
function getMinDiff(arr,n,k)
{
	arr.sort((a,b) => (a-b))
	let ans = arr[n - 1] - arr[0]; // Maximum possible height difference
    console.log(ans)

	let tempmin, tempmax;
	tempmin = arr[0];
	tempmax = arr[n - 1];

	for (let i = 1; i < n; i++) {
		tempmin= Math.min(arr[0] + k,arr[i] - k); 
												
		tempmax = Math.max(arr[i - 1] + k, arr[n - 1] - k); 
														
		ans = Math.min(ans, tempmax - tempmin);
	}
	return ans;
}


let k = 6, n = 6;
let arr = [ 7, 4, 8, 8, 8, 9 ];
let ans = getMinDiff(arr, n, k);
console.log(ans);
