function kAnagram(str1, str2, k) {
  if (str1.length != str2.length) {
    return false;
  }

  let sort1 = str1.split('').sort().join('')
  let sort2 = str2.split('').sort().join('')
//   console.log(sort1.length)

//   console.log(sort1)
//   console.log(sort2)

  let count = 0;
  if (str1.length == str2.length) {
    for (let i = 0; i < sort1.length; i++) {
      if (sort1[i] != sort2[i]) {
        count++;
        // console.log(str1[i] , str2[i]);
      }
    }

    console.log(count);
    return count <= k ? true : false;
  }
}

// let str1 = "fodr";
// let str2 = "gork";
let str1 = "uovwhqfaemqodyksjj";
let str2 = "swwhzsiowocjfyadvj";



let k = 18;
console.log(kAnagram(str1, str2, k));
