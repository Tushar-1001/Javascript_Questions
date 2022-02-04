function findNonRepeatingElementsfromArray(array){

    var result = [];
    var map = {};
    for(var i=0; i<array.length; i++){
        if(map[array[i]]){
            map[array[i]]++;
        }else{
            map[array[i]] = 1;
        }
    }

    for(var key in map){
        if(map[key] === 1){
            result.push(key);
        }
    }
    return result;
}

console.log(findNonRepeatingElementsfromArray([1,2,2]))