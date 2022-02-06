function sort(Arr) {
 
    for (var i = 1; i < Arr.length; i++)
        for (var j = 0; j < i; j++)
            if (Arr[i] < Arr[j]) {
                var x = Arr[i];
                Arr[i] = Arr[j];
                Arr[j] = x;
            }
 
    return Arr
}
let arr = [2,6,1,8,3,4,5,7];
                 
console.log(sort(arr))


   
