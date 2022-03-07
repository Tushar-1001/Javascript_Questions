// Coding Meetup #1 - Higher-Order Functions Series - Count the number of JavaScript developers coming from Europe



let list = [
    { firstName: 'Noah', lastName: 'M.', country: 'Switzerland', continent: 'Europe', age: 19, language: 'JavaScript' },
    { firstName: 'Maia', lastName: 'S.', country: 'Tahiti', continent: 'Oceania', age: 28, language: 'JavaScript' },
    { firstName: 'Shufen', lastName: 'L.', country: 'Taiwan', continent: 'Asia', age: 35, language: 'HTML' },
    { firstName: 'Sumayah', lastName: 'M.', country: 'Tajikistan', continent: 'Asia', age: 30, language: 'CSS' }
  ];


  function countDev(list) {
      let count = 0
      for (let i = 0; i < list.length; i++) {
          if(list[i]['continent'] == 'Europe' && list[i]['language'] == 'JavaScript'){
                count ++
          }
          
      }return count
  }

  console.log(countDev(list))


  function countDevelopers(list) {
    return list.filter(x=>x.continent=='Europe'&&x.language=='JavaScript').length
  }

  console.log(countDev(list))