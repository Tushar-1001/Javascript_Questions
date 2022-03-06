function findNonRepeatingElementsfromArray(array){

    var result = [];
    var obj = {};
    for(let i=0; i<array.length; i++){
        if(obj[array[i]]){
            obj[array[i]]++;
        }else{
            obj[array[i]] = 1;
        }
    }
    console.log(obj)
   

    for(let key in obj){
        if(obj[key] === 1){
            result.push(key);
        }
    }
    return result;
}

console.log(findNonRepeatingElementsfromArray([1,2,2,2,3]))