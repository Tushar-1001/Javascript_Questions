//How to write a promise function?

function sum(a,b){
    let x = a+b
      return new Promise((resolve, reject) => {
     if(x>5) {
        resolve(console.log(x))
     } else {
        reject(console.log('err'));
     }
  });
  }
  sum(1,5)