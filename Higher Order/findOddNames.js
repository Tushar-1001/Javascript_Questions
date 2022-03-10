// Coding Meetup #15 - Higher-Order Functions Series - Find the odd names

// write a function that when executed as findOddNames(list1) returns only the developers where if you add the ASCII representation of all characters in their first names, the result will be an odd number:

let list = [
  {
    firstName: "Aba",
    lastName: "N.",
    country: "Ghana",
    continent: "Africa",
    age: 21,
    language: "Python",
  },
  {
    firstName: "Abb",
    lastName: "O.",
    country: "Israel",
    continent: "Asia",
    age: 39,
    language: "Java",
  },
  {
    firstName: "Andrei",
    lastName: "E.",
    country: "Romania",
    continent: "Europe",
    age: 59,
    language: "C",
  },
  {
    firstName: "Chloe",
    lastName: "K.",
    country: "Guernsey",
    continent: "Europe",
    age: 88,
    language: "Ruby",
  },
  {
    firstName: "Viktoria",
    lastName: "W.",
    country: "Bulgaria",
    continent: "Europe",
    age: 98,
    language: "PHP",
  },
];

function findOddNames(list) {
  let namesArr = list.map((x) => x.firstName);
  //   console.log(namesArr);

  let codeArr = namesArr.map(function convert(x) {
    let splitX = x
      .split("")
      .map((x) => x.charCodeAt(x))
      .reduce((a, b) => a + b);
    return splitX;
  });

  //   console.log(codeArr);

  let indexArr = [];
  for (let i = 0; i < codeArr.length; i++) {
    if (codeArr[i] % 2 != 0) {
      indexArr.push(i);
    }
  }
  //   console.log(indexArr);
  let output = [];
  for (let i = 0; i < indexArr.length; i++) {
    output.push(list[indexArr[i]]);
  }
  return output;
}

console.log(findOddNames(list));

// let x = "Aba";
// function convert(x) {
//   let splitX = x
//     .split("")
//     .map((x) => x.charCodeAt(x))
//     .reduce((a, b) => a + b);
//   return splitX;
// }

// console.log(convert(x));
