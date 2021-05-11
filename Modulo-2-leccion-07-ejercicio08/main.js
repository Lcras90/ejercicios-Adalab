const classes = document.querySelectorAll("button");
const corp = document.querySelector(".js-container");
const button1 = document.querySelector(".button1");
const button2 = document.querySelector(".button2");
const button3 = document.querySelector(".button3");

function handlerButton() {
  corp.classList.toggle("backred");
}
button1.addEventListener("click", handlerButton);
button2.addEventListener("click", handlerButton);
button3.addEventListener("click", handlerButton);
