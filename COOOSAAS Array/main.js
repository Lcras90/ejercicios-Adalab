// //Ejercicio 7a
// let countAdalabers = 0;
// stadistic.forEach(function () {
//   countAdalabers++;
// });
// console.log(countAdalabers);

// //Ejercicio 7b
// let adalabersQuantumB = 0;
// let ageQuantum = 0;
// stadistic.forEach(function (item) {
//   adalabersQuantumB++;
//   ageQuantum += item.age;
// });
// let averaeAge = ageQuantum / adalabersQuantumB;
// console.log(averaeAge);

// //Ejerciccio 7c
// let theYoungest = stadistic[0];
// stadistic.forEach(function (item) {
//   if (theYoungest > item.age) {
//     theYoungest = item;
//   }
// });
// console.log(
// theYoungest.name
// );

// //Ejercicio 7d
// let countDesigners = 0;
// stadistic.forEach(function (item) {
//   let valoractual2 = item.profesion;
//   if (valoractual2 === "diseñadora") {
//     countDesigners++;
//   }
// });
// console.log(countDesigners);

// //Ejercicio 8
// let classes = document.querySelectorAll(".js-name8");
// const corp = document.querySelector(".js-container");
// function handlerButton() {
//   corp.classList.toggle("js-background");
// }
// for (let i = 0; i < classes.length; i++) {
//   classes[i].addEventListener("click", handlerButton);
