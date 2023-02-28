import * as Basics from "./basics";

document.querySelector('#app').innerHTML = `
  <div>
    <h1>Redux Basics</h1>
    <ul>
      <li><a href="#" id="${Basics.CH_1}">Challenge 1</a></li>
      <li><a href="#" id="${Basics.CH_2}">Challenge 2</a></li>
      <li><a href="#" id="${Basics.CH_3}">Challenge 3</a></li>
      <li><a href="#" id="${Basics.CH_4}">Challenge 4</a></li>
      <li><a href="#" id="${Basics.CH_5}">Challenge 5</a></li>
      <li><a href="#" id="${Basics.CH_6}">Challenge 6</a></li>
      <li><a href="#" id="${Basics.CH_7}">Challenge 7</a></li>
      <li><a href="#" id="${Basics.CH_8}">Challenge 8</a></li>
    </ul>
  </div>
`;

function ready() {
  const targets = [
    [Basics.CH_1, Basics.challenge1],
    [Basics.CH_2, Basics.challenge2],
    [Basics.CH_3, Basics.challenge3],
    [Basics.CH_4, Basics.challenge4],
    [Basics.CH_5, Basics.challenge5],
    [Basics.CH_6, Basics.challenge6],
    [Basics.CH_7, Basics.challenge7],
    [Basics.CH_8, Basics.challenge8],
  ];

  targets.forEach(target => {
    const el = document.querySelector(`#${target[0]}`)
    if (el !== null && el !== undefined && el !== void 0) {
      el.addEventListener("click", target[1]);
    }
  });
}

if (document.readyState == 'loading') {
  document.addEventListener("DOMContentLoaded", ready);
} else {
  ready()
}
