// Subarray with given sum or target sum.

//Function to find a continuous sub-array which adds up to a given number.

let arr = [1,2,3,7,5]
let s = 10
let res = []
function subarraySum(arr, s){
    for (let i = 0; i < arr.length; i++) {
        if(arr[i] + arr[i+1] == s){
            res.push(arr[i] ,arr[ i+1])
        }
        
    }return res
}


console.log(subarraySum(arr,  s))





