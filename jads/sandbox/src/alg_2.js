import { titleCase } from "./alg_1";
import { assertion, checkResults, areCorresponding, areMatching } from "./util";

// Solutions for Intermediate Algorithm Challenges
export const IntermediateAlgorithmScripting = () => {
  const ids = [
    ["a2_01", ch1Handler],
    ["a2_02", ch2Handler],
    ["a2_03", ch3Handler],
    ["a2_04", ch4Handler],
    ["a2_05", ch5Handler],
    ["a2_06", ch6Handler],
    ["a2_07", ch7Handler],
    ["a2_08", ch8Handler],
    ["a2_09", ch9Handler],
    ["a2_10", ch10Handler],
    ["a2_11", ch11Handler],
    ["a2_12", ch12Handler],
    ["a2_13", ch13Handler],
    ["a2_14", ch14Handler],
    ["a2_15", ch15Handler],
    ["a2_16", ch16Handler],
    ["a2_17", ch17Handler],
    ["a2_18", ch18Handler],
    ["a2_19", ch19Handler],
  ];

  ids.forEach(item => {
    const el = document.getElementById(item[0]);
    if (el !== null && el !== undefined && el !== void 0) {
      el.addEventListener("click", item[1]);
    }
  });
}

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

// Convert the characters &, <, >, " (double quote), and ' (apostrophe), in a 
// string to their corresponding HTML entities.
function convertHTML(str) {
  return str.replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&apos;");
}

function ch11Handler() {
  const tests = [
    ["Dolce & Gabbana", "Dolce &amp; Gabbana"],
    ["Hamburgers < Pizza < Tacos", "Hamburgers &lt; Pizza &lt; Tacos"],
    ["Sixty > twelve", "Sixty &gt; twelve"],
    ['Stuff in "quotation marks"', "Stuff in &quot;quotation marks&quot;"],
    ["Schindler's List", "Schindler&apos;s List"],
    ["<>", "&lt;&gt;"],
    ["abc", "abc"],
  ];

  const results = tests.map(args => {
    return assertion(convertHTML(args[0]), args[1]);
  });

  checkResults(results, (result, assert) => {
    console.log((result === assert) ? "PASS" : `FAIL\n\texpected: ${assert}\n\tgot: ${result}`);
  });
}

// Given a positive integer num, return the sum of all odd Fibonacci numbers 
// that are less than or equal to num.
//
// The first two numbers in the Fibonacci sequence are 1 and 1. Every additional
// number in the sequence is the sum of the two previous numbers. The first six 
// numbers of the Fibonacci sequence are 1, 1, 2, 3, 5 and 8.
//
// For example, sumFibs(10) should return 10 because all odd Fibonacci numbers 
// less than or equal to 10 are 1, 1, 3, and 5.
function sumFibs(num) {
  let index = 1;
  let prev = 0;
  let sum = 0;

  while (index <= num) {
    let current = index;
    if (current % 2 === 1) {
      sum += current;
    }
    index += prev;
    prev = current;
  }

  return sum;
}

function ch12Handler() {
  const tests = [
    [1000, 1785],
    [4000000, 4613732],
    [4, 5],
    [75024, 60696],
    [75025, 135721],
  ];

  const results = tests.map((args) => {
    return assertion(sumFibs(args[0]), args[1]);
  });

  checkResults(results, (result, assert) => {
    console.log((result === assert) ? "PASS" : `FAIL\n\texpected: ${assert}\n\tgot: ${result}`);
  });
}

// A prime number is a whole number greater than 1 with exactly two divisors: 
// 1 and itself. For example, 2 is a prime number because it is only divisible 
// by 1 and 2. In contrast, 4 is not prime since it is divisible by 1, 2 and 4.
//
// Rewrite sumPrimes so it returns the sum of all prime numbers that are less 
// than or equal to num.
function sumPrimes(n) {
  if (n < 2) {
    return 0;
  }

  if (n === 2) {
    return 2;
  }

  if (n === 3) {
    return 5;
  }

  let sum = 0;

  for (let i = 2; i <= n; i++) {
    let isPrime = true;
    for (let j = 2, k = Math.sqrt(i); j <= k; j++) {
      if (i % j === 0) isPrime = false;
    }

    if (isPrime) {
      sum += i;
    }
  }

  return sum;
}

function ch13Handler() {
  const tests = [
    [10, 17],
    [977, 73156],
  ];

  const results = tests.map((args) => {
    return assertion(sumPrimes(args[0]), args[1]);
  })

  checkResults(results, (result, assert) => {
    console.log((result === assert) ? "PASS" : `FAIL\n\texpected: ${assert}\n\tgot: ${result}`);
  });
}

// Find the smallest common multiple of the provided parameters that can be 
// evenly divided by both, as well as by all sequential numbers in the range 
// between these parameters.
//
// The range will be an array of two numbers that will not necessarily be in 
// numerical order.
//
// For example, if given 1 and 3, find the smallest common multiple of both 1 
// and 3 that is also evenly divisible by all numbers between 1 and 3. The 
// answer here would be 6.
function smallestCommons(arr) {
  const [min, max] = arr
    .slice(0, 2) // avoid mutating `arr`; discard extra values
    .sort((a, b) => a - b);

  const range = Array(max - min + 1)
    .fill(0)
    .map((_, i) => i + min);

  const ceil = range
    .reduce((tally, val) => tally *= val, 1);

  for (let multiple = max; multiple <= ceil; multiple += max) {
    const divisible = range.every(val => multiple % val === 0);
    if (divisible) return multiple;
  }
}

function ch14Handler() {
  const tests = [
    [[1, 5], 60],
    [[5, 1], 60],
    [[2, 10], 2520],
    [[1, 13], 360360],
    [[23, 18], 6056820],
  ];

  const results = tests.map(args => {
    return assertion(smallestCommons(args[0]), args[1]);
  });

  checkResults(results, (result, assert) => {
    console.log((result === assert) ? "PASS" : `FAIL:\n\texpected: ${assert}\n\tgot: ${result}`);
  });
}


// Given the array arr, iterate through and remove each element starting from 
// the first element (the 0 index) until the function func returns true when 
// the iterated element is passed through it.
//
// Then return the rest of the array once the condition is satisfied, otherwise,
// arr should be returned as an empty array.
function dropElements(arr, func) {
  let newStart = -1;

  for (let i = 0; i < arr.length; i++) {
    if (func(arr[i])) {
      newStart = i;
      break;
    }
  }
  return (newStart === -1) ? [] : arr.slice(newStart);
}

function ch15Handler() {
  const tests = [
    [[1, 2, 3, 4], function(n) { return n >= 3; }, [3, 4]],
    [[0, 1, 0, 1], function(n) { return n === 1; }, [1, 0, 1]],
    [[1, 2, 3], function(n) { return n > 0; }, [1, 2, 3]],
    [[1, 2, 3, 4], function(n) { return n > 5; }, []],
    [[1, 2, 3, 7, 4], function(n) { return n > 3; }, [7, 4]],
    [[1, 2, 3, 9, 2], function(n) { return n > 2; }, [3, 9, 2]],
  ];

  const results = tests.map((args) => {
    return assertion(dropElements(args[0], args[1]), args[2]);
  });

  checkResults(results, (result, assertion) => {
    const left = JSON.stringify(result);
    const right = JSON.stringify(assertion);
    console.log((left === right) ? "PASS" : `FAIL:\n\texpect: ${right}\n\tgot: ${left}`);
  });
}

function steamrollArray(arr) {
  return arr.reduce((flat, item) => {
    return flat.concat((Array.isArray(item)) ? steamrollArray(item) : item);
  }, []);
}

function ch16Handler() {
  const tests = [
    [[[["a"]], [["b"]]], ["a", "b"]],
    [[1, [2], [3, [[4]]]], [1, 2, 3, 4]],
    [[1, [], [3, [[4]]]], [1, 3, 4]],
    [[1, {}, [3, [[4]]]], [1, {}, 3, 4]],
  ];

  const results = tests.map((args) => {
    return assertion(steamrollArray(args[0]), args[1]);
  })

  checkResults(results, (result, assert) => {
    const left = JSON.stringify(result);
    const right = JSON.stringify(assert);
    console.log((left === right) ? "PASS" : `FAIL:\n\texpect: ${right}\n\tgot: ${left}`);
  });
}

// Return an English translated sentence of the passed binary string.
//
// The binary string will be space separated.
function binaryAgent(str) {
  const arr = str.split(" ").map(item => {
    return String.fromCharCode(parseInt(item, 2));
  });

  return arr.join("");
}

function ch17Handler() {
  const tests = [
    ["01000001 01110010 01100101 01101110 00100111 01110100 00100000 01100010 01101111 01101110 01100110 01101001 01110010 01100101 01110011 00100000 01100110 01110101 01101110 00100001 00111111", "Aren't bonfires fun!?"],
    ["01001001 00100000 01101100 01101111 01110110 01100101 00100000 01000110 01110010 01100101 01100101 01000011 01101111 01100100 01100101 01000011 01100001 01101101 01110000 00100001", "I love FreeCodeCamp!"],
  ];

  const results = tests.map((args) => {
    return assertion(binaryAgent(args[0]), args[1]);
  })

  checkResults(results, (left, right) => {
    console.log((left === right) ? "PASS" : `FAIL:\n\texpect: ${right}\n\tgot: ${left}`);
  });
}


// Check if the predicate (second argument) is truthy on all elements of a 
// collection (first argument).
//
// In other words, you are given an array collection of objects. The predicate 
// pre will be an object property and you need to return true if its value is 
// truthy. Otherwise, return false.
//
// In JavaScript, truthy values are values that translate to true when 
// evaluated in a Boolean context.
//
// Remember, you can access object properties through either dot notation or 
// [] notation.
function truthCheck(collection, pre) {
  const score = collection.reduce((score, obj) => {
    return (obj[pre]) ? score + 1 : score;
  }, 0);
  return (score === collection.length) ? true : false;
}

function ch18Handler() {
  const tests = [
    [[{ name: "Quincy", role: "Founder", isBot: false }, { name: "Naomi", role: "", isBot: false }, { name: "Camperbot", role: "Bot", isBot: true }], "isBot", false],
    [[{ name: "Quincy", role: "Founder", isBot: false }, { name: "Naomi", role: "", isBot: false }, { name: "Camperbot", role: "Bot", isBot: true }], "name", true],
    [[{ name: "Quincy", role: "Founder", isBot: false }, { name: "Naomi", role: "", isBot: false }, { name: "Camperbot", role: "Bot", isBot: true }], "role", false],
    [[{ name: "Pikachu", number: 25, caught: 3 }, { name: "Togepi", number: 175, caught: 1 }], "number", true],
    [[{ name: "Pikachu", number: 25, caught: 3 }, { name: "Togepi", number: 175, caught: 1 }, { name: "MissingNo", number: NaN, caught: 0 }], "caught", false],
    [[{ name: "Pikachu", number: 25, caught: 3 }, { name: "Togepi", number: 175, caught: 1 }, { name: "MissingNo", number: NaN, caught: 0 }], "number", false],
    [[{ name: "Quincy", username: "QuincyLarson" }, { name: "Naomi", username: "nhcarrigan" }, { name: "Camperbot" }], "username", false],
    [[{ name: "freeCodeCamp", users: [{ name: "Quincy" }, { name: "Naomi" }] }, { name: "Code Radio", users: [{ name: "Camperbot" }] }, { name: "", users: [] }], "users", true],
    [[{ id: 1, data: { url: "https://freecodecamp.org", name: "freeCodeCamp" } }, { id: 2, data: { url: "https://coderadio.freecodecamp.org/", name: "CodeRadio" } }, { id: null, data: {} }], "data", true],
    [[{ id: 1, data: { url: "https://freecodecamp.org", name: "freeCodeCamp" } }, { id: 2, data: { url: "https://coderadio.freecodecamp.org/", name: "CodeRadio" } }, { id: null, data: {} }], "id", false],
  ];

  const results = tests.map((args) => {
    return assertion(truthCheck(args[0], args[1]), args[2]);
  })

  checkResults(results, (left, right) => {
    console.log((left === right) ? "PASS" : `FAIL:\n\texpect: ${right}\n\tgot: ${left}`);
  });
}

// Create a function that sums two arguments together. If only one argument is 
// provided, then return a function that expects one argument and returns 
// the sum.
//
// For example, addTogether(2, 3) should return 5, and addTogether(2) should 
// return a function.
//
// Calling this returned function with a single argument will then return 
// the sum:
function addTogether(...args) {
  if (args.length < 1) return undefined;

  if (typeof args[0] !== "number") return undefined;

  if (args.length < 2) {
    return x => {
      if (typeof x !== "number") return undefined;
      return x + args[0];
    }
  } else {
    return args.reduce((val, item) => {
      if (typeof item !== "number") {
        return undefined;
      } else {
        return val + item;
      }
    }, 0);
  }
}

function ch19Handler() {
  const tests = [
    [2, 3, 5],
    [23, 30, 53],
    [5, 7, 12],
    ["https://www.youtube.com/watch?v=dQw4w9WgXcQ", undefined],
    [2, "3", undefined],
    [2, [3], undefined],
    ["2", 3, undefined],
    [5, undefined, undefined],
  ];

  const results = [
    assertion(addTogether(tests[0][0], tests[0][1]), tests[0][2]),
    assertion(addTogether(tests[1][0], tests[1][1]), tests[1][2]),
    assertion(addTogether(tests[2][0])(tests[2][1]), tests[2][2]),
    assertion(addTogether(tests[3][0]), tests[3][1]),
    assertion(addTogether(tests[4][0])(tests[4][1]), tests[4][2]),
    assertion(addTogether(tests[5][0], tests[5][1]), tests[5][2]),
    assertion(addTogether(tests[6][0], tests[6][1]), tests[6][2]),
  ];

  checkResults(results, (left, right) => {
    console.log((left === right) ? "PASS" : `FAIL:\n\texpect: ${right}\n\tgot: ${left}`);
  });
}
