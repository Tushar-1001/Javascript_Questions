// let list = [
//     { firstName: 'Maria', lastName: 'Y.', country: 'Cyprus', continent: 'Europe', age: 30, language: 'Java' },
//     { firstName: 'Victoria', lastName: 'T.', country: 'Puerto Rico', continent: 'Americas', age: 70, language: 'Python' },
//   ];

  let list = 
//  [{"firstName":"Kseniya","lastName":"T.","country":"Belarus","continent":"Europe","age":29,"language":"Ruby"},{"firstName":"Amar","lastName":"V.","country":"Bosnia and Herzegovina","continent":"Europe","age":32,"language":"Ruby"}]
//   List of developers: 
//  [{"firstName":"Sofia","lastName":"P.","country":"Italy","continent":"Europe","age":41,"language":"Clojure"},{"firstName":"Kseniya","lastName":"T.","country":"Belarus","continent":"Europe","age":29,"language":"JavaScript"},{"firstName":"Jing","lastName":"X.","country":"China","continent":"Asia","age":39,"language":"Ruby"},{"firstName":"Noa","lastName":"A.","country":"Israel","continent":"Asia","age":40,"language":"Ruby"},{"firstName":"Andrei","lastName":"E.","country":"Romania","continent":"Europe","age":59,"language":"C"},{"firstName":"Maria","lastName":"S.","country":"Peru","continent":"Americas","age":60,"language":"C"},{"firstName":"Lukas","lastName":"X.","country":"Croatia","continent":"Europe","age":75,"language":"Python"},{"firstName":"Chloe","lastName":"K.","country":"Guernsey","continent":"Europe","age":88,"language":"Ruby"},{"firstName":"Viktoria","lastName":"W.","country":"Bulgaria","continent":"Europe","age":98,"language":"PHP"},{"firstName":"Piotr","lastName":"B.","country":"Poland","continent":"Europe","age":128,"language":"JavaScript"}]
  
    //   [{"firstName":"Althea","lastName":"I.","country":"Philippines","continent":"Asia","age":81,"language":"Python"},{"firstName":"Joshua","lastName":"O.","country":"Isle of Man","continent":"Europe","age":39,"language":"Clojure"},{"firstName":"Nareh","lastName":"Q.","country":"Armenia","continent":"Europe","age":80,"language":"Clojure"},{"firstName":"Noah","lastName":"M.","country":"Switzerland","continent":"Europe","age":19,"language":"C"},{"firstName":"Margret","lastName":"M.","country":"Iceland","continent":"Europe","age":28,"language":"Java"},{"firstName":"Amar","lastName":"V.","country":"Bosnia and Herzegovina","continent":"Europe","age":32,"language":"Ruby"},{"firstName":"Sou","lastName":"B.","country":"Japan","continent":"Asia","age":43,"language":"PHP"},{"firstName":"Harry","lastName":"K.","country":"Brazil","continent":"Americas","age":19,"language":"Python"},{"firstName":"Maia","lastName":"S.","country":"Tahiti","continent":"Oceania","age":28,"language":"Clojure"},{"firstName":"Emilija","lastName":"S.","country":"Lithuania","continent":"Europe","age":19,"language":"Python"}]
//   Random test #2, List of developers: 
      [{"firstName":"Fatima","lastName":"H.","country":"Pakistan","continent":"Asia","age":8,"language":"JavaScript"},{"firstName":"Kseniya","lastName":"T.","country":"Belarus","continent":"Europe","age":29,"language":"JavaScript"},{"firstName":"Sou","lastName":"B.","country":"Japan","continent":"Asia","age":43,"language":"PHP"},{"firstName":"Luka","lastName":"J.","country":"Slovenia","continent":"Europe","age":39,"language":"Clojure"},{"firstName":"Ramon","lastName":"R.","country":"Paraguay","continent":"Americas","age":99,"language":"Ruby"},{"firstName":"Jayden","lastName":"P.","country":"Jamaica","continent":"Americas","age":42,"language":"JavaScript"},{"firstName":"Seoyeon","lastName":"J.","country":"South Korea","continent":"Asia","age":29,"language":"Ruby"},{"firstName":"Fatemeh","lastName":"Z.","country":"Iran","continent":"Asia","age":29,"language":"Java"},{"firstName":"Sofia","lastName":"P.","country":"Italy","continent":"Europe","age":71,"language":"Clojure"},{"firstName":"Mark","lastName":"G.","country":"Scotland","continent":"Europe","age":52,"language":"JavaScript"}]


  function getAverageAge(list) {

    let ageArr = list.map(x => x.age)
    let ageAvg = ageArr.reduce((a,b) => a+b)
    return Math.round(ageAvg/ageArr.length) 
    
  }

  console.log(getAverageAge(list))