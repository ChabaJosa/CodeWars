function whoWon(initialArr, hashMap, counterA, counterB, holdItem) {
  console.log("-------------------------------------");
  //
  //    Generate Hash Map
  //
  let doneWithA = null;
  if (counterA < initialArr.length) {
    let holdProperty = initialArr[counterA];
    if (hashMap.hasOwnProperty(holdProperty)) {
      hashMap[initialArr[counterA]] = hashMap[initialArr[counterA]] + 1;
    } else {
      hashMap[initialArr[counterA]] = 1;
    }
    counterA++;
  } else {
    doneWithA = true;
  }
  //
  console.log(hashMap);
  //
  //    Generate Highest Item
  //
  let keysArr = Object.keys(hashMap);
  console.log(keysArr.length)
  if (doneWithA === true && counterB < keysArr.length) {
    if (hashMap[keysArr[counterB]] > holdItem.val) {
      holdItem.name = keysArr[counterB];
      holdItem.val = hashMap[keysArr[counterB]];
    }
    counterB++;
  } 
//   else {
//       return
//   }
  //
  console.log(holdItem);
  //
  return whoWon(initialArr, hashMap, counterA, counterB, holdItem);
}
//
const testCases = [
  [
    "Biden",
    "Biden",
    "Trump",
    "Biden",
    "Trump",
    "Biden",
    "Trump",
    "Biden",
    "Bush",
  ],
  ["Hilary", "Obama", "Trump", "Hilary", "Trump", "Hilary", "Trump", "Hilary"],
  [
    "Hilary",
    "Bush",
    "Obama",
    "Obama",
    "Hilary",
    "Obama",
    "Bush",
    "Hilary",
    "Bush",
    "Hilary",
    "Bush",
    "Bush",
    "Obama",
    "Obama",
    "Obama",
  ],
];
//
whoWon(testCases[0], {}, 0, 0, { name: "", val: 0 });
// whoWon(testCases[1] );
// whoWon(testCases[2] );
