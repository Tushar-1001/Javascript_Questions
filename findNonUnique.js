// let arr = [1,2,4,4,5,2] //op - 2 4 4 2
let arr = ['hi','hi', 'joy'] //op - 2 4 4 2


//without split & reverse, reverse a string

let obj = {}
let output = []

for(let i = 0; i<arr.length; i++){
    if(obj.hasOwnProperty(arr[i])){
        obj[arr[i]] += 1
    }
    else{
        obj[arr[i]] = 1
    }
}
console.log(obj)

for(let i in obj){
    
    if(obj[i] > 1){
        output.push(i)
    }
}
console.log(output)
