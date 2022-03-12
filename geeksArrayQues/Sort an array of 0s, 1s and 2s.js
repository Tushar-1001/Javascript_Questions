// Sort an array of 0s, 1s and 2s


// let arr = [0, 2, 1, 2, 0, 2, 1, 2, 0, 1 ,2 ]
let arr = [0, 2, 1, 2, 0]

function sortArr(arr){
    let c0 = 0
    let c1 = 0
    let c2 = 0
    for (let i = 0; i < arr.length; i++) {
        if(arr[i] == 0){
            c0 ++
        }else if(arr[i] == 1){
            c1 ++
        }else if(arr[i] == 2){
            c2 ++
        }
    }
    let arr1 = []
    for (let i = 0; i < c0; i++) {
        arr1.push(0)
    }
    for (let i = 0; i < c1; i++) {
        arr1.push(1)
    }
    for (let i = 0; i < c2; i++) {
        arr1.push(2)
    }
    return arr1
}

console.log(sortArr(arr))

