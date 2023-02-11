import { assertion, checkResults } from "./util";

export const BasicJS = () => {
  const targets = [
    ["basic1", queueHandler],
    ["basic2", parseIntRadixHandler],
    ["basic3", ch112Handler],
    ["basic4", ch113Handler],
  ];

  targets.forEach(target => {
    const el = document.getElementById(target[0]);
    if (el !== null && el !== undefined && el !== void 0) {
      el.addEventListener("click", target[1]);
    }
  });
}

function basicQueueDataStructure(arr, item) {
  arr.push(item);
  return arr.shift();
}

function queueHandler() {
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

function parseIntRadixHandler() {
  parseIntWithRadixArg("111111");
}

// We have defined a function called countdown with one parameter (n). The 
// function should use recursion to return an array containing the integers
// n through 1 based on the n parameter. If the function is called with a 
// number less than 1, the function should return an empty array. For example, 
// calling this function with n = 5 should return the array [5, 4, 3, 2, 1]. 
// Your function must use recursion by calling itself and must not use loops of
// any kind.
function countdown(n) {
  if (n < 1) {
    return [];
  } else {
    const arr = countdown(n - 1);
    arr.unshift(n);
    return arr;
  }
}

function ch112Handler() {
  const tests = [
    [-1, []],
    [10, [10, 9, 8, 7, 6, 5, 4, 3, 2, 1]],
    [5, [5, 4, 3, 2, 1]],
  ];

  const results = tests.map((args) => {
    return assertion(countdown(args[0]), args[1]);
  })

  checkResults(results, (result, assert) => {
    const str1 = JSON.stringify(result);
    const str2 = JSON.stringify(assert);
    console.log((str1 === str2) ? "PASS" : `FAIL:\n\texpected: ${str2}\n\tgot: ${str1}`);
  });
}

// We have defined a function named rangeOfNumbers with two parameters. The 
// function should return an array of integers which begins with a number 
// represented by the startNum parameter and ends with a number represented by 
// the endNum parameter. The starting number will always be less than or equal 
// to the ending number. Your function must use recursion by calling itself and 
// not use loops of any kind. It should also work for cases where both startNum 
// and endNum are the same.
export function rangeOfNumbers(startNum, endNum) {
  if (startNum > endNum) {
    return [];
  } else {
    let arr = rangeOfNumbers(startNum, endNum-1);
    arr.push(endNum);
    return arr;
  }
}

function ch113Handler() {
  const tests = [
    [1, 5, [1, 2, 3, 4, 5]],
    [6, 9, [6, 7, 8, 9]],
    [4, 4, [4]],
  ];

  const results = tests.map((args) => {
    return assertion(rangeOfNumbers(args[0], args[1]), args[2]);
  })

  checkResults(results, (result, assert) => {
    const str1 = JSON.stringify(result);
    const str2 = JSON.stringify(assert);
    console.log((str1 === str2) ? "PASS" : `FAIL:\n\texpected: ${str2}\n\tgot: ${str1}`);
  });
}
