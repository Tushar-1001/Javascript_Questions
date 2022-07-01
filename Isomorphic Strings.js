function areIsomorpjic(str1, str2) {
    let str1Obj = {};
    let str2Obj = {};
  
    for (let i = 0; i < str1.length; i++) {
      if (str1Obj.hasOwnProperty(str1[i])) {
        str1Obj[str1[i]] += 1;
      } else {
        str1Obj[str1[i]] = 1;
      }
    }
    for (let i = 0; i < str2.length; i++) {
      if (str2Obj.hasOwnProperty(str2[i])) {
        str2Obj[str2[i]] += 1;
      } else {
        str2Obj[str2[i]] = 1;
      }
    }
    // console.log(str1Obj)
    // console.log(str2Obj)
  
    let str1ObjVal = Object.values(str1Obj)
    let str2ObjVal = Object.values(str2Obj)
  
    if (JSON.stringify(str1ObjVal) == JSON.stringify(str2ObjVal)) {
      return 1;
    } else {
      return 0;
    }
  }
  
  let str1 = "aba";
  let str2 = "xyy";
  
  console.log(areIsomorpjic(str1, str2));
  