import { assertion, checkResults } from "./util";

export function FinalProjects() {
  const elementsAndListeners = [
    ["cp_1", cp1Handler],
    ["cp_2", cp2Handler],
    ["cp_3", cp3Handler],
    ["cp_4", cp4Handler],
    ["cp_5", cp5Handler],
  ];

  elementsAndListeners.forEach(item => {
    const el = document.getElementById(item[0]);
    if (el !== null && el !== undefined && el !== void 0) {
      el.addEventListener("click", item[1]);
    }
  });
}

// Return true if the given string is a palindrome. Otherwise, return false),
//
// A palindrome is a word or sentence that's spelled the same way both forward 
// and backward, ignoring punctuation, case, and spacing),
//
// Note: You'll need to remove all non-alphanumeric characters (punctuation, 
// spaces and symbols) and turn everything into the same case (lower or upper 
// case) in order to check for palindromes),
//
// We'll pass strings with varying formats, such as racecar, RaceCar, and race 
// CAR among others),
//
// We'll also pass strings with special symbols, such as 2A3*3a2, 2A3 3a2, 
// and 2_A3*3#A2),
function palindrome(str) {
  const sanitized = str.replace(/\W/g, "")
    .replace("_", "")
    .toLowerCase();

  let reversed = "";
  for (let i = sanitized.length - 1; i >= 0; i--) {
    reversed += sanitized[i];
  }
  return sanitized === reversed;
}

function cp1Handler() {
  const tests = [
    assertion(palindrome("eye"), true),
    assertion(palindrome("_eye"), true),
    assertion(palindrome("race car"), true),
    assertion(palindrome("not a palindrome"), false),
    assertion(palindrome("A man, a plan, a canal. Panama"), true),
    assertion(palindrome("never odd or even"), true),
    assertion(palindrome("nope"), false),
    assertion(palindrome("almostomla"), false),
    assertion(palindrome("My age is 0, 0 si ega ym."), true),
    assertion(palindrome("1 eye for of 1 eye."), false),
    assertion(palindrome("0_0 (: /-\ :) 0-0"), true),
    assertion(palindrome("five|\_/|four"), false),
  ];

  checkResults(tests, (left, right) => {
    console.log((left === right) ? "PASS" : `FAIL:\n\texpected: ${right}\n\tgot: ${left}`);
  });
}


// Convert the given number into a roman numeral. All roman numerals answers 
// should be provided in upper-case.
function convertToRoman(num) {
  switch (true) {
    case (num < 1):
      return "";
    case (num < 4):
      return "I".repeat(num);
    case (num < 5):
      return "IV";
    case (num < 9):
      return "V" + convertToRoman(num - 5);
    case (num < 10):
      return "IX";
    case (num < 40):
      return "X".repeat(num / 10) + convertToRoman(num % 10);
    case (num < 50):
      return "XL" + convertToRoman(num - 40);
    case (num < 90):
      return "L" + convertToRoman(num - 50);
    case (num < 100):
      return "XC" + convertToRoman(num - 90);
    case (num < 400):
      return "C".repeat(num / 100) + convertToRoman(num % 100);
    case (num < 500):
      return "CD" + convertToRoman(num - 400);
    case (num < 900):
      return "D" + convertToRoman(num - 500);
    case (num < 1000):
      return "CM" + convertToRoman(num - 900);
    default:
      return "M".repeat(num/1000) + convertToRoman(num % 1000);
  }
}


function cp2Handler() {
  const tests = [
    assertion(convertToRoman(2), "II"),
    assertion(convertToRoman(3), "III"),
    assertion(convertToRoman(4), "IV"),
    assertion(convertToRoman(5), "V"),
    assertion(convertToRoman(6), "VI"),
    assertion(convertToRoman(7), "VII"),
    assertion(convertToRoman(8), "VIII"),
    assertion(convertToRoman(9), "IX"),
    assertion(convertToRoman(12), "XII"),
    assertion(convertToRoman(16), "XVI"),
    assertion(convertToRoman(29), "XXIX"),
    assertion(convertToRoman(44), "XLIV"),
    assertion(convertToRoman(45), "XLV"),
    assertion(convertToRoman(53), "LIII"),
    assertion(convertToRoman(68), "LXVIII"),
    assertion(convertToRoman(83), "LXXXIII"),
    assertion(convertToRoman(97), "XCVII"),
    assertion(convertToRoman(99), "XCIX"),
    assertion(convertToRoman(100), "C"),
    assertion(convertToRoman(103), "CIII"),
    assertion(convertToRoman(143), "CXLIII"),
    assertion(convertToRoman(400), "CD"),
    assertion(convertToRoman(500), "D"),
    assertion(convertToRoman(501), "DI"),
    assertion(convertToRoman(649), "DCXLIX"),
    assertion(convertToRoman(798), "DCCXCVIII"),
    assertion(convertToRoman(891), "DCCCXCI"),
    assertion(convertToRoman(1000), "M"),
    assertion(convertToRoman(1004), "MIV"),
    assertion(convertToRoman(1006), "MVI"),
    assertion(convertToRoman(1023), "MXXIII"),
    assertion(convertToRoman(2014), "MMXIV"),
    assertion(convertToRoman(3999), "MMMCMXCIX"),
  ];

  checkResults(tests, (left, right) => {
    console.log((left === right) ? "PASS" : `FAIL:\n\texpected: ${right}\n\tgot: ${left}`);
  });
}

function cp3Handler() {
  console.log("Hello, from cp3!");
}

function cp4Handler() {
  console.log("Hello, from cp4!");
}

function cp5Handler() {
  console.log("Hello, from cp5!");
}
