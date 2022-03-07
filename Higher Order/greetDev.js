// Coding Meetup #2 - Higher-Order Functions Series - Greet developers

let list = [
    { firstName: 'Sofia', lastName: 'I.', country: 'Argentina', continent: 'Americas', age: 35, language: 'Java' },
    { firstName: 'Lukas', lastName: 'X.', country: 'Croatia', continent: 'Europe', age: 35, language: 'Python' },
    { firstName: 'Madison', lastName: 'U.', country: 'United States', continent: 'Americas', age: 32, language: 'Ruby' } 
  ];

//   Your function should return the following array:

//   [
//     { firstName: 'Sofia', lastName: 'I.', country: 'Argentina', continent: 'Americas', age: 35, language: 'Java',
//       greeting: 'Hi Sofia, what do you like the most about Java?'
//     },
//     { firstName: 'Lukas', lastName: 'X.', country: 'Croatia', continent: 'Europe', age: 35, language: 'Python',
//       greeting: 'Hi Lukas, what do you like the most about Python?'
//     },
//     { firstName: 'Madison', lastName: 'U.', country: 'United States', continent: 'Americas', age: 32, language: 'Ruby',
//       greeting: 'Hi Madison, what do you like the most about Ruby?'
//     } 
//   ];


function greetDev(list){

list.map(x => x['greeting'] = `Hi ${x.firstName}, what do you like the most about ${x.language}?`)

 return list
}

console.log(greetDev(list))