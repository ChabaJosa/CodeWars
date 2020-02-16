function iqTest(numbers){

    let arr = numbers.split(" ")
    let countEven = 0
    let countOdd = 0
    let weirdNumberEven=0
    let weirdNumberOdd=0
  
    console.log("Whatsaupp")
    for (i in arr){
  
      arr[i]=Number(arr[i])
  
      if (arr[i]%2==0){
        countEven++
        weirdNumberEven=Number(i)
      } else {
        countOdd++
        weirdNumberOdd=Number(i)
      }
    }
  
    // console.log(weirdNumberEven + "Even")
    // console.log(weirdNumberOdd + "odd")
    
    if (countEven > countOdd){
      return weirdNumberOdd+1
    } else {
      return weirdNumberEven+1
    }
  
    return weirdNumber
  
  }
  
  iqTest("2 4 7 8 10")
  iqTest("1 2 1 1")