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
    ["a2_20", ch20Handler],
    ["a2_21", ch21Handler],
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
    assertion(sumAll([1, 4]), 10),
    assertion(sumAll([4, 1]), 10),
    assertion(sumAll([5, 10]), 45),
    assertion(sumAll([10, 5]), 45),
  ];

  checkResults(tests, (left, right) => {
    console.log((left === right) ? "PASS" : `FAIL:\n\t${left}`);
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
    assertion(diffArray(["diorite", "andesite", "grass", "dirt", "pink wool", "dead shrub"], ["diorite", "andesite", "grass", "dirt", "dead shrub"]), ["pink wool"]),
    assertion(diffArray(["andesite", "grass", "dirt", "pink wool", "dead shrub"], ["diorite", "andesite", "grass", "dirt", "dead shrub"]), ["diorite", "pink wool"]),
    assertion(diffArray(["andesite", "grass", "dirt", "dead shrub"], ["andesite", "grass", "dirt", "dead shrub"]), []),
  ];

  checkResults(tests, (left, right) => {
    console.log((areMatching(left, right)) ? "PASS" : `FAIL:\n\t${left}`);
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
    assertion(destroyer([1, 2, 3, 1, 2, 3], 2, 3), [1, 1]),
    assertion(destroyer([1, 2, 3, 5, 1, 2, 3], 2, 3), [1, 5, 1]),
    assertion(destroyer([3, 5, 1, 2, 2], 2, 3, 5), [1]),
    assertion(destroyer([2, 3, 2, 3], 2, 3), []),
    assertion(destroyer(["tree", "hamburger", 53], "tree", 53), ["hamburger"]),
    assertion(destroyer(["possum", "trollo", 12, "safari", "hotdog", 92, 65, "grandma", "bugati", "trojan", "yacht"], "yacht", "possum", "trollo", "safari", "hotdog", "grandma", "bugati", "trojan"), [12, 92, 65]),
  ];

  checkResults(tests, (left, right) => {
    const ok = areMatching(left, right);
    console.log((ok) ? "PASS" : `FAIL:\n\t${left}`);
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
    assertion(whatIsInAName([{ first: "Romeo", last: "Montague" }, { first: "Mercutio", last: null }, { first: "Tybalt", last: "Capulet" }], { last: "Capulet" }), [{ first: "Tybalt", last: "Capulet" }]),
    assertion(whatIsInAName([{ "apple": 1 }, { "apple": 1 }, { "apple": 1, "bat": 2 }], { "apple": 1 }), [{ "apple": 1 }, { "apple": 1 }, { "apple": 1, "bat": 2 }]),
    assertion(whatIsInAName([{ "apple": 1, "bat": 2 }, { "bat": 2 }, { "apple": 1, "bat": 2, "cookie": 2 }], { "apple": 1, "bat": 2 }), [{ "apple": 1, "bat": 2 }, { "apple": 1, "bat": 2, "cookie": 2 }]),
    assertion(whatIsInAName([{ "apple": 1, "bat": 2 }, { "apple": 1 }, { "apple": 1, "bat": 2, "cookie": 2 }], { "apple": 1, "cookie": 2 }), [{ "apple": 1, "bat": 2, "cookie": 2 }]),
    assertion(whatIsInAName([{ "apple": 1, "bat": 2 }, { "apple": 1 }, { "apple": 1, "bat": 2, "cookie": 2 }, { "bat": 2 }], { "apple": 1, "bat": 2 }), [{ "apple": 1, "bat": 2 }, { "apple": 1, "bat": 2, "cookie": 2 }]),
    assertion(whatIsInAName([{ "a": 1, "b": 2, "c": 3 }], { "a": 1, "b": 9999, "c": 3 }), []),
    assertion(whatIsInAName([{ "a": 1, "b": 2, "c": 3, "d": 9999 }], { "a": 1, "b": 9999, "c": 3 }), []),
  ];

  checkResults(tests, (left, right) => {
    const a = JSON.stringify(left);
    const b = JSON.stringify(right)
    console.log((a === b) ? "PASS" : `FAIL:\n\texpected: ${b}\n\tgot: ${a}`);
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
    assertion(spinalCase("This Is Spinal Tap"), "this-is-spinal-tap"),
    assertion(spinalCase("thisIsSpinalTap"), "this-is-spinal-tap"),
    assertion(spinalCase("The_Andy_Griffith_Show"), "the-andy-griffith-show"),
    assertion(spinalCase("Teletubbies say Eh-oh"), "teletubbies-say-eh-oh"),
    assertion(spinalCase("AllThe-small Things"), "all-the-small-things"),
  ];

  checkResults(tests, (left, right) => {
    console.log((left === right) ? "PASS" : `FAIL:\n\t${left}`);
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
    assertion(translatePigLatin("california"), "aliforniacay"),
    assertion(translatePigLatin("paragraphs"), "aragraphspay"),
    assertion(translatePigLatin("glove"), "oveglay"),
    assertion(translatePigLatin("algorithm"), "algorithmway"),
    assertion(translatePigLatin("eight"), "eightway"),
    assertion(translatePigLatin("schwartz"), "artzschway"),
    assertion(translatePigLatin("rhythm"), "rhythmay"),
  ];

  checkResults(tests, (left, right) => {
    console.log((left === right) ? "PASS" : `FAIL:\n\t${left}`);
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
    assertion(myReplace("Let us go to the store", "store", "mall"), "Let us go to the mall"),
    assertion(myReplace("He is Sleeping on the couch", "Sleeping", "sitting"), "He is Sitting on the couch"),
    assertion(myReplace("I think we should look up there", "up", "Down"), "I think we should look down there"),
    assertion(myReplace("This has a spellngi error", "spellngi", "spelling"), "This has a spelling error"),
    assertion(myReplace("His name is Tom", "Tom", "john"), "His name is John"),
    assertion(myReplace("Let us get back to more Coding", "Coding", "algorithms"), "Let us get back to more Algorithms"),
  ];

  checkResults(tests, (left, right) => {
    const pass = left === right;
    console.log((pass) ? "PASS" : `FAIL:\n\texpect: ${right}\n\tgot: ${left}`);
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
    assertion(pairElement("ATCGA"), [["A", "T"], ["T", "A"], ["C", "G"], ["G", "C"], ["A", "T"]]),
    assertion(pairElement("TTGAG"), [["T", "A"], ["T", "A"], ["G", "C"], ["A", "T"], ["G", "C"]]),
    assertion(pairElement("CTCTA"), [["C", "G"], ["T", "A"], ["C", "G"], ["T", "A"], ["A", "T"]]),
  ];

  checkResults(tests, (left, right) => {
    const x = JSON.stringify(left);
    const y = JSON.stringify(right);
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
    assertion(fearNotLetter("abce"), "d"),
    assertion(fearNotLetter("abcdefghjklmno"), "i"),
    assertion(fearNotLetter("stvwx"), "u"),
    assertion(fearNotLetter("bcdf"), "e"),
    assertion(fearNotLetter("abcdefghijklmnopqrstuvwxyz"), undefined),
  ];

  checkResults(tests, (left, right) => {
    console.log((left === right) ? "PASS" : `FAIL:\n\texpected: ${right}\n\tgot: ${left}`);
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
  const results = [
    assertion(uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]), [1, 3, 2, 5, 4]),
    assertion(uniteUnique([1, 2, 3], [5, 2, 1]), [1, 2, 3, 5]),
    assertion(uniteUnique([1, 2, 3], [5, 2, 1, 4], [2, 1], [6, 7, 8]), [1, 2, 3, 5, 4, 6, 7, 8]),
    assertion(uniteUnique([1, 3, 2], [5, 4], [5, 6]), [1, 3, 2, 5, 4, 6]),
    assertion(uniteUnique([1, 3, 2, 3], [5, 2, 1, 4], [2, 1]), [1, 3, 2, 5, 4]),
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
    assertion(convertHTML("Dolce & Gabbana"), "Dolce &amp; Gabbana"),
    assertion(convertHTML("Hamburgers < Pizza < Tacos"), "Hamburgers &lt; Pizza &lt; Tacos"),
    assertion(convertHTML("Sixty > twelve"), "Sixty &gt; twelve"),
    assertion(convertHTML("Stuff in \"quotation marks\""), "Stuff in &quot;quotation marks&quot;"),
    assertion(convertHTML("Schindler's List"), "Schindler&apos;s List"),
    assertion(convertHTML("<>"), "&lt;&gt;"),
    assertion(convertHTML("abc"), "abc"),
  ];

  checkResults(tests, (left, right) => {
    console.log((left === right) ? "PASS" : `FAIL\n\texpected: ${right}\n\tgot: ${left}`);
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
    assertion(sumFibs(1000), 1785),
    assertion(sumFibs(4000000), 4613732),
    assertion(sumFibs(4), 5),
    assertion(sumFibs(75024), 60696),
    assertion(sumFibs(75025), 135721),
  ];

  checkResults(tests, (left, right) => {
    console.log((left === right) ? "PASS" : `FAIL\n\texpected: ${right}\n\tgot: ${left}`);
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
    assertion(sumPrimes(10), 17),
    assertion(sumPrimes(977), 73156),
  ];

  checkResults(tests, (left, right) => {
    console.log((left === right) ? "PASS" : `FAIL\n\texpected: ${right}\n\tgot: ${left}`);
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
    assertion(smallestCommons([1, 5]), 60),
    assertion(smallestCommons([5, 1]), 60),
    assertion(smallestCommons([2, 10]), 2520),
    assertion(smallestCommons([1, 13]), 360360),
    assertion(smallestCommons([23, 18]), 6056820),
  ];

  checkResults(tests, (left, right) => {
    console.log((left === right) ? "PASS" : `FAIL:\n\texpected: ${right}\n\tgot: ${left}`);
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
    assertion(dropElements([1, 2, 3, 4], function(n) { return n >= 3; }), [3, 4]),
    assertion(dropElements([0, 1, 0, 1], function(n) { return n === 1; }), [1, 0, 1]),
    assertion(dropElements([1, 2, 3], function(n) { return n > 0; }), [1, 2, 3]),
    assertion(dropElements([1, 2, 3, 4], function(n) { return n > 5; }), []),
    assertion(dropElements([1, 2, 3, 7, 4], function(n) { return n > 3; }), [7, 4]),
    assertion(dropElements([1, 2, 3, 9, 2], function(n) { return n > 2; }), [3, 9, 2]),
  ];

  checkResults(tests, (left, right) => {
    const a = JSON.stringify(left);
    const b = JSON.stringify(right);
    console.log((a === b) ? "PASS" : `FAIL:\n\texpect: ${b}\n\tgot: ${a}`);
  });
}

function steamrollArray(arr) {
  return arr.reduce((flat, item) => {
    return flat.concat((Array.isArray(item)) ? steamrollArray(item) : item);
  }, []);
}

function ch16Handler() {
  const tests = [
    assertion(steamrollArray([[["a"]], [["b"]]]), ["a", "b"]),
    assertion(steamrollArray([1, [2], [3, [[4]]]]), [1, 2, 3, 4]),
    assertion(steamrollArray([1, [], [3, [[4]]]]), [1, 3, 4]),
    assertion(steamrollArray([1, {}, [3, [[4]]]]), [1, {}, 3, 4]),
  ];

  checkResults(tests, (left, right) => {
    const a = JSON.stringify(left);
    const b = JSON.stringify(right);
    console.log((a === b) ? "PASS" : `FAIL:\n\texpect: ${b}\n\tgot: ${a}`);
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
    assertion(binaryAgent("01000001 01110010 01100101 01101110 00100111 01110100 00100000 01100010 01101111 01101110 01100110 01101001 01110010 01100101 01110011 00100000 01100110 01110101 01101110 00100001 00111111"), "Aren't bonfires fun!?"),
    assertion(binaryAgent("01001001 00100000 01101100 01101111 01110110 01100101 00100000 01000110 01110010 01100101 01100101 01000011 01101111 01100100 01100101 01000011 01100001 01101101 01110000 00100001"), "I love FreeCodeCamp!"),
  ];

  checkResults(tests, (left, right) => {
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
    assertion(truthCheck([{ name: "Quincy", role: "Founder", isBot: false }, { name: "Naomi", role: "", isBot: false }, { name: "Camperbot", role: "Bot", isBot: true }], "isBot"), false),
    assertion(truthCheck([{ name: "Quincy", role: "Founder", isBot: false }, { name: "Naomi", role: "", isBot: false }, { name: "Camperbot", role: "Bot", isBot: true }], "name"), true),
    assertion(truthCheck([{ name: "Quincy", role: "Founder", isBot: false }, { name: "Naomi", role: "", isBot: false }, { name: "Camperbot", role: "Bot", isBot: true }], "role"), false),
    assertion(truthCheck([{ name: "Pikachu", number: 25, caught: 3 }, { name: "Togepi", number: 175, caught: 1 }], "number"), true),
    assertion(truthCheck([{ name: "Pikachu", number: 25, caught: 3 }, { name: "Togepi", number: 175, caught: 1 }, { name: "MissingNo", number: NaN, caught: 0 }], "caught"), false),
    assertion(truthCheck([{ name: "Pikachu", number: 25, caught: 3 }, { name: "Togepi", number: 175, caught: 1 }, { name: "MissingNo", number: NaN, caught: 0 }], "number"), false),
    assertion(truthCheck([{ name: "Quincy", username: "QuincyLarson" }, { name: "Naomi", username: "nhcarrigan" }, { name: "Camperbot" }], "username"), false),
    assertion(truthCheck([{ name: "freeCodeCamp", users: [{ name: "Quincy" }, { name: "Naomi" }] }, { name: "Code Radio", users: [{ name: "Camperbot" }] }, { name: "", users: [] }], "users"), true),
    assertion(truthCheck([{ id: 1, data: { url: "https://freecodecamp.org", name: "freeCodeCamp" } }, { id: 2, data: { url: "https://coderadio.freecodecamp.org/", name: "CodeRadio" } }, { id: null, data: {} }], "data"), true),
    assertion(truthCheck([{ id: 1, data: { url: "https://freecodecamp.org", name: "freeCodeCamp" } }, { id: 2, data: { url: "https://coderadio.freecodecamp.org/", name: "CodeRadio" } }, { id: null, data: {} }], "id"), false),
  ];

  checkResults(tests, (left, right) => {
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
    assertion(addTogether(2, 3), 5),
    assertion(addTogether(23, 30), 53),
    assertion(addTogether(5)(7), 12),
    assertion(addTogether("https://www.youtube.com/watch?v=dQw4w9WgXcQ"), undefined),
    assertion(addTogether(2, "3"), undefined),
    assertion(addTogether(2)([3]), undefined),
    assertion(addTogether("2", 3), undefined),
    assertion(addTogether(5, undefined), undefined),
  ];

  checkResults(tests, (left, right) => {
    console.log((left === right) ? "PASS" : `FAIL:\n\texpect: ${right}\n\tgot: ${left}`);
  });
}

// Fill in the object constructor with the following methods below:
const Person = function(firstAndLast) {
  let [_firstName, _lastName] = firstAndLast.split(" ");

  this.getFullName = () => {
    return `${_firstName} ${_lastName}`;
  }

  this.getFirstName = () => {
    return _firstName;
  }

  this.setFirstName = (firstName) => {
    _firstName = firstName;
  }

  this.getLastName = () => {
    return _lastName;
  }

  this.setLastName = (lastName) => {
    _lastName = lastName;
  }

  this.setFullName = (firstAndLast) => {
    [_firstName, _lastName] = firstAndLast.split(" ");
  }

  return firstAndLast;
}

function ch20Handler() {
  const bob = new Person("Bob Ross");
  bob.getFullName();

  const tests = [
    assertion(bob instanceof Person, true),
    assertion(bob.firstName, undefined),
    assertion(bob.lastName, undefined),
    assertion(bob.getFirstName(), "Bob"),
    assertion(bob.getLastName(), "Ross"),
    assertion(bob.getFullName(), "Bob Ross"),
  ];

  bob.setFirstName("Haskell");
  tests.push(assertion(bob.getFullName(), "Haskell Ross"));

  bob.setLastName("Curry");
  tests.push(assertion(bob.getFullName(), "Haskell Curry"));

  bob.setFullName("Haskell Curry");
  tests.push(assertion(bob.getFullName(), "Haskell Curry"));

  tests.push(assertion(bob.getFirstName(), "Haskell"));
  tests.push(assertion(bob.getLastName(), "Curry"));

  checkResults(tests, (left, right) => {
    console.log((left === right) ? "PASS" : `FAIL:\n\texpected: ${right}\n\tgot: ${left}`);
  });
}

function ch21Handler() {
  console.log("TODO");
}
