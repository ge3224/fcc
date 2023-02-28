import * as Basics from "./basics";

document.querySelector('#app').innerHTML = `
  <div>
    <h1>Redux Basics</h1>
    <ul>
      <li><a href="#" id="${Basics.PART_1}">Challenges 1-4</a></li>
      <li><a href="#" id="${Basics.PART_2}">Challenge 5</a></li>
      <li><a href="#" id="${Basics.PART_3}">Challenge 6</a></li>
    </ul>
  </div>
`;

function ready() {
  const targets = [
    [Basics.PART_1, Basics.challenges1To4],
    [Basics.PART_2, Basics.challenge5],
    [Basics.PART_3, Basics.challenge6],
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
