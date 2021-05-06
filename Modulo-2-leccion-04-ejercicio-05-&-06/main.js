function getEl(selector) {
  const hola = document.querySelector(selector);
  if (hola === null) {
    console.log("No existe elemento");
    return `No existe ningún elemento con clase, id o tag llamado ${selector}`;
  } else {
    console.log(`Existe elemento`);
    return hola;
  }
}
const result = getEl(".js-pantallaa");
console.log(`${result} hola`);

// const hi = "Hola";
// const pantalla = getEl(".js-pantalla24");
// pantalla.innerHTML = hi;
