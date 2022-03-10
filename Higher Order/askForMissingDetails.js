// Coding Meetup #16 - Higher-Order Functions Series - Ask for missing details

let list = [
  {
    firstName: null,
    lastName: "I.",
    country: "Argentina",
    continent: "Americas",
    age: 35,
    language: "Java",
  },
  {
    firstName: "Lukas",
    lastName: "X.",
    country: "Croatia",
    continent: "Europe",
    age: 35,
    language: null,
  },
  {
    firstName: "Madison",
    lastName: "U.",
    country: "United States",
    continent: "Americas",
    age: 32,
    language: "Ruby",
  },
];

//Output....
//   [
//     { firstName: null, lastName: 'I.', country: 'Argentina', continent: 'Americas', age: 35, language: 'Java',
//     question: 'Hi, could you please provide your firstName.' },
//     { firstName: 'Lukas', lastName: 'X.', country: 'Croatia', continent: 'Europe', age: 35, language: null,
//     question: 'Hi, could you please provide your language.' }
//   ]

function askForMissingDetails(list) {
 
  let res = [];
  for (let i = 0; i < list.length; i++) {
    for (key in list[i]) {
      if (list[i][key] == null) {
        list[i].question = `Hi, could you please provide your ${key}.`;
        res.push(list[i]);
      }
    }
  }
  return res;
}

console.log(askForMissingDetails(list));








//Test cases ..............
// [ { firstName: null,
//     lastName: 'I.',
//     country: 'Argentina',
//     continent: 'Americas',
//     age: 35,
//     language: 'Java',
//     question: 'Hi, could you please provide your firstName' },
  
//     { firstName: 'Lukas',
//     lastName: 'X.',
//     country: 'Croatia',
//     continent: 'Europe',
//     age: 35,
//     language: null,
//     question: 'Hi, could you please provide your language' } ]
    
//     // to deeply equal 
    
//     [ { firstName: null,
//     lastName: 'I.',
//     country: 'Argentina',
//     continent: 'Americas',
//     age: 35,
//     language: 'Java',
//     question: 'Hi, could you please provide your firstName.' },

//   { firstName: 'Lukas',
//     lastName: 'X.',
//     country: 'Croatia',
//     continent: 'Europe',
//     age: 35,
//     language: null,
//     question: 'Hi, could you please provide your language.' } ]