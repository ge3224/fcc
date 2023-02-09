// assertion returns an object holding a result and a test.
export function assertion(result, expectation) {
  return {
    result: result,
    expectation: expectation,
  }
}

// checkResults is a helper function for testing solutions for 
// various fcc challenges. 
export function checkResults(assertions, callback) {
  if (!Array.isArray(assertions)) {
    console.error(`testsArr is not an array.`);
    return;
  }

  if (typeof callback !== "function") {
    console.error(`callback is not a function`);
  }

  assertions.forEach(item => {
    callback(item.result, item.expectation);
  });
}

// check if two objects are corresponding
export function areCorresponding(obj1, obj2) {
  let ok = true;
  for (let prop in obj2) {
    if (obj1[prop] !== obj2[prop]) {
      ok = false;
      break;
    }
  }
  return ok;
}

// check is two arrays are matching
export function areMatching(arr1, arr2) {
  let ok = true;

  if (arr1.length !== arr2.length) {
    return false;
  }

  for (let i = 0; i < arr1.length; i++) {
    if (Array.isArray(arr1[i]) && Array.isArray(arr2[i])) {
      const inner = areMatching(arr1[i], arr2[i]);
      if (!inner) {
        ok = false;
        break;
      }
    }

    if (typeof arr1[i] === "object" && typeof arr2[i] === "object") {
      const inner = areCorresponding(arr1[i], arr2[i]);
      if (!inner) {
        ok = false;
        break;
      }
    }

    if (arr1[i] !== arr2[i]) {
      ok = false;
      break;
    }
  }

  return ok
}
