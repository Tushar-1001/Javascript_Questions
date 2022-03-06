//date palindrome - 12.02.2021

let date = "12.02.2021";

let newDate = date.replaceAll(".", "");

let splitDate = newDate.split("").reverse().join("");
console.log(splitDate);
console.log(newDate);

if (splitDate == newDate) {
  console.log("yes");
} else {
  console.log("no");
}
