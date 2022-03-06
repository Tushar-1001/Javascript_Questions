function encrypt(str) {
    let newStr = ""
    for (let i = 0; i < str.length; i++) {
      newStr += String.fromCharCode(str.charCodeAt(i) + 20)
    }
    return newStr ; 
  }
  
  
  console.log(encrypt("hello"))
  
  
  function decrypt(str) {
    let newStr = ""
    for (let i = 0; i < str.length; i++) {
      newStr += String.fromCharCode(str.charCodeAt(i) - 20)
    }
    return newStr ; 
  }
  
  console.log(decrypt("|y"));

  