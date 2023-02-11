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

function cp1Handler() {
  console.log("Hello, World!");
}

function cp2Handler() {
  console.log("Hello, World!");
}

function cp3Handler() {
  console.log("Hello, World!");
}

function cp4Handler() {
  console.log("Hello, World!");
}

function cp5Handler() {
  console.log("Hello, World!");
}
