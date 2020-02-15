function expandedForm(num) {
    let str = num+'';
    return str.split('').map((item, index)=>{
      if(item>0){
        return item * Math.pow(10, (str.length - index -1))
      }
    }).filter((i)=>i).join(' + ')
  }