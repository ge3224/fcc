function celsiusToFahrenheit() {
  let c = 30;
  let f = c * 9.0 / 5 + 32;
  console.log(c, f);
}

function init() {
  const fifth = document.getElementById("005");
  if (fifth !== null && fifth !== undefined && fifth !== void 0) {
    fifth.addEventListener("click", celsiusToFahrenheit);
  }
}

init();
