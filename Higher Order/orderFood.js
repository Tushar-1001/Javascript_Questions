// Coding Meetup #14 - Higher-Order Functions Series - Order the food

// Your task is to return an object which includes the count of food options selected by the developers on the meetup sign-up form..

let list = [
  {
    firstName: "Noah",
    lastName: "M.",
    country: "Switzerland",
    continent: "Europe",
    age: 19,
    language: "C",
    meal: "vegetarian",
  },
  {
    firstName: "Anna",
    lastName: "R.",
    country: "Liechtenstein",
    continent: "Europe",
    age: 52,
    language: "JavaScript",
    meal: "standard",
  },
  {
    firstName: "Ramona",
    lastName: "R.",
    country: "Paraguay",
    continent: "Americas",
    age: 29,
    language: "Ruby",
    meal: "vegan",
  },
  {
    firstName: "George",
    lastName: "B.",
    country: "England",
    continent: "Europe",
    age: 81,
    language: "C",
    meal: "vegetarian",
  },
];

function orderFood(list) {
  let obj = {};
  for (let i = 0; i < list.length; i++) {
    if (obj.hasOwnProperty(list[i].meal)) {
      obj[list[i].meal] += 1;
    } else {
      obj[list[i].meal] = 1;
    }
  }
  return obj;
}

console.log(orderFood(list));
