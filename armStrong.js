function findWheaterNumberisArmsStrong(num) {
    var num = num.toString();
    var sum = 0;
    for (let i = 0; i < num.length; i++) {
        sum += Math.pow(num[i], num.length);
    }
    return sum == num;
}

console.log(findWheaterNumberisArmsStrong(153))