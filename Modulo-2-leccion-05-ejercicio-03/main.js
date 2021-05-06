const evento = document.querySelector(".js-paragraph");
const loren =
  "<p> bbbbLorem ipsum dolor sit amet consectetur adipisicing elit. Dolor, dolore veniam laudantium cumque officiis aspernatur recusandae est voluptas sapiente. Excepturi, mollitia nobis! Ducimus nostrum praesentium vel, deserunt nemo libero ipsa. </p>";

function showText() {
  console.log(loren);
  evento.innerHTML = loren;
}
evento.addEventListener("mouseover", showText);

// let evenT = document.querySelector(".js-paragraph");
// function newParagraph() {
//   let paragraph = document.createElement("p");
//   paragraph.textContent =
//     "Lorem ipsum dolor sit amet, consectetur adipisicing elit";

//   evenT.insertAdjacentElement("beforeend", paragraph);
// }
// evenT.addEventListener("mouseover", newParagraph);
