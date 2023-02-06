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

function init() {
  const fifth = document.getElementById("005");
  if (fifth !== null && fifth !== undefined && fifth !== void 0) {
    fifth.addEventListener("click", celsiusToFahrenheit);
  }

  const sixth = document.getElementById("006");
  if (sixth !== null && sixth !== undefined && sixth !== void 0) {
    sixth.addEventListener("click", reverseAString);
  }
}

init();
