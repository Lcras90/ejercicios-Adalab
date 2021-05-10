let films = [];
let boton = document.querySelector(".js-button");
let respuesta = document.querySelector(".js-films");
let respuesta1;

function evenT(event) {
  respuesta1 = respuesta.value;
  console.log(respuesta1);
  event.preventDefault(); // PAra prevenir que se envíe al servidor
  films.push(respuesta1);
  console.log(films);
  for (let obra of films) {
    console.log(
      `¡A mí también me encantó ${obra}!Tenemos mucho en común, humana`
    );
  }
}

boton.addEventListener("click", evenT);
