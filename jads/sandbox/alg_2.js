
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
    let passing = true;
    for (let i = 0; i < result.length; i++) {
      if (result[i] !== args[2][i]) {
        passing = false;
        break;
      } 
    }
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

function printResults(result, passing, assertion, label = "Output") {
  const testMessage = (passing) ? "PASS" : `FAIL, should be: "${assertion}"`;
  console.log(`${label}: ${result}\n::${testMessage}`);
}

(() => {
  const ids = [
    ["026", ch1Handler],
    ["027", ch2Handler],
  ];

  ids.map(item => {
    const el = document.getElementById(item[0]);
    if (el !== null && el !== undefined && el !== void 0) {
      el.addEventListener("click", item[1]);
    }
  });
})();
