const marks = [5, 4, 6, 7, 9];
const inflatedMarks = marks.map((number) => number + 1);

console.log(inflatedMarks);

//Ejercicio 2

const names = ["María", "Lucía", "Susana", "Rocío", "Inmaculada"];
const sayHello = names.map((hola) => `Bienvenida ${hola}`);
console.log(sayHello);

//Ejercicio 3
const users = [
  { name: "María", isPremium: false },
  { name: "Lucía", isPremium: true },
  { name: "Susana", isPremium: true },
  { name: "Rocío", isPremium: false },
  { name: "Inmaculada", isPremium: false },
];

const hello = users.map((user) => {
  if (user.isPremium) {
    return `Bienvenida ${user.name}. Gracias por confiar en nosotras.`;
  } else {
    return `Bienvenida ${user.name} ¿Aún no eres Premium?`;
  }
});
console.log(hello);

//Ejercio 4

const premiums = users.filter((premium) => premium.isPremium === true);
console.log(premiums);

//Ejercicio 5
const pins = [2389, 2384, 2837, 5232, 8998];
const pinPar = pins.filter((par) => par % 2 == 0);
console.log(pinPar);

//Ejercicio 6
const userS = [
  { name: "María", isPremium: false, pin: 2389 },
  { name: "Lucía", isPremium: true, pin: 2384 },
  { name: "Susana", isPremium: true, pin: 2837 },
  { name: "Rocío", isPremium: false, pin: 5232 },
  { name: "Inmaculada", isPremium: false, pin: 8998 },
];

const userAutoriced = userS.filter((par) => {
  if (par.pin % 2 === 0) {
    return par.name;
  }
});
console.log(userAutoriced);

//Ejercio 7
const times = [56, 9, 45, 28, 35];
const mediaTimes = times.reduce((acc, number) => acc + number) / times.length;
console.log(mediaTimes);

//Ejercicio 8
const runners = [
  { name: "Gregory Goyle", time: 56 },
  { name: "Nymphadora Tonks", time: 9 },
  { name: "Luna Lovegood", time: 45 },
  { name: "Cedric Diggory", time: 28 },
  { name: "Cho Chang", time: 35 },
];

const theWinner = runners.reduce((times, runner) => {
  if (times.time > runner.time) {
    return runner;
  } else {
    return times;
  }
}, runners[0]);
console.log(theWinner);

// Ejercicio 9

const runnerS = [
  { name: "Gregory Goyle", time: 56, student: true },
  { name: "Nymphadora Tonks", time: 9, student: false },
  { name: "Luna Lovegood", time: 45, student: true },
  { name: "Cedric Diggory", time: 28, student: true },
  { name: "Cho Chang", time: 35, student: true },
];

const studentWin = runnerS
  .filter((student) => student.student)
  .reduce((times, runner) => {
    if (times.time > runner.time) {
      return runner;
    } else {
      return times;
    }
  }, runners[0]);
console.log(studentWin);

//Ejerecicio 10
const usersPin = [
  { name: "María", isPremium: false, pin: 2389 },
  { name: "Lucía", isPremium: true, pin: 2384 },
  { name: "Susana", isPremium: true, pin: 2837 },
  { name: "Rocío", isPremium: false, pin: 5232 },
  { name: "Inmaculada", isPremium: false, pin: 8998 },
];

let userFind = usersPin.find((pin) => pin.pin === 5232);
console.log(userFind);
let indexUser = usersPin.findIndex((pin) => pin.pin === 5232);
let eliminateUser = usersPin.splice(3, 1);

console.log(usersPin);
