function celsiusToFahrenheit() {
  const c = 30;
  const f = c * 9.0 / 5 + 32;
  console.log(c, f);
}

function reverseAString() {
  const str = "hello";
  let result = "";
  for (let i = str.length - 1; i >= 0; i--) {
    result += str[i];
  }
  console.log(str, result);
}

function factorializeANumber() {
  const num = 5;
  let result = 0;
  console.log(result);
}

function init() {
  const ids = [
    ["005", celsiusToFahrenheit],
    ["006", reverseAString],
    ["007", factorializeANumber],
  ];

  for (let i=0; i<ids.length; i++) {
    const el = document.getElementById(ids[i][0]);
    if (el !== null && el !== undefined && el !== void 0) {
      el.addEventListener("click", ids[i][1]);
    }
  }
}

init();
