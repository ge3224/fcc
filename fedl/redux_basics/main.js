import * as Basics from "./basics";
import * as Counter from "./counter";
import * as State from "./state_management";

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
      <li><a href="#" id="${Basics.CH_9}">Challenge 9</a></li>
      <li><a href="#" id="${Basics.CH_10}">Challenge 10</a></li>
      <li><a href="#" id="${Basics.CH_11}">Challenge 11</a></li>
      <li><a href="#" id="${Basics.CH_12}">Challenge 12</a></li>
      <li><a href="#" id="${Counter.CH_13}">Challenge 13</a></li>
      <li><a href="#" id="${State.CH_14}">Challenge 14</a></li>
      <li><a href="#" id="${State.CH_15}">Challenge 15</a></li>
      <li><a href="#" id="${State.CH_16}">Challenge 16</a></li>
      <li><a href="#" id="${State.CH_17}">Challenge 17</a></li>
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
    [Basics.CH_9, Basics.challenge9],
    [Basics.CH_10, Basics.challenge10],
    [Basics.CH_11, Basics.challenge11],
    [Basics.CH_12, Basics.challenge12],
    [Counter.CH_13, Counter.challenge13],
    [State.CH_14, State.challenge14],
    [State.CH_15, State.challenge15],
    [State.CH_16, State.challenge16],
    [State.CH_17, State.challenge17],
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
