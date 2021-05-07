const selectP = document.querySelector(".container");
function Color() {
  //   let scrollP = window.scrollY;
  //   console.log(scrollP);
  if (window.scrollY < 250) {
    selectP.classList.add("js-container");
    selectP.classList.remove("hidden");
  } else {
    selectP.classList.remove("js-container");
    selectP.classList.add("hidden");
  }
}
window.addEventListener("scroll", Color);
