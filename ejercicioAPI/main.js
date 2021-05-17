const pgraph = document.querySelector(".js-paragraph");
const img = document.querySelector(".js-img");
const buttoN = document.querySelector("button");

function result() {
  fetch(`https://api.rand.fun/number/integer?min=0&max=20`)
    .then((response) => response.json())
    .then((data) => {
      return fetch("https://dog.ceo/api/breeds/list/all")
        .then((response) => response.json())
        .then((dogs) => {
          let randomNumber = data.result;
          let arrayDogs = Object.keys(dogs.message); //convierte un objeto en una array
          pgraph.innerText = arrayDogs[randomNumber];
          return fetch(
            `https://dog.ceo/api/breed/${arrayDogs[randomNumber]}/images/random`
          )
            .then((response) => response.json())
            .then((image) => {
              img.src = image.message;
              img.alt = "Un perro";
            });
        });
    });
}
buttoN.addEventListener("click", result);
