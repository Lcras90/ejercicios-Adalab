const classes = document.querySelectorAll("button");
const corp = document.querySelector(".js-container");

function handlerButton() {
  corp.classList.toggle("backred");
}
// classes[0].addEventListener("click", handlerButton);
// classes[1].addEventListener("click", handlerButton);
// classes[2].addEventListener("click", handlerButton);
for (let i = 0; i < classes.length; i++) {
  classes[i].addEventListener("click", handlerButton);
}
