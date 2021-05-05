const title = document.querySelector (".title")
const text = document.querySelector (".text")
const container = document.querySelector (".container")

if (container.classList.contains("error")) {
    title.innerHTML="Aviso";
    text.innerHTML = "Ojo, cuidado"
}
else if (container.classList.contains("warning")) {
    title.innerHTML="Error";
    text.innerHTML = "Catacroquer"
}
else if (container.classList.contains("success")) {
    title.innerHTML="Correcto";
    text.innerHTML = "Todo funciona"
}