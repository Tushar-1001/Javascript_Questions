let str = "racecar";

function strPalindrome(str) {
  for (let i = 0; i < str.length / 2; i++) {
    if (str[i] == str[str.length - 1 - i]) {
      return true;
    } else {
      return false;
    }
  }
}

console.log(strPalindrome(str));






let arr = ["racecar", "naman", "moon", "civic"];
//Filter from array of strings...........

let check = arr.filter(function strPalindrome(str) {
  for (let i = 0; i < str.length / 2; i++) {
    if (str[i] == str[str.length - 1 - i]) {
      return true;
    } else {
      return false;
    }
  }
});

console.log(check);
