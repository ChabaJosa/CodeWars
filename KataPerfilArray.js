// a -> 1
// e -> 2
// i -> 3
// o -> 4
// u -> 5

function encode(string) {


    let counter = 0
    let sentenceArr = string.split("")

    string.split("").forEach( char => {

        counter++

        if (char.toLowerCase() == "a"){
            sentenceArr[counter -1] = 1
        } else if (char.toLowerCase() == "e") {
            sentenceArr[counter -1] = 2
        } else if (char.toLowerCase() == "i") {
            sentenceArr[counter -1] = 3
        } else if (char.toLowerCase() == "o") {
            sentenceArr[counter -1] = 4
        } else if (char.toLowerCase() == "u") {
            sentenceArr[counter -1] = 5
        }

        
    })
    
    console.log(sentenceArr.join(""))
}

encode("this is a long ass string aaa")

function decode(string) {

    let counter = 0
    let sentenceArr = string.split("")

    string.split("").forEach( char => {

        counter++

        if (char == "1"){
            sentenceArr[counter -1] = "a"
        } else if (char == "2") {
            sentenceArr[counter -1] = "e"
        } else if (char == "3") {
            sentenceArr[counter -1] = "i"
        } else if (char == "4") {
            sentenceArr[counter -1] = "o"
        } else if (char == "5") {
            sentenceArr[counter -1] = "u"
        }

        
    })
    
    console.log(sentenceArr.join(""))


}

decode("th3s 3s 1 l4ng 1ss str3ng 111")
 