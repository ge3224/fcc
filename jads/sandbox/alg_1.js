function celsiusToFahrenheit() {
  const c = 30;
  const f = c * 9.0 / 5 + 32;
  console.log(c, f);
}

function reverseString() {
  const str = "hello";
  let result = "";
  for (let i = str.length - 1; i >= 0; i--) {
    result += str[i];
  }
  console.log(str, result);
}

function factorialize() {
  const start = 5;
  let result = 1;
  for (let i = 0; i < start; i++) {
    result *= i + 1;
  }
  console.log(start, result);
}

function findLongestWord(str) {
  const regex = /(\w+)/g;
  const words = str.match(regex);
  let longest = 0;
  for (let i = 0; i < words.length; i++) {
    if (words[i].length > longest) {
      longest = words[i].length;
    }
  }
  return longest;
}

function findLongestWordHandler() {
  const tests = [
    "The quick brown fox jumped over the lazy dog",
    "May the force be with you",
    "Google do a barrel roll",
    "What is the average airspeed velocity of an unladen swallow",
    "What if we try a super-long word such as otorhinolaryngology",
  ]

  tests.forEach(str => {
    console.log(`longest word: ${findLongestWord(str)} chars`);
  });
}

function largestNumber(arr) {
  let newArr = [];
  for (let i = 0; i < arr.length; i++) {
    let largest;
    for (let j = 0; j < arr[i].length; j++) {

      if (!largest) {
        largest = arr[i][j];
      }

      if (arr[i][j] > largest) {
        largest = arr[i][j];
      }
    }
    newArr.push(largest);
  }

  return newArr;
}

function largestNumberHandler() {
  const tests = [
    [[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]],
    [[13, 27, 18, 26], [4, 5, 1, 3], [32, 35, 37, 39], [1000, 1001, 857, 1]],
    [[4, 9, 1, 3], [13, 35, 18, 26], [32, 35, 97, 39], [1000000, 1001, 857, 1]],
    [[17, 23, 25, 12], [25, 7, 34, 48], [4, -10, 18, 21], [-72, -3, -17, -10]],
  ]

  tests.forEach(arr => {
    console.log(largestNumber(arr));
  });
}

function confirmEnding(str, target) {
  const ending = str.slice(str.length - target.length, str.length);
  if (ending === target) {
    return true;
  }
  return false;
}

function confirmEndingHandler() {
  const tests = [
    ["Bastian", "n"],
    ["Congratulation", "on"],
    ["Connor", "n"],
    ["Walking on water and developing software from a specification are easy if both are frozen", "specification"],
    ["He has to give me a new name", "name"],
    ["Open sesame", "same"],
    ["Open sesame", "sage"],
    ["Open sesame", "game"],
    ["If you want to save our world, you must hurry. We dont know how much longer we can withstand the nothing", "mountain"],
    ["Abstraction", "action"],
  ]

  tests.forEach(args => {
    console.log(confirmEnding(args[0], args[1]));
  });
}

function repeatStringNumTimes(str, num) {
  let newStr = "";

  if (num <= 0) {
    return newStr;
  }

  for (let i = 0; i < num; i++) {
    newStr += str;
  }

  return newStr;
}

function stringRepeatHandler() {
  const tests = [
    ["*", 3],
    ["abc", 3],
    ["abc", 4],
    ["abc", 1],
    ["*", 8],
    ["abc", -2],
    ["abc", 0],
  ]

  tests.forEach(args => {
    console.log(repeatStringNumTimes(args[0], args[1]));
  });
}

function truncateString(str, num) {
  if (str.length <= num || num <= 0) {
    return str;
  }
  return `${str.slice(0, num)}...`;
}

function truncateStringHandler() {
  const tests = [
    ["A-tisket a-tasket A green and yellow basket", 8],
    ["Peter Piper picked a peck of pickled peppers", 11],
    ["A-tisket a-tasket A green and yellow basket", "A-tisket a-tasket A green and yellow basket".length],
    ["A-tisket a-tasket A green and yellow basket", "A-tisket a-tasket A green and yellow basket".length + 2],
    ["A-", 1],
    ["Absolutely Longer", 2],
  ]

  tests.forEach(args => {
    console.log(truncateString(args[0], args[1]));
  });
}

function findElement(arr, func) {
  for (let i = 0; i < arr.length; i++) {
    if (func(arr[i])) {
      return arr[i];
    }
  }
  return undefined;
}

function findElementHandler() {
  const tests = [
    [[1, 3, 5, 8, 9, 10], function(num) { return num % 2 === 0; }],
    [[1, 3, 5, 9], function(num) { return num % 2 === 0; }],
  ];

  tests.forEach(args => {
    console.log(findElement(args[0], args[1]));
  });
}

function booWho(bool) {
  if (typeof bool === "boolean") {
    return true;
  }
  return false;
}

function booWhoHandler() {
  const tests = [
    true,
    false,
    [1, 2, 3],
    [].slice,
    { "a": 1 },
    1,
    NaN,
    "a",
    "true",
    "false",
  ]
  tests.forEach(arg => {
    console.log(booWho(arg));
  });
}

function init() {
  const ids = [
    ["005", celsiusToFahrenheit],
    ["006", reverseString],
    ["007", factorialize],
    ["008", findLongestWordHandler],
    ["009", largestNumberHandler],
    ["010", confirmEndingHandler],
    ["011", stringRepeatHandler],
    ["012", truncateStringHandler],
    ["013", findElementHandler],
    ["014", booWhoHandler],
  ];

  for (let i = 0; i < ids.length; i++) {
    const el = document.getElementById(ids[i][0]);
    if (el !== null && el !== undefined && el !== void 0) {
      el.addEventListener("click", ids[i][1]);
    }
  }
}

init();
