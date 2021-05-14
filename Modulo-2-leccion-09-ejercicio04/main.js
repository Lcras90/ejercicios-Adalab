/*
Proceso 1:
a) Cuando arranque la pag, pintar el listado de tareas
b) Escuchar un evento sobre las teareas pintadas.

Proceso 2
a) Una vez que la usuaria ha clicado:
- Recoger en cuál elemento ha hecho click
- Modificar el estado de la tarea.
- Volver a pintar las tareas
- Escuchar un evento.*/

const tasks = [
  { name: "Recoger setas en el campo", completed: true },
  { name: "Comprar pilas", completed: true },
  { name: "Poner una lavadora de blancos", completed: true },
  {
    name: "Aprender cómo se realizan las peticiones al servidor en JavaScript",
    completed: false,
  },
];

let p1 = document.querySelector(".js-paragraph");
let p2 = document.querySelector(".js-paragraph2");
let tftask = document.querySelector(".t");

// pintar número de tareas
let ntask = 0;
tasks.forEach(function () {
  ntask++;
});
p1.innerHTML = `El número de tareas es ${ntask}`;

//pintar las tareas

// p2.innerHTML = `<ul><li class ="${classP}"> ${tasks[0].name}   <input type="checkbox" /></li><li class ="${classP}"> ${tasks[1].name}   <input type="checkbox" /></li><li class ="${classP}"> ${tasks[2].name}   <input type="checkbox" /></li><li class ="${classP}"> ${tasks[3].name}  <input type="checkbox" /></li></ul>`;

// funcion que hace lo de arriba en plan menos cutre
let task2 = "";
let classP = "";
let checked = "";
function handletask() {
  for (let i = 0; i < tasks.length; i++) {
    let task1 = [i];
    //recorre cada uno de los objetos de la array
    task2 += `<ul><li class ="${classP} ${checked}"> ${tasks[0].name}   <input type="checkbox" class="js-checkbox" /></li><li class ="${classP} ${checked}"> ${tasks[1].name}   <input type="checkbox" class="js-checkbox" /></li><li class ="${classP} ${checked}"> ${tasks[2].name}   <input type="checkbox" class="js-checkbox" /></li><li class ="${classP} ${checked}"> ${tasks[3].name}  <input type="checkbox" class="js-checkbox" /></li></ul>`; // += para añadir la tarea y no machacarlas
    if (task2.completed === true) {
      //Pintar tachadas las tareas que están hechas
      classP = "p";
      checked = "checked";
    } else {
      classP = "";
      checked = "";
    }
  }
  listenClick();
}

function listenClick() {
  const checkBox = document.querySelectorAll(".js-checkbox");
  for (let i = 0; i < checkBox.length; i++) {
    checkBox[i].addEventListener("change", handlerCheck);
  }
}
function handlerCheck(evt) {
  console.log(evt.target.value);
  let clicked = evt.target.value;
  tasks[clicked].completed = !tasks[clicked].completed;
  handletask();
}

handletask();
