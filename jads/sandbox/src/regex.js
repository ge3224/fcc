function lookaheadExample() {
  let password = "abc123";
  let checkPass = /(?=\w{3,6})(?=\D*\d)/;
  console.log(`checkPass: ${checkPass.test(password)}`);
}

export const RegularExpressions = () => {
  const third = document.getElementById("003");
  if (third !== null && third !== undefined && third !== void 0) {
    third.addEventListener("click", lookaheadExample);
  }
}
