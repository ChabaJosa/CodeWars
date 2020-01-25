var orderedCount = function orderedCount (text) {

    if (typeof(text)=="string"){
      let arr = text.split("")
      let obj = {}
      
      for (i in arr){
        
        if(obj[arr[i]]){
          obj[arr[i]]++
        }
    
        else {
          obj[arr[i]] = 1
        }
      }
    
      let newArray=[]
    
      for (property in obj) {
        newArray.push([property,obj[property]])
      }
    
      return newArray
    
    } else {
    
      let arr = String(text).split("")
      let obj = {}
      let newArray=[]
    
      for (i in arr){
        
        if(obj[arr[i]]){
          obj[arr[i]]++
          // console.log(obj[arr[i]] + " if")
        }
    
        else {
          obj[arr[i]] = 1
          // console.log(obj[arr[i]] + " else")
        }
      }
    
      // Object of the result here but with ascending order
    
      for (property in obj) {
        newArray.push([property,obj[property]])
      }
    
      return newArray
    }
    
    }