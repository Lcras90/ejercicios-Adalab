const result = parImpar(4)
const pantalla = document.querySelector(".js-pantalla");
function parImpar(a) {
    if(a % 2 == 0) {
      return "par";
    }
    else {
      return "impar";
    }
  }

pantalla.innerHTML = result;
console.log(result)
  