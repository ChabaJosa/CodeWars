function solution(str, ending){
    

    if(str.includes(ending) && str.slice(-1) === ending.slice(-1)) {
        console.log(true) 
        console.log("str",str.slice(-1)) 
        console.log("ending",ending.slice(-1)) 

    } else {console.log(false);} 

}

solution("Samurai","rai")