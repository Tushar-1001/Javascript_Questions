// Coding Meetup #10 - Higher-Order Functions Series - Create usernames

let list = [
    { firstName: 'Emily', lastName: 'N.', country: 'Ireland', continent: 'Europe', age: 30, language: 'Ruby' },
    { firstName: 'Nor', lastName: 'E.', country: 'Malaysia', continent: 'Asia', age: 20, language: 'Clojure' },
    {firstName:"Harry",lastName:"K.",country:"Brazil",continent:"Americas",age:19,language:"Python"}
  ];


//Output........ 
//   [
//     { firstName: 'Emily', lastName: 'N.', country: 'Ireland', continent: 'Europe', age: 30, language: 'Ruby', username: 'emilyn1990' },
//     { firstName: 'Nor', lastName: 'E.', country: 'Malaysia', continent: 'Asia', age: 20, language: 'Clojure', username: 'nore2000' }
//   ]

function addUsername(list) {
  let addUsername = list.map(x => x.username = `${x.firstName.toLowerCase()}${x.lastName[0].toLowerCase()}${2020-x.age}`)
return list

  }

  console.log(addUsername(list))

//   list[0].lastName[0].toLowerCase()