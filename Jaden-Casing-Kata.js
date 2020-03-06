// String.prototype.toJadenCase = 

function Stringo(str) {
    return  str.split(" ").map( eachWord => {return  eachWord.slice(0,1).toUpperCase()  + eachWord.substring(1)}).join(" ") 
};

console.log(Stringo("What is up yo"))