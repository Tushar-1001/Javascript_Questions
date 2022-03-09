let animalsArr = ["horse", "horse", "tiger", "tiger", "tiger", "lion", "Zebra"];

function countAnimals(animalsArr) {
  let obj = {};
  let res = [];
  for (let i = 0; i < animalsArr.length; i++) {
    if (obj.hasOwnProperty(animalsArr[i])) {
      obj[animalsArr[i]] += 1;
    } else {
      obj[animalsArr[i]] = 1;
    }
  }
  return obj;
}

console.log(countAnimals(animalsArr));
