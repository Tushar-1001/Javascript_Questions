//Given two strings, return true if they are anagrams of one another.

// function isAnagram(a, b) {
//   let len1 = a.length;
//   let len2 = b.length;
//   if (len1 != len2) {
//     console.log("Invalid Input");
//     return;
//   }
//   let str1 = a.split("").sort().join("");
//   let str2 = b.split("").sort().join("");
//   if (str1 === str2) {
//     console.log("True");
//   } else {
//     console.log("False");
//   }
// }

// isAnagram("indian", "ndiani");
// isAnagram("army", "mary");

//army   mary

//------------------------------------------------------------------------------

function checkAnagram(str1, str2) {
  if (str1.length != str2.length) return false;

  let obj = {};
  for (let letter of str1) {
    obj[letter] = (obj[letter] || 0) + 1;
  }
  
  for (let items of str2) {
    if (!obj[items]) return false;
    else obj[items] -= 1;
  }
  // console.log(obj)
  return true;
}

console.log(checkAnagram("indian", "ndiani"));
console.log(checkAnagram("army", "mary"));
