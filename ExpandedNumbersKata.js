function expandedForm(num) {
    return num.toString().split("").map(eachNum => {
      return Math.ceil(num/1000)*1000
    }
    )
  
  }
  
  expandedForm(4500)