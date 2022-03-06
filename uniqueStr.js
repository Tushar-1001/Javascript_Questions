// non unique string in an array
let arr1 = [ 'hi', 'hi', 'hello','Hello', 'hi' , 'bye' ]
let arr = arr1.map(x=>x.toLowerCase())

function uniqueStr(arr) {
    let obj = {}
    let output = []
    for (let i = 0; i < arr.length; i++) {
        if (obj.hasOwnProperty(arr[i])) {
        obj[arr[i]] += 1
        } else {
        obj[arr[i]] = 1
        }
        
    }
    console.log(obj)
   
    let newObj = Object.entries(obj);
    console.log(newObj)


    for (let i = 0; i < newObj.length; i++) {
      if (newObj[i][1] > 1) {
        // console.log(newObj[i][0]);
        output.push(newObj[i][0])
      }
    } 
    return output
    }

    console.log(uniqueStr(arr))
