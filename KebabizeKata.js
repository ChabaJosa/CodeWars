function kebabize(str) {
    // return
    let arr = str.split("")
    counter = -1

    arr.forEach(item => {
  
        counter++

        if ( item == item.toUpperCase() ){
            arr[counter] = `-${String(arr[counter].toLowerCase())}`
        } else {
            return null
        }
    
    })
    
   console.log(arr.join("")) 
    
  }

  kebabize("myCamelHasHumps")