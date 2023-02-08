// tabs is an array of titles of each site open within the window
const Window = function(tabs) {
  this.tabs = tabs; // We keep a record of the array inside the object
};

// When you join two windows into one window
Window.prototype.join = function(otherWindow) {
  this.tabs = this.tabs.concat(otherWindow.tabs);
  return this;
};

// When you open a new tab at the end
Window.prototype.tabOpen = function(tab) {
  this.tabs.push('new tab'); // Let's open a new tab for now
  return this;
};

// When you close a tab
Window.prototype.tabClose = function(index) {
  const tabsBeforeIndex = this.tabs.slice(0, index); // Get the tabs before the tab
  const tabsAfterIndex = this.tabs.slice(index + 1); // Get the tabs after the tab
  this.tabs = tabsBeforeIndex.concat(tabsAfterIndex); // Join them together
  return this;
};

function tabsChallengeHandler() {
  // Let's create three browser windows
  const workWindow = new Window(['GMail', 'Inbox', 'Work mail', 'Docs', 'freeCodeCamp']); // Your mailbox, drive, and other work sites
  const socialWindow = new Window(['FB', 'Gitter', 'Reddit', 'Twitter', 'Medium']); // Social sites
  const videoWindow = new Window(['Netflix', 'YouTube', 'Vimeo', 'Vine']); // Entertainment sites

  // Now perform the tab opening, closing, and other operations
  const finalTabs = socialWindow
    .tabOpen() // Open a new tab for cat memes
    .join(videoWindow.tabClose(2)) // Close third tab in video window, and join
    .join(workWindow.tabClose(1).tabOpen());
  console.log(finalTabs.tabs);

  /*
  assertion: [
    'FB',
    'Gitter',
    'Reddit',
    'Twitter',
    'Medium',
    'new tab',
    'Netflix',
    'YouTube',
    'Vine',
    'GMail',
    'Work mail',
    'Docs',
    'freeCodeCamp',
    'new tab'
  ]
  */
}

/**
  * Complete the code for the squareList function using any combination of map(),
  * filter(), and reduce(). The function should return a new array containing the
  * squares of only the positive integers (decimal numbers are not integers) when
  * an array of real numbers is passed to it. An example of an array of real numbers
  * is [-3, 4.8, 5, 3, -3.2].
  */
const squareList = (arr) => {
  const newArr = arr.filter(item => item > 0)
    .filter(item => item % 1 === 0)
    .map(item => Math.pow(item, 2));
  return newArr;
};

function challenge16() {
  const tests = [
    [[4, 5.6, -9.8, 3.14, 42, 6, 8.34, -2], [16, 1764, 36]],
    [[-3.7, -5, 3, 10, 12.5, 7, -4.5, -17, 0.3], [9, 100, 49]],
  ];

  tests.forEach(args => {
    const result = squareList(args[0]);
    let passing = "PASS";
    for (let i = 0; i < result.length; i++) {
      if (result[i] !== args[1][i]) {
        passing = "FAIL";
        break;
      }
    }
    console.log(result, passing);
  });
}

function urlSlug(title) {
  const arr = title.split(" ")
    .filter(item => item !== "" && item !== " ");
  return arr.join("-").toLowerCase();
}

function challenge21() {
  const tests = [
    ["Winter Is Coming", "winter-is-coming"],
    [" Winter Is  Coming", "winter-is-coming"],
    ["A Mind Needs Books Like A Sword Needs A Whetstone", "a-mind-needs-books-like-a-sword-needs-a-whetstone"],
    ["Hold The Door", "hold-the-door"],
  ];

  tests.forEach(args => {
    const result = urlSlug(args[0]);
    const passing = (result !== args[1]) ? "FAIL" : "PASS";
    console.log(result, passing);
  });
}

// currying
function add(x) {
  return (y) => (z) => x + y + z;
}

function challenge24() {
  // console.log(add(10)(20)(30));
  const phase1 = add(10);
  const phase2 = phase1(20);
  console.log(phase2(30));
}

// initialize
(() => {
  const ids = [
    ["022", tabsChallengeHandler],
    ["023", challenge16],
    ["024", challenge21],
    ["025", challenge24],
  ];

  ids.map(item => {
    const el = document.getElementById(item[0]);
    if (el !== null && el !== undefined && el !== void 0) {
      el.addEventListener("click", item[1]);
    }
  });
})();
