let arr1 = []
let arr2 = []

for (let i = 0; i < 3; i++) {
    setTimeout(()=>arr1.push(i) , 1)
  }
  
  for (let i = 0; i < 3; i++) {
    setTimeout(()=>arr2.push(i) , 1)
  }

  setTimeout(() => {
      console.log(arr1)
      console.log(arr2)
  }, 2);

