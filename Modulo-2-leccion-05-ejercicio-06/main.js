let textInput = document.querySelector(".js-textInput");
let paragraph6 = document.querySelector(".js-paragraph6");
function inputChange(event) {
  let value = event.currentTarget.value;
  paragraph6.innerText = value;
}
textInput.addEventListener("change", inputChange);
