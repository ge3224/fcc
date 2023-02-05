function basicQueueDataStructure(arr, item) {
  arr.push(item);
  return arr.shift();
}

// Setup
let testArr = [1, 2, 3, 4, 5];

// Display code
console.log("Before: " + JSON.stringify(testArr));
console.log(basicQueueDataStructure(testArr, 6));
console.log("After: " + JSON.stringify(testArr));

function parseIntWithRadixArg(str){
  for (let i = 2; i <= 36; i++) {
    console.log(`base ${i}: ${parseInt(str, i)}`);
  }
}

parseIntWithRadixArg("111111");
