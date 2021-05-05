function parImpar(a) {
    if(a % 2 == 0) {
      return "par";
    }
    else {
      return "impar";
    }
  }
  function getEl(selector){
    return document.querySelector(selector)
    }
 
  const number = getEl(".js-pantalla");
  number.innerHTML = number.innerText;
  console.log(number.innerHTML)
  const newNumber = parseInt(number.innerHTML);
  const result = parImpar(newNumber)
console.log(`Este número es ${result}`)