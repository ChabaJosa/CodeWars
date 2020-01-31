function getCount(str) {
    var vowelsCount = 0;
  
  for (i in str){
    if (str[i] == 'a' || str[i] == 'e' || str[i] == 'i' || str[i] == 'o' || str[i] == 'u' ){
      vowelsCount +=1
    } 
  }
  
    return vowelsCount;
  }
  
  getCount("alskdjlaoidiosaid")