const list = document.querySelector(".js-list");
const textColor = ["white", "red", "orange", "green", "pink", "yellow"];

function createLi() {
  for (i = 0; i < 100; i++) {
    const liElement = document.createElement("li");
    const textElement = document.createTextNode("blablablablabla");
    liElement.appendChild(textElement);
    list.appendChild(liElement);
    const selectElement = document.createElement("select");
    list.appendChild(selectElement);
    for (const color of textColor) {
      const optSelect = document.createElement("option");
      const optColor = document.createTextNode(color);
      optSelect.appendChild(optColor);
      selectElement.appendChild(optSelect);
    }
  }
}

function changeColor(ev) {
  const selectValue = ev.target.value;
  const parentSelect = selectValue.parentElement;
  console.log(ev.target);
  console.log(parentSelect);
  //Falta completar el color para seleccionar cada uno tal tal
}

createLi();
const selectAll = document.querySelectorAll("select");
for (const select of selectAll) {
  select.addEventListener("change", changeColor);
}
