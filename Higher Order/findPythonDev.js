// Coding Meetup #4 - Higher-Order Functions Series - Find the first Python developer

// Your task is to return one of the following strings:

// < firstName here >, < country here > of the first Python developer who has signed up; or
// There will be no Python developers if no Python developer has signed up.

let list = [
  {
    firstName: "Mark",
    lastName: "G.",
    country: "Scotland",
    continent: "Europe",
    age: 22,
    language: "JavaScript",
  },
  {
    firstName: "Victoria",
    lastName: "T.",
    country: "Puerto Rico",
    continent: "Americas",
    age: 30,
    language: "Python",
  },
  {
    firstName: "Emma",
    lastName: "B.",
    country: "Norway",
    continent: "Europe",
    age: 19,
    language: "Clojure",
  },
];

function findPythonDev(list) {
  let pythonFilter = list.filter((x) => x.language == "Python");
  if (pythonFilter.length > 0) {
    return pythonFilter[0].firstName + "," + pythonFilter[0].country;
  } else {
    return "There will be no Python developers";
  }
}

console.log(findPythonDev(list));
