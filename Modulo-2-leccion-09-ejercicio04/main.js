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

// pintar número de tareas
let ntask = 0;
tasks.forEach(function () {
  ntask++;
});
p1.innerHTML = `El número de tareas es ${ntask}`;

//pintar las tareas
console.log(tasks[0].name);

p2.innerHTML = `<ul><li> ${tasks[0].name}   <input type="checkbox" /></li><li> ${tasks[1].name}   <input type="checkbox" /></li><li> ${tasks[2].name}   <input type="checkbox" /></li><li> ${tasks[3].name}  <input type="checkbox" /></li></ul>`;

// funcion que hace lo de arriba en plan menos cutre
let task2 = "";
tasks.forEach(function (tareas) {
  //recorre cada uno de los objetos de la array
  task2 += `${tareas.name}`; // += para añadir la tarea y no machacarlas
});
