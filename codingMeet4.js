function getFirstPython(list) {
    // Thank you for checking out my kata :)
    let r = list.filter(x => x.language == 'Python' )

    console.log(r)
    console.log(r[0].firstName)
    
    if(r.length > 0){return r[0].firstName, r[0].country}
    else{return 'There will be no Python developers' }
    
  }


  console.log(getFirstPython([
    { firstName: 'Mark', lastName: 'G.', country: 'Scotland', continent: 'Europe', age: 22, language: 'JavaScript' },
    { firstName: 'Victoria', lastName: 'T.', country: 'Puerto Rico', continent: 'Americas', age: 30, language: 'Python' },
    { firstName: 'Emma', lastName: 'B.', country: 'Norway', continent: 'Europe', age: 19, language: 'Clojure' }
  ]))