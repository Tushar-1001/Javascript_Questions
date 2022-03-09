// Coding Meetup #8 - Higher-Order Functions Series - Will all continents be represented?

// let list = [
//   {
//     firstName: "Fatima",
//     lastName: "A.",
//     country: "Algeria",
//     continent: "Africa",
//     age: 25,
//     language: "JavaScript",
//   },
//   {
//     firstName: "Agustín",
//     lastName: "M.",
//     country: "Chile",
//     continent: "Americas",
//     age: 37,
//     language: "C",
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
//     firstName: "Laia",
//     lastName: "P.",
//     country: "Andorra",
//     continent: "Europe",
//     age: 55,
//     language: "Ruby",
//   },
//   {
//     firstName: "Oliver",
//     lastName: "Q.",
//     country: "Australia",
//     continent: "Oceania",
//     age: 65,
//     language: "PHP",
//   },
//   {
//     firstName: "Oliver",
//     lastName: "Q.",
//     country: "Australia",
//     continent: "Australia",
//     age: 65,
//     language: "PHP",
//   },
// ];

let list = [{"firstName":"Agustin","lastName":"V.","country":"Uruguay","continent":"Americas","age":89,"language":"JavaScript"},{"firstName":"Amar","lastName":"V.","country":"Bosnia and Herzegovina","continent":"Europe","age":32,"language":"Ruby"},{"firstName":"Daniel","lastName":"J.","country":"Aruba","continent":"Americas","age":42,"language":"JavaScript"},{"firstName":"Aadya","lastName":"Y.","country":"India","continent":"Asia","age":29,"language":"PHP"},{"firstName":"Margret","lastName":"M.","country":"Iceland","continent":"Europe","age":28,"language":"Java"},{"firstName":"Maria","lastName":"Y.","country":"Cyprus","continent":"Europe","age":30,"language":"Java"},{"firstName":"Joshua","lastName":"O.","country":"Isle of Man","continent":"Europe","age":39,"language":"Clojure"},{"firstName":"Fatima","lastName":"H.","country":"Pakistan","continent":"Asia","age":28,"language":"JavaScript"},{"firstName":"Hanna","lastName":"L.","country":"Hungary","continent":"Europe","age":29,"language":"JavaScript"},{"firstName":"Yusuf","lastName":"N.","country":"Turkey","continent":"Europe","age":22,"language":"Python"},{"firstName":"Krishna","lastName":"G.","country":"Nepal","continent":"Asia","age":22,"language":"Java"},{"firstName":"Hugo","lastName":"K.","country":"Spain","continent":"Europe","age":39,"language":"Python"},{"firstName":"Emma","lastName":"B.","country":"Norway","continent":"Europe","age":89,"language":"Clojure"},{"firstName":"Oliver","lastName":"Q.","country":"Australia","continent":"Oceania","age":19,"language":"PHP"},{"firstName":"Sumayah","lastName":"M.","country":"Tajikistan","continent":"Asia","age":30,"language":"Ruby"},{"firstName":"Sofia","lastName":"W.","country":"Moldova","continent":"Europe","age":29,"language":"Ruby"},{"firstName":"Mariami","lastName":"G.","country":"Georgia","continent":"Europe","age":29,"language":"Python"},{"firstName":"Gabriel","lastName":"X.","country":"Monaco","continent":"Europe","age":29,"language":"PHP"},{"firstName":"Odval","lastName":"F.","country":"Mongolia","continent":"Asia","age":38,"language":"Python"},{"firstName":"Mark","lastName":"G.","country":"Scotland","continent":"Europe","age":22,"language":"JavaScript"},{"firstName":"Sofia","lastName":"C.","country":"Estonia","continent":"Europe","age":29,"language":"PHP"},{"firstName":"Sofia","lastName":"P.","country":"Italy","continent":"Europe","age":41,"language":"Clojure"},{"firstName":"Anna","lastName":"R.","country":"Liechtenstein","continent":"Europe","age":32,"language":"JavaScript"},{"firstName":"Viktoria","lastName":"W.","country":"Bulgaria","continent":"Europe","age":28,"language":"PHP"},{"firstName":"Fatima","lastName":"K.","country":"Saudi Arabia","continent":"Asia","age":21,"language":"Clojure"},{"firstName":"Piotr","lastName":"B.","country":"Poland","continent":"Europe","age":30,"language":"JavaScript"},{"firstName":"Ramon","lastName":"R.","country":"Paraguay","continent":"Americas","age":29,"language":"Ruby"},{"firstName":"William","lastName":"L.","country":"Sweden","continent":"Europe","age":32,"language":"Java"},{"firstName":"Oliver","lastName":"P.","country":"Wales","continent":"Europe","age":29,"language":"JavaScript"},{"firstName":"Maia","lastName":"S.","country":"Tahiti","continent":"Oceania","age":28,"language":"Clojure"}]

//Your task is to return:

// true if all of the following continents / geographic zones will be represented by at least one developer: 'Africa', 'Americas', 'Asia', 'Europe', 'Oceania'.
// false otherwise.

function allContinents(list) {
  let requiredContinents = ["Oceania", "Africa", "Americas", "Asia", "Europe"];

  let fetchCont = list.map((x) => x.continent);

let uniqueFetchCont = [...new Set(fetchCont)]

let concatBoth = [...uniqueFetchCont,...requiredContinents]
console.log(concatBoth)

console.log([...new Set(concatBoth)])

// return [...new Set(concatBoth)].length == 5 ? true : false

}

console.log(allContinents(list));



