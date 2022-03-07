// Coding Meetup #5 - Higher-Order Functions Series - Prepare the count of languages

let list = [
    { firstName: 'Noah', lastName: 'M.', country: 'Switzerland', continent: 'Europe', age: 19, language: 'C' },
    { firstName: 'Anna', lastName: 'R.', country: 'Liechtenstein', continent: 'Europe', age: 52, language: 'JavaScript' },
    { firstName: 'Ramon', lastName: 'R.', country: 'Paraguay', continent: 'Americas', age: 29, language: 'Ruby' },
    { firstName: 'George', lastName: 'B.', country: 'England', continent: 'Europe', age: 81, language: 'C' },
  ];

// Output -  { C: 2, JavaScript: 1, Ruby: 1 }



function countLang(list){
    let obj = {}

    for (let i = 0; i < list.length; i++) {
       if(obj.hasOwnProperty(list[i].language)){
           obj[list[i].language] += 1
       }else{
        obj[list[i].language] = 1
       }
        
    }
    return obj


}

console.log(countLang(list))