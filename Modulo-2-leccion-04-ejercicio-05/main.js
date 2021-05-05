
function getEl(selector){
return document.querySelector(selector)
}
const hi = "Hola";
const pantalla = getEl(".js-pantalla");
pantalla.innerHTML = hi;