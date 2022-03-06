//calculate maxsum of a given array
function maxSum(arr){
   let sortArr = arr.sort((a,b)=>b-a);   
       return sortArr[0]+ sortArr[1];   
}

console.log(maxSum([1,2,3,4,5,9,10]));



