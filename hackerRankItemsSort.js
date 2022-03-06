function itemsSort(arr){
    let obj = {}
    for(let i = 0; i < arr.length; i++){
        if(obj.hasOwnProperty(arr[i])){
            obj[arr[i]] += 1
        }else{
            obj[arr[i]] = 1            
        }
    }
    return (obj)

}

console.log(itemsSort([4,5,6,5,4,3]))