const inpuT = document.querySelector(".js-input");
const paragraph = document.querySelector(".js-paragraph");

function changeName(ev) {
  let inputValue = ev.target.value;
  paragraph.innerText = inputValue;
  localStorage.setItem("name", inputValue);
}

inpuT.addEventListener("keyup", changeName);

const reloadName = localStorage.getItem("name");
paragraph.innerText = reloadName;
inpuT.value = reloadName;
