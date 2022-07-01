function isPrime(num){
    let flag = true
    if(num == 1){
        return false
    }
    for (let i = 2; i < num; i++) {
        if(num % i == 0){
            flag = false
            break
        }
        
    }
    if (flag == true) {
        return true
    }else{
        return false
    }
}


// console.log(isPrime(33))


//Print prime numbers

function printPrime(start , end){
    let primeNos = []
    for(let i = start ; i <= end ; i++){
        if(isPrime(i)){
            primeNos.push(i)
        }
    }return primeNos
}

console.log(printPrime(1,30))


