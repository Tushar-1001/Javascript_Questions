// Coding Meetup #9 - Higher-Order Functions Series - Is the meetup age-diverse?

// Your task is to return:

// true if developers from all of the following age groups have signed up: teens, twenties, thirties, forties, fifties, sixties, seventies, eighties, nineties, centenarian (at least 100 years young).
// false otherwise.

// let list = [
//   {
//     firstName: "Harry",
//     lastName: "K.",
//     country: "Brazil",
//     continent: "Americas",
//     age: 29,
//     language: "Python",
//   },
//   {
//     firstName: "Kseniya",
//     lastName: "T.",
//     country: "Belarus",
//     continent: "Europe",
//     age: 19,
//     language: "JavaScript",
//   },
//   {
//     firstName: "Jing",
//     lastName: "X.",
//     country: "China",
//     continent: "Asia",
//     age: 39,
//     language: "Ruby",
//   },
//   {
//     firstName: "Noa",
//     lastName: "A.",
//     country: "Israel",
//     continent: "Asia",
//     age: 40,
//     language: "Ruby",
//   },
//   {
//     firstName: "Andrei",
//     lastName: "E.",
//     country: "Romania",
//     continent: "Europe",
//     age: 60,
//     language: "C",
//   },
//   {
//     firstName: "Maria",
//     lastName: "S.",
//     country: "Peru",
//     continent: "Americas",
//     age: 59,
//     language: "C",
//   },
//   {
//     firstName: "Lukas",
//     lastName: "X.",
//     country: "Croatia",
//     continent: "Europe",
//     age: 75,
//     language: "Python",
//   },
//   {
//     firstName: "Chloe",
//     lastName: "K.",
//     country: "Guernsey",
//     continent: "Europe",
//     age: 88,
//     language: "Ruby",
//   },
//   {
//     firstName: "Viktoria",
//     lastName: "W.",
//     country: "Bulgaria",
//     continent: "Europe",
//     age: 98,
//     language: "PHP",
//   },
//   {
//     firstName: "Piotr",
//     lastName: "B.",
//     country: "Poland",
//     continent: "Europe",
//     age: 128,
//     language: "JavaScript",
//   },
// ];


const list = [
    { firstName: 'Kseniya', lastName: 'T.', country: 'Belarus', continent: 'Europe', age: 29, language: 'Ruby' },
    { firstName: 'Amar', lastName: 'V.', country: 'Bosnia and Herzegovina', continent: 'Europe', age: 32, language: 'Ruby' },
  ];

//   const list = [
//     { firstName: 'Sofia', lastName: 'P.', country: 'Italy', continent: 'Europe', age: 41, language: 'Clojure' },
//     { firstName: 'Jayden', lastName: 'P.', country: 'Jamaica', continent: 'Americas', age: 42, language: 'JavaScript' },
//     { firstName: 'Sou', lastName: 'B.', country: 'Japan', continent: 'Asia', age: 43, language: 'Python' },
//     { firstName: 'Rimas', lastName: 'C.', country: 'Jordan', continent: 'Asia', age: 44, language: 'Java' }
//   ];


function isAgeDiverse(list) {
//   let agesArr = list.map((x) => x.age);

const check = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
list.map(v => {
  const age = v.age;
  age > 9 && age < 20 ? (check[0] = 1) : 0;
  age > 19 && age < 30 ? (check[1] = 1) : 0;
  age > 29 && age < 40 ? (check[2] = 1) : 0;
  age > 39 && age < 50 ? (check[3] = 1) : 0;
  age > 49 && age < 60 ? (check[4] = 1) : 0;
  age > 59 && age < 70 ? (check[5] = 1) : 0;
  age > 69 && age < 80 ? (check[6] = 1) : 0;
  age > 79 && age < 90 ? (check[7] = 1) : 0;
  age > 89 && age < 100 ? (check[8] = 1) : 0;
  age > 100 ? (check[9] = 1) : 0;
});
return check.every(v => v === 1);


}

console.log(isAgeDiverse(list))
