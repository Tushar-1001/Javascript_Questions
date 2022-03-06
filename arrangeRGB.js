let str = "GRGRB";

let split = str.split('')
console.log(split);
let arrR = []
let arrG = []
let arrB = []
for (let i = 0; i < split.length; i++) {
    if (split[i] == 'R') {
        arrR.push(split[i])
    }
    if (split[i] == 'G') {
        arrG.push(split[i])
    }
    if (split[i] == 'B') {
        arrB.push(split[i])
    }
}
console.log(arrR);
console.log(arrG);
console.log(arrB);

console.log(...arrR, ...arrG, ...arrB);
console.log(arrR.concat(arrG, arrB));


