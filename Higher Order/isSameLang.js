// Coding Meetup #6 - Higher-Order Functions Series - Can they code in the same language?

// Your task is to return either:

// true if all developers in the list code in the same language; or
// false otherwise.

let list = [
  {
    firstName: "Daniel",
    lastName: "J.",
    country: "Aruba",
    continent: "Americas",
    age: 42,
    language: "JavaScript",
  },
  {
    firstName: "Kseniya",
    lastName: "T.",
    country: "Belarus",
    continent: "Europe",
    age: 22,
    language: "JavaScript",
  },
  {
    firstName: "Hanna",
    lastName: "L.",
    country: "Hungary",
    continent: "Europe",
    age: 65,
    language: "JavaScript",
  },
];

function isSameLang(list) {
  let languageFilter = list.map((x) => x.language);

  let findUnique = [...new Set(languageFilter)];

  if (findUnique.length == 1) {
    return true;
  } else {
    return false;
  }
}

console.log(isSameLang(list));



//Another solution
function isSameLanguage(list) {
    const lang = list[0].language;
    return list.every(v => v.language === lang);
  }

console.log(isSameLanguage(list));

