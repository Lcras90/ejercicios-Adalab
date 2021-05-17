const page = document.querySelector("body");
const input1 = document.getElementById("select1");
const input2 = document.getElementById("select2");
let inputsGeneral = document.querySelectorAll(".js-input");

function changeTheme(ev) {
  let inputValue = ev.target.value;
  if (inputValue === "1") {
    page.classList.add("light");
  } else if (inputValue === "2") {
    page.classList.add("dark");
  }
}

inputsGeneral[0].addEventListener("change", changeTheme);
inputsGeneral[1].addEventListener("change", changeTheme);
