function areMatchingObjects(obj1, obj2) {
  let match = true;
  for (let prop in obj2) {
    if (obj1[prop] !== obj2[prop]) {
      match = false;
      break;
    }
  }
  return match;
}

function areMatchingArrays(arr1, arr2) {
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
    const passing = areMatchingArrays(result, args[2]);
    printResults(result, passing, args[2], "diffArray");
  });
}

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
    printResults(result, areMatchingArrays(result, args[1]), args[1], "destroyer");
  });
}

// Make a function that looks through an array of objects (first argument) and 
// returns an array of all objects that have matching name and value pairs 
// (second argument). Each name and value pair of the source object has to be 
// present in the object from the collection if it is to be included in the 
// returned array.
function whatIsInAName(collection, source) {
  const newArr = collection.filter(obj => {
    let match = true;

    for (let prop in source) {
      if (obj[prop] === undefined || obj[prop] !== source[prop]) {
        match = false;
        break;
      }
    }

    if (match) {
      return obj;
    }
  });

  return newArr;
}

function ch4Handler() {
  const tests = [
    [[[{ first: "Romeo", last: "Montague" }, { first: "Mercutio", last: null }, { first: "Tybalt", last: "Capulet" }], { last: "Capulet" }], [{ first: "Tybalt", last: "Capulet" }]],
    [[[{ "apple": 1 }, { "apple": 1 }, { "apple": 1, "bat": 2 }], { "apple": 1 }], [{ "apple": 1 }, { "apple": 1 }, { "apple": 1, "bat": 2 }]],
    [[[{ "apple": 1, "bat": 2 }, { "bat": 2 }, { "apple": 1, "bat": 2, "cookie": 2 }], { "apple": 1, "bat": 2 }], [{ "apple": 1, "bat": 2 }, { "apple": 1, "bat": 2, "cookie": 2 }]],
    [[[{ "apple": 1, "bat": 2 }, { "apple": 1 }, { "apple": 1, "bat": 2, "cookie": 2 }], { "apple": 1, "cookie": 2 }], [{ "apple": 1, "bat": 2, "cookie": 2 }]],
    [[[{ "apple": 1, "bat": 2 }, { "apple": 1 }, { "apple": 1, "bat": 2, "cookie": 2 }, { "bat": 2 }], { "apple": 1, "bat": 2 }], [{ "apple": 1, "bat": 2 }, { "apple": 1, "bat": 2, "cookie": 2 }]],
    [[[{ "a": 1, "b": 2, "c": 3 }], { "a": 1, "b": 9999, "c": 3 }], []],
    [[[{ "a": 1, "b": 2, "c": 3, "d": 9999 }], { "a": 1, "b": 9999, "c": 3 }], []],
  ];

  tests.forEach(args => {
    const result = whatIsInAName(args[0][0], args[0][1]);
    const passing = true;
    for (let i = 0; i < result.length; i++) {
      if (!areMatchingObjects(result[i], args[1][0])) {
        passing = false;
        break;
      }
    }

    printResults(
      result,
      passing,
      args[1][0],
      "whatIsInAName",
    );
  });
}

(() => {
  const ids = [
    ["026", ch1Handler],
    ["027", ch2Handler],
    ["028", ch3Handler],
    ["029", ch4Handler],
  ];

  ids.map(item => {
    const el = document.getElementById(item[0]);
    if (el !== null && el !== undefined && el !== void 0) {
      el.addEventListener("click", item[1]);
    }
  });
})();
