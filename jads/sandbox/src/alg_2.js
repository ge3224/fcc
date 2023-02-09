import { titleCase } from "./alg_1";
import { assertion, checkResults, areCorresponding, areMatching } from "./util";


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
    const passing = areMatching(result, args[2]);
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
    printResults(result, areMatching(result, args[1]), args[1], "destroyer");
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
    let passing = true;
    for (let i = 0; i < result.length; i++) {
      if (!areCorresponding(result[i], args[1][0])) {
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

  tests.forEach(args => {
    const result = spinalCase(args[0]);
    printResults(result, result === args[1], args[1], "spinalCase");
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

  tests.forEach(args => {
    const result = translatePigLatin(args[0]);
    printResults(result, result === args[1], args[1], "translatePigLatin");
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

  tests.forEach(args => {
    const result = myReplace(args[0], args[1], args[2]);
    printResults(result, result === args[3], args[3], "myReplace");
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

export const alg2 = () => {
  const ids = [
    ["026", ch1Handler],
    ["027", ch2Handler],
    ["028", ch3Handler],
    ["029", ch4Handler],
    ["030", ch5Handler],
    ["031", ch6Handler],
    ["032", ch7Handler],
    ["033", ch8Handler],
  ];

  ids.map(item => {
    const el = document.getElementById(item[0]);
    if (el !== null && el !== undefined && el !== void 0) {
      el.addEventListener("click", item[1]);
    }
  });
}
