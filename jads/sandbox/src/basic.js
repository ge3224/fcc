function basicQueueDataStructure(arr, item) {
  arr.push(item);
  return arr.shift();
}

function queueClickHandler() {
  // Setup
  let testArr = [1, 2, 3, 4, 5];

  // Display code
  console.log("Before: " + JSON.stringify(testArr));
  console.log(basicQueueDataStructure(testArr, 6));
  console.log("After: " + JSON.stringify(testArr));
}

function parseIntWithRadixArg(str) {
  for (let i = 2; i <= 36; i++) {
    console.log(`base ${i}: ${parseInt(str, i)}`);
  }
}

function radixClickHandler() {
  parseIntWithRadixArg("111111");
}

export const BasicJS = () => {
  const first = document.getElementById("001");
  if (first !== null && first !== undefined && first !== void 0) {
    first.addEventListener("click", queueClickHandler);
  }

  const second = document.getElementById("002");
  if (second !== null && second !== undefined && second !== void 0) {
    second.addEventListener("click", radixClickHandler);
  }
}
