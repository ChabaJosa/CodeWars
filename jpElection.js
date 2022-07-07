function whoWon(arr) {
    console.log('-------------------------------------')
    //
    let hashMap = {}
    for (i in arr){ 
        let holdProperty = arr[i]
        if(hashMap.hasOwnProperty(holdProperty)){ 
            hashMap[arr[i]] = hashMap[arr[i]] + 1
        } else {
            hashMap[arr[i]] = 1
        }
    }
    //
    console.log(hashMap)
    //
    let keysArr = Object.keys(hashMap)
    let holdItem = {name: '', val: 0} 
    for (x in keysArr){
        if(hashMap[keysArr[x]] > holdItem.val){
            holdItem.name = keysArr[x]
            holdItem.val = hashMap[keysArr[x]]
        }
    }
    //
    console.log(holdItem)
}
//
const testCases = [
  ["Biden", "Biden", "Trump", "Biden", "Trump", "Biden", "Trump", "Biden", "Bush"],
  ["Hilary",  "Obama","Trump", "Hilary", "Trump", "Hilary", "Trump", "Hilary"],
  ["Hilary", "Bush",  "Obama",  "Obama", "Hilary",  "Obama", "Bush", "Hilary", "Bush", "Hilary", "Bush", "Bush", "Obama",  "Obama",  "Obama"],
];
//
whoWon(testCases[0] );
whoWon(testCases[1] );
whoWon(testCases[2] );

