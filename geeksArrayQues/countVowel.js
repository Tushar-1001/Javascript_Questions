//Given a string "Education", count the numbers of vowels as well as return those vowel present in the string.

const str = "Education";

function countVowels(str) {
  const vowels = ["a", "e", "i", "o", "u"];

  const arr = [];

  for (let i = 0; i < vowels.length; i++) {
    if (str.includes(vowels[i])) {
      arr.push(vowels[i]);
    }
  }
  return arr.join() 
}
console.log(countVowels(str));
