function list(names){
    let notLast = []
    let lastOne = []
    let counter = 1

    const getNames = () => {
        names.forEach( item => {
            if (names.length > counter) {
                counter++
                notLast.push(item.name)
            } else { 
                counter++
                lastOne.push(item.name)
            }
        })

    }
    getNames()
    
    if(names.length > 1 ) {
        return  String(notLast.join(", ")) + String(" & ")+ String(lastOne)
    } else if (names.length > 0) {
        return String(names[0].name)
    } else {
        return ""
    }


}


list([ {name: 'Bart'}, {name: 'Lisa'}, {name: 'Maggie'} ])
