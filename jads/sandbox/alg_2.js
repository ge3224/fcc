// You will be provided with an initial array (the first argument in the 
// destroyer function), followed by one or more arguments. Remove all elements 
// from the initial array that are of the same value as these arguments.
function destroyer(arr, ...args) {
  return arr.filter(item => args.indexOf(item) === -1);
}

function ch3Handler() {
  const tests = [
    [[[1, 2, 3, 1, 2, 3], 2, 3], [1, 1]],
    [[[1, 2, 3, 5, 1, 2, 3], 2, 3], [1, 5, 1]],
    [[[3, 5, 1, 2, 2], 2, 3, 5], [1]],
    [[[2, 3, 2, 3], 2, 3], []],
    [[["tree", "hamburger", 53], "tree", 53], ["hamburger"]],
    [[["possum", "trollo", 12, "safari", "hotdog", 92, 65, "grandma", "bugati", "trojan", "yacht"], "yacht", "possum", "trollo", "safari", "hotdog", "grandma", "bugati", "trojan"], [12, 92, 65]],
  ];

  tests.forEach(args => {
    const result = destroyer(args[0][0], ...args[0].slice(1));
    printResults(result, areMatch(result, args[1]), args[1], "destroyer");
  });
}

// Compare two arrays and return a new array with any items only found in one of
// the two given arrays, but not both. In other words, return the symmetric 
// difference of the two arrays.
function diffArray(arr1, arr2) {
  const first = arr1.filter(item => {
    if (arr2.indexOf(item) === -1) {
      return item;
    }
  });

  const second = arr2.filter(item => {
    if (arr1.indexOf(item) === -1) {
      return item;
    }
  });

  return second.concat(first);
}

function ch2Handler() {
  const tests = [
    [["diorite", "andesite", "grass", "dirt", "pink wool", "dead shrub"], ["diorite", "andesite", "grass", "dirt", "dead shrub"], ["pink wool"]],
    [["andesite", "grass", "dirt", "pink wool", "dead shrub"], ["diorite", "andesite", "grass", "dirt", "dead shrub"], ["diorite", "pink wool"]],
    [["andesite", "grass", "dirt", "dead shrub"], ["andesite", "grass", "dirt", "dead shrub"], []],
  ];

  tests.forEach(args => {
    const result = diffArray(args[0], args[1]);
    const passing = areMatch(result, args[2]);
    printResults(result, passing, args[2], "diffArray");
  });
}

function sumAll(arr) {
  const newArr = arr.slice().sort((a, b) => a - b);
  let sum = 0;

  for (let i = newArr[0]; i <= newArr[newArr.length - 1]; i++) {
    sum += i;
  }

  return sum;
}

function ch1Handler() {
  const tests = [
    [[1, 4], 10],
    [[4, 1], 10],
    [[5, 10], 45],
    [[10, 5], 45],
  ];

  tests.forEach(args => {
    const result = sumAll(args[0]);
    const passing = (result === args[1]) ? true : false;
    printResults(result, passing, args[1], "sumAll");
  });
}

function areMatch(arr1, arr2) {
  let match = true;
  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i]) {
      match = false;
      break;
    }
  }
  return match
}

function printResults(result, passing, assertion, label = "Output") {
  const testMessage = (passing) ? "PASS" : `FAIL, should be: "${assertion}"`;
  console.log(`${label}: ${result}\n::${testMessage}`);
}

(() => {
  const ids = [
    ["026", ch1Handler],
    ["027", ch2Handler],
    ["028", ch3Handler],
  ];

  ids.map(item => {
    const el = document.getElementById(item[0]);
    if (el !== null && el !== undefined && el !== void 0) {
      el.addEventListener("click", item[1]);
    }
  });
})();
