import { titleCase } from "./alg_1";
import { assertion, checkResults, areCorresponding, areMatching } from "./util";

// We'll pass you an array of two numbers. Return the sum of those two numbers 
// plus the sum of all the numbers between them. The lowest number will not 
// always come first.
//
// For example, sumAll([4,1]) should return 10 because sum of all the numbers 
// between 1 and 4 (both inclusive) is 10.
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

  const results = tests.map(args => {
    return assertion(sumAll(args[0]), args[1]);
  });

  checkResults(results, (result, assert) => {
    console.log((result === assert) ? "PASS" : `FAIL:\n\t${result}`);
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

  const results = tests.map(args => {
    return assertion(diffArray(args[0], args[1]), args[2]);
  });

  checkResults(results, (result, assert) => {
    console.log((areMatching(result, assert)) ? "PASS" : `FAIL:\n\t${result}`);
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

  const results = tests.map(args => {
    return assertion(destroyer(args[0][0], ...args[0].slice(1)), args[1]);
  });

  checkResults(results, (result, assert) => {
    const ok = areMatching(result, assert);
    console.log((ok) ? "PASS" : `FAIL:\n\t${result}`);
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

  const results = tests.map(args => {
    return assertion(whatIsInAName(args[0][0], args[0][1]), args[1][0]);
  });

  checkResults(results, (result, assert) => {
    let ok = true;
    for (let i = 0; i < result.length; i++) {
      if (!areCorresponding(result[i], assert)) {
        ok = false;
        break;
      }
    }
    console.log((ok) ? "PASS" : `FAIL\n\t${result}\n\t${assert}`);
  });
}

// Convert a string to spinal case. Spinal case is 
// all-lowercase-words-joined-by-dashes.
function spinalCase(str) {
  return str.replace(/([a-z])([A-Z])/g, "$1-$2")
    .replace(/\s/g, "-")
    .replace(/_/g, "-")
    .toLowerCase();
}

function ch5Handler() {
  const tests = [
    ["This Is Spinal Tap", "this-is-spinal-tap"],
    ["thisIsSpinalTap", "this-is-spinal-tap"],
    ["The_Andy_Griffith_Show", "the-andy-griffith-show"],
    ["Teletubbies say Eh-oh", "teletubbies-say-eh-oh"],
    ["AllThe-small Things", "all-the-small-things"],
  ];

  const results = tests.map(args => {
    return assertion(spinalCase(args[0]), args[1]);
  });

  checkResults(results, (result, assert) => {
    console.log((result === assert) ? "PASS" : `FAIL:\n\t${result}`);
  });
}

// Translate the provided string to Pig Latin. Input strings are guaranteed to 
// be English words in all lowercase.
function translatePigLatin(str) {
  let newEnd = "ay";
  const regex = /[aeiou]/i;
  const firstVowel = regex.exec(str);
  let newStart = str.slice();
  if (firstVowel !== null && firstVowel !== undefined && firstVowel !== void 0) {
    newEnd = (firstVowel.index > 0) ? str.slice(0, firstVowel.index) + "ay" : "way";
    newStart = str.slice(firstVowel.index);
  }
  return newStart + newEnd;
}

function ch6Handler() {
  const tests = [
    ["california", "aliforniacay"],
    ["paragraphs", "aragraphspay"],
    ["glove", "oveglay"],
    ["algorithm", "algorithmway"],
    ["eight", "eightway"],
    ["schwartz", "artzschway"],
    ["rhythm", "rhythmay"],
  ];

  const results = tests.map(args => {
    return assertion(translatePigLatin(args[0]), args[1]);
  });

  checkResults(results, (result, assert) => {
    console.log((result === assert) ? "PASS" : `FAIL:\n\t${result}`);
  });
}

// Perform a search and replace on the sentence using the arguments provided 
// and return the new sentence.
//
// First argument is the sentence to perform the search and replace on.
//
// Second argument is the word that you will be replacing (before).
//
// Third argument is what you will be replacing the second argument with (after).
//
// Note: Preserve the case of the first character in the original word when you 
// are replacing it. For example if you mean to replace the word Book with the 
// word dog, it should be replaced as Dog
function myReplace(str, before, after) {
  const arr = str.split(" ");
  const caps = /[A-Z]/;
  return arr.map(word => {
    if (word === before) {
      word = (caps.test(before[0]) || caps.test(word[0])) ? titleCase(after) : after.toLowerCase();
    }
    return word;
  }).join(" ");
}

function ch7Handler() {
  const tests = [
    ["Let us go to the store", "store", "mall", "Let us go to the mall"],
    ["He is Sleeping on the couch", "Sleeping", "sitting", "He is Sitting on the couch"],
    ["I think we should look up there", "up", "Down", "I think we should look down there"],
    ["This has a spellngi error", "spellngi", "spelling", "This has a spelling error"],
    ["His name is Tom", "Tom", "john", "His name is John"],
    ["Let us get back to more Coding", "Coding", "algorithms", "Let us get back to more Algorithms"],
  ];

  const results = tests.map(args => {
    return assertion(myReplace(args[0], args[1], args[2]), args[3]);
  });

  checkResults(results, (result, assert) => {
    const pass = result === assert;
    console.log((pass) ? "PASS" : `FAIL:\n\texpect: ${assert}\n\tgot: ${result}`);
  });

}

// Pairs of DNA strands consist of nucleobase pairs. Base pairs are represented
// by the characters AT and CG, which form building blocks of the DNA double helix.
//
// The DNA strand is missing the pairing element. Write a function to match the
// missing base pairs for the provided DNA strand. For each character in the 
// provided string, find the base pair character. Return the results as a 2d array.
//
// For example, for the input GCG, return [["G", "C"], ["C","G"], ["G", "C"]]
//
// The character and its pair are paired up in an array, and all the arrays are 
// grouped into one encapsulating array.
function pairElement(str) {
  const newArr = [];
  for (let i = 0; i < str.length; i++) {
    switch (str[i]) {
      case "A":
        newArr.push(["A", "T"]);
        break;
      case "T":
        newArr.push(["T", "A"]);
        break;
      case "G":
        newArr.push(["G", "C"]);
        break;
      case "C":
        newArr.push(["C", "G"]);
        break;
      default:
        console.error(`Unknown base pair: ${str[i]}`);
    }
  }
  return newArr;
}

function ch8Handler() {
  const tests = [
    ["ATCGA", [["A", "T"], ["T", "A"], ["C", "G"], ["G", "C"], ["A", "T"]]],
    ["TTGAG", [["T", "A"], ["T", "A"], ["G", "C"], ["A", "T"], ["G", "C"]]],
    ["CTCTA", [["C", "G"], ["T", "A"], ["C", "G"], ["T", "A"], ["A", "T"]]],
  ];

  const results = tests.map(args => {
    return assertion(pairElement(args[0]), args[1]);
  });

  checkResults(results, (result, assert) => {
    const x = JSON.stringify(result);
    const y = JSON.stringify(assert);
    console.log((x === y) ? "PASS" : `FAIL:\n\t${x}\n\t${y}`);
  });
}

// Find the missing letter in the passed letter range and return it.
//
// If all letters are present in the range, return undefined.
function fearNotLetter(str) {
  let missing;

  for (let i = 0; i < str.length - 1; i++) {
    const current = str[i].charCodeAt(0);
    const next = str[i + 1].charCodeAt(0);

    if (next > current + 1) {
      missing = String.fromCharCode(current + 1);
      break;
    }
  }

  return missing;
}

function ch9Handler() {
  const tests = [
    ["abce", "d"],
    ["abcdefghjklmno", "i"],
    ["stvwx", "u"],
    ["bcdf", "e"],
    ["abcdefghijklmnopqrstuvwxyz", undefined],
  ];

  const results = tests.map(args => {
    return assertion(fearNotLetter(args[0]), args[1]);
  });

  checkResults(results, (result, assert) => {
    console.log((result === assert) ? "PASS" : `FAIL:\n\texpected: ${assert}\n\tgot: ${result}`);
  });

}

// Write a function that takes two or more arrays and returns a new array of 
// unique values in the order of the original provided arrays.
//
// In other words, all values present from all arrays should be included in 
// their original order, but with no duplicates in the final array.
//
// The unique numbers should be sorted by their original order, but the final 
// array should not be sorted in numerical order.
//
// Check the assertion tests for examples.
function uniteUnique(...arr) {
  if (arr.length < 2) {
    console.error("not enough arguments");
    return undefined;
  }
  return arr.reduce((previous, current) => {
    for (let i = 0; i < current.length; i++) {
      if (!previous.includes(current[i])) {
        previous.push(current[i]);
      }
    }
    return previous;
  }, []);
}

function ch10Handler() {
  const tests = [
    [[1, 3, 2], [5, 2, 1, 4], [2, 1], [1, 3, 2, 5, 4]],
    [[1, 2, 3], [5, 2, 1], [1, 2, 3, 5]],
    [[1, 2, 3], [5, 2, 1, 4], [2, 1], [6, 7, 8], [1, 2, 3, 5, 4, 6, 7, 8]],
    [[1, 3, 2], [5, 4], [5, 6], [1, 3, 2, 5, 4, 6]],
    [[1, 3, 2, 3], [5, 2, 1, 4], [2, 1], [1, 3, 2, 5, 4]],
  ];

  const results = [
    assertion(uniteUnique(tests[0][0], tests[0][1], tests[0][2]), tests[0][3]),
    assertion(uniteUnique(tests[1][0], tests[1][1]), tests[1][2]),
    assertion(uniteUnique(tests[2][0], tests[2][1], tests[2][2], tests[2][3]), tests[2][4]),
    assertion(uniteUnique(tests[3][0], tests[3][1], tests[3][2]), tests[3][3]),
    assertion(uniteUnique(tests[4][0], tests[4][1], tests[4][2]), tests[4][3]),
  ];

  checkResults(results, (result, assert) => {
    const x = JSON.stringify(result);
    const y = JSON.stringify(assert);
    console.log((x === y) ? "PASS" : `FAIL\n\texpected: ${y}\n\tgot: ${x}`);
  });
}

export const IntermediateAlgorithmScripting = () => {
  const ids = [
    ["026", ch1Handler],
    ["027", ch2Handler],
    ["028", ch3Handler],
    ["029", ch4Handler],
    ["030", ch5Handler],
    ["031", ch6Handler],
    ["032", ch7Handler],
    ["033", ch8Handler],
    ["034", ch9Handler],
    ["035", ch10Handler],
  ];

  ids.map(item => {
    const el = document.getElementById(item[0]);
    if (el !== null && el !== undefined && el !== void 0) {
      el.addEventListener("click", item[1]);
    }
  });
}
