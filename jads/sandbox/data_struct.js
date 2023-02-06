const users = {
  Alan: {
    online: false
  },
  Jeff: {
    online: true
  },
  Sarah: {
    online: false
  }
}

function countOnline(usersObj) {
  let usersOnline = 0;
  for (let user in usersObj) {
    console.log(usersObj[user]);
    if (usersObj[user]["online"] === true) {
      usersOnline++;
    }
  }
  return usersOnline;
}


function doit() {
  console.log(countOnline(users));
}

function init() {
  const fourth = document.getElementById("004");
  if (fourth !== null && fourth !== undefined && fourth !== void 0) {
    fourth.addEventListener("click", doit);
  }
}

init();
