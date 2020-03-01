function reverseLetter(str) {
    
    return str.split("").filter( eachChar => {return /^[a-zA-Z]+$/.test(eachChar) === true} ).reverse().join("")
      
  }

console.log(reverseLetter("watermel3on"))