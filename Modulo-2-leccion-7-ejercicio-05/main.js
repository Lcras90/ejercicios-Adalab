let arr = [2, 70, 7, 45, 1];
let numerito = 0;
let suma = 0;

for (let i = 0; i < arr.length; i++) {
  numerito++;
  suma += arr[i];
}

let media = suma / numerito;

console.log(media);
