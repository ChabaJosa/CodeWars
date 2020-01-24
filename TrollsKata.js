function disemvowel(str) {
    let regEx = /[aeiou]/gi
    str = str.replace(regEx,"")
    return str
  }

  disemvowel("This website is for losers LOL!")
  // Prints out ths wbst s fr lsrs LL!