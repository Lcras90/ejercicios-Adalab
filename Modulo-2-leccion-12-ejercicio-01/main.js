const numbers = [1, 2, 3];
const list = document.querySelector(".js-list");
let newItem;

numbers.forEach(function (ev) {
  let newItem = document.createElement("li");
  const newContent = document.createTextNode(ev);
  newItem.appendChild(newContent);
  list.appendChild(newItem);
});
