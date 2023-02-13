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
      return "M".repeat(num / 1000) + convertToRoman(num % 1000);
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

// One of the simplest and most widely known ciphers is a Caesar cipher, also 
// known as a shift cipher. In a shift cipher the meanings of the letters are 
// shifted by some set amount.
//
// A common modern use is the ROT13 cipher, where the values of the letters are 
// shifted by 13 places. Thus A ↔ N, B ↔ O and so on.
//
// Write a function which takes a ROT13 encoded string as input and returns a 
// decoded string.
//
// All letters will be uppercase. Do not transform any non-alphabetic character 
// (i.e. spaces, punctuation), but do pass them on.
function rot13(str) {
  let newStr = "";
  for (let i = 0; i < str.length; i++) {
    const code = str[i].charCodeAt(0);
    // 65 is "A" and 90 is "Z"
    if (code < 65 || code > 90) {
      newStr += str[i];
    } else {
      let decoded = code + 13;
      if (code + 13 > 90) {
        decoded = decoded - 90 + 64;
      }
      newStr += String.fromCharCode(decoded);
    }
  }
  return newStr;
}

function cp3Handler() {
  const tests = [
    assertion(rot13("SERR PBQR PNZC"), "FREE CODE CAMP"),
    assertion(rot13("SERR CVMMN!"), "FREE PIZZA!"),
    assertion(rot13("SERR YBIR?"), "FREE LOVE?"),
    assertion(rot13("GUR DHVPX OEBJA SBK WHZCF BIRE GUR YNML QBT."), "THE QUICK BROWN FOX JUMPS OVER THE LAZY DOG."),
  ];

  checkResults(tests, (left, right) => {
    console.log((left === right) ? "PASS" : `FAIL:\n\texpected: ${right}\n\tgot: ${left}`);
  });
}


// Return true if the passed string looks like a valid US phone number.
//
// The user may fill out the form field any way they choose as long as it has 
// the format of a valid US number. The following are examples of valid formats 
// for US numbers (refer to the tests below for other variants):
//
// 555-555-5555
// (555)555-5555
// (555) 555-5555
// 555 555 5555
// 5555555555
// 1 555 555 5555
//
// For this challenge you will be presented with a string such as 800-692-7753 
// or 8oo-six427676;laskdjf. Your job is to validate or reject the US phone 
// number based on any combination of the formats provided above. The area code 
// is required. If the country code is provided, you must confirm that the 
// country code is 1. Return true if the string is a valid US phone number; 
// otherwise return false.
function telephoneCheck(str) {
  let reg = /^(1)?(\s)?(\d{3}|\(\d{3}\))(\s|-|\.)?(\d{3})(\s|-|\.)?(\d{4})$/;
  return reg.test(str);
}

function cp4Handler() {
  const tests = [
    assertion(telephoneCheck("1 555-555-5555"), true),
    assertion(telephoneCheck("1 (555) 555-5555"), true),
    assertion(telephoneCheck("5555555555"), true),
    assertion(telephoneCheck("555-555-5555"), true),
    assertion(telephoneCheck("(555)555-5555"), true),
    assertion(telephoneCheck("1(555)555-5555"), true),
    assertion(telephoneCheck("555-5555"), false),
    assertion(telephoneCheck("5555555"), false),
    assertion(telephoneCheck("1 555)555-5555"), false),
    assertion(telephoneCheck("1 555 555 5555"), true),
    assertion(telephoneCheck("1 456 789 4444"), true),
    assertion(telephoneCheck("123**&!!asdf#"), false),
    assertion(telephoneCheck("55555555"), false),
    assertion(telephoneCheck("(6054756961)"), false),
    assertion(telephoneCheck("2 (757) 622-7382"), false),
    assertion(telephoneCheck("0 (757) 622-7382"), false),
    assertion(telephoneCheck("-1 (757) 622-7382"), false),
    assertion(telephoneCheck("2 757 622-7382"), false),
    assertion(telephoneCheck("10 (757) 622-7382"), false),
    assertion(telephoneCheck("27576227382"), false),
    assertion(telephoneCheck("(275)76227382"), false),
    assertion(telephoneCheck("2(757)6227382"), false),
    assertion(telephoneCheck("2(757)622-7382"), false),
    assertion(telephoneCheck("555)-555-5555"), false),
    assertion(telephoneCheck("(555-555-5555"), false),
    assertion(telephoneCheck("(555)5(55?)-5555"), false),
    assertion(telephoneCheck("55 55-55-555-5"), false),
    assertion(telephoneCheck("11 555-555-5555"), false),
  ];

  checkResults(tests, (left, right) => {
    console.log((left === right) ? "PASS" : `FAIL:\n\texpected: ${right}\n\tgot: ${left}`);
  });
}

// Design a cash register drawer function checkCashRegister() that accepts 
// purchase price as the first argument (price), payment as the second argument 
// (cash), and cash-in-drawer (cid) as the third argument.
//
// cid is a 2D array listing available currency.
//
// The checkCashRegister() function should always return an object with a 
// status key and a change key.
//
// Return {status: "INSUFFICIENT_FUNDS", change: []} if cash-in-drawer is less 
// than the change due, or if you cannot return the exact change.
//
// Return {status: "CLOSED", change: [...]} with cash-in-drawer as the value 
// for the key change if it is equal to the change due.
//
// Otherwise, return {status: "OPEN", change: [...]}, with the change due in 
// coins and bills, sorted in highest to lowest order, as the value of the 
// change key.
//
// | Currency Unit	      | Amount             |
// |----------------------|--------------------|
// | Penny	              | $0.01 (PENNY)      |
// | Nickel	              | $0.05 (NICKEL)     |
// | Dime	                | $0.1 (DIME)        |
// | Quarter	            | $0.25 (QUARTER)    |
// | Dollar	              | $1 (ONE)           |
// | Five Dollars	        | $5 (FIVE)          |
// | Ten Dollars	        | $10 (TEN)          |
// | Twenty Dollars	      | $20 (TWENTY)       |
// | One-hundred Dollars	| $100 (ONE HUNDRED) |
//
function checkCashRegister(price, cash, cid) {

  const change = [];

  const coinsAndBills = {
    "ONE HUNDRED": 100,
    "TWENTY": 20,
    "TEN": 10,
    "FIVE": 5,
    "ONE": 1,
    "QUARTER": 0.25,
    "DIME": 0.1,
    "NICKEL": 0.05,
    "PENNY": 0.01,
  }

  const messages = {
    open: "OPEN",
    closed: "CLOSED",
    insufficient: "INSUFFICIENT_FUNDS",
  }

  // determine how much change is owed.
  let owe = +((cash - price).toFixed(2));

  // check cash register for sufficient funds
  let cashInDrawer = cid.reduce((subtotal, slot) => {
    const divisible = owe / coinsAndBills[slot[0]];
    if (divisible > 1) {
      subtotal += slot[1];
    }
    return +(subtotal.toFixed(2));
  }, 0);

  if (cashInDrawer < owe) {
    return {
      status: messages.insufficient,
      change: change,
    }
  }

  if (cashInDrawer === owe) {
    return {
      status: messages.closed,
      change: cid,
    };
  }

  // calculate change
  const drawer = {};
  cid.forEach(slot => {
    const prop = slot[0];
    drawer[prop] = slot[1];
  });

  for (let type in coinsAndBills) {
    const divisor = coinsAndBills[type];

    if (owe >= divisor) {
      const subtotal = [type];
      if (owe <= drawer[type]) {
        if (owe % divisor === 0) {
          subtotal.push(owe);
          change.push(subtotal);
          break;
        }

        const deduct = divisor * Math.floor(owe / divisor);
        subtotal.push(deduct);
        owe = +((owe - deduct).toFixed(2));
        change.push(subtotal);

      } else {
        subtotal.push(drawer[type]);
        owe = +((owe - drawer[type]).toFixed(2));
        change.push(subtotal);
      }
    }
  }

  return {
    status: messages.open,
    change: change,
  }
}

function cp5Handler() {
  const tests = [
    assertion(checkCashRegister(19.5, 20, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]]), { status: "OPEN", change: [["QUARTER", 0.5]] }),
    assertion(checkCashRegister(3.26, 100, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]]), { status: "OPEN", change: [["TWENTY", 60], ["TEN", 20], ["FIVE", 15], ["ONE", 1], ["QUARTER", 0.5], ["DIME", 0.2], ["PENNY", 0.04]] }),
    assertion(checkCashRegister(19.5, 20, [["PENNY", 0.01], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 0], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]]), { status: "INSUFFICIENT_FUNDS", change: [] }),
    assertion(checkCashRegister(19.5, 20, [["PENNY", 0.01], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 1], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]]), { status: "INSUFFICIENT_FUNDS", change: [] }),
    assertion(checkCashRegister(19.5, 20, [["PENNY", 0.5], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 0], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]]), { status: "CLOSED", change: [["PENNY", 0.5], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 0], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]] }),
  ];

  checkResults(tests, (left, right) => {
    const a = JSON.stringify(left);
    const b = JSON.stringify(right);
    console.log((a === b) ? "PASS" : `FAIL:\n\texpected: ${b}\n\tgot: ${a}`);
  });
}
