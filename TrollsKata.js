function disemvowel(str) {
    let regEx = /[aeiou]/gi
    str = str.replace(regEx,"")
    return str
  }