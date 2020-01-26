// const ticker = (text, width, tick) => {
  
//   widthArray = []

//   for(i=0;i < width; i++){
//     widthArray.push(" ")
//   }

//   for(i in text){
//     widthArray.splice(-1-i,1,text[i])
//   }

//   return 0 < tick ? widthArray.join("").slice(0,-tick): widthArray.join("")

// }

// ticker("hello",5,2)

const ticker = (text, width, tick) => {
  
    widthArray = []
  
    console.log(width-text.length)
  
    for(i=0;i < width-text.length; i++){
      widthArray.push(" ")
    }
  
    spaceString = widthArray.join("")
  
    fullString = text.concat(spaceString)
  
    console.log(fullString)
  
    const tickIt = string => {
  
      for (i=0;i<=tick;i++){
       string = " " + string
      }
  
      for (i=0;i<=tick;i++){
       string=string.slice(0,string.length-1)
      }
  
      return string
  
    }
  
    return tickIt(fullString).length
  
  }
  
  ticker('Hello world!', 10, 4) 