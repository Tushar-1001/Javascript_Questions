//Return first pair whoose sum is zero.

//Array must be sorted for this solution to work.

let arr = [-5, 4, -3, -2, 0, 2, -4, 6, 8];


function findPair(arr){
    let left = 0;
    let right = arr.length - 1 
    
    while(left < right){
        let sum = arr[left] + arr[right]
        if(sum == 0){
            return [arr[left] , arr[right]]
        }else if( sum > 0){
            right --
        }else{
            left ++
        }
    }
}

console.log(findPair(arr))