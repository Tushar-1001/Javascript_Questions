//Given two strings, return true if they are anagrams of one another.

function isAnagram(a,b) {
    let len1 = a.length
    let len2 = b.length
    if (len1 != len2) {
        console.log('Invalid Input')
        return
    }
    let str1 = a.split('').sort().join('')
    let str2 = b.split('').sort().join('')
    if (str1 === str2) {
        console.log('True')
    }else{console.log('False')}
}

isAnagram("indian","ndiani")
isAnagram("army","mary")
 


//army   mary