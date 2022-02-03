function findUniq(arr) {
    var counts = {};
      arr.forEach((x) => {
        counts[x] = (counts[x] || 0) + 1;
      });
      // console.log(counts)
      let objKeys = Object.keys(counts)
      let objVal = Object.values(counts)
      let oneInd = (objVal.indexOf(1))
      return Number(objKeys[oneInd]);
  }

  

  