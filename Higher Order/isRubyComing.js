// Coding Meetup #3 - Higher-Order Functions Series - Is Ruby coming?

// You will be given an array of objects representing data about developers who have signed up to attend the next coding meetup that you are organising.
// Your task is to return:

// true if at least one Ruby developer has signed up; or
// false if there will be no Ruby developers.

let list = [
    { firstName: 'Emma', lastName: 'Z.', country: 'Netherlands', continent: 'Europe', age: 29, language: 'Ruby' },
    { firstName: 'Piotr', lastName: 'B.', country: 'Poland', continent: 'Europe', age: 128, language: 'Javascript' },
    { firstName: 'Jayden', lastName: 'P.', country: 'Jamaica', continent: 'Americas', age: 42, language: 'JavaScript' }
  ];



  function isRubyPresent(list){
    let filterRuby = list.filter(x => x.language == 'Ruby')
    if(filterRuby.length > 0){
        return true
    }else{
        return false
    }


  }

  console.log(isRubyPresent(list))