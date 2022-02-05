//Next bigger number with the same digits
function nextBigger(n) {
    let num = n.toString().split('').sort((a, b) => b - a)
    return (num.join(''))
}

console.log(nextBigger(2017));





// var list1 = [
//     { firstName: 'Emily', lastName: 'N.', country: 'Ireland', continent: 'Europe', age: 30, language: 'Ruby' },
//     { firstName: 'Nor', lastName: 'E.', country: 'Malaysia', continent: 'Asia', age: 20, language: 'Clojure' }
//   ];


  

// console.log(list1.map(x =>list1.x.username = 'qwerty') )








