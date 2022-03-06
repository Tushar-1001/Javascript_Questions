let arr = [10, 20, 15, 2, 23, 90, 67]

for (let i = 1; i < arr.length-2; i++) {
   
    if(arr[i] > arr[i+1] && arr[i] > arr[i-1]){
        console.log(arr[i])
    }
}