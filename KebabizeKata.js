function kebabize(str) {
    // return

    
    counter = -1
    // console.log("Tryinnnnnnnn", str.split("").forEach(item => { counter++; if ( item == item.toUpperCase() ); { arr[counter] = `-${String(arr[counter].toLowerCase())}`;} ; else; { return null }}))
    
    let arr = str.split("")
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