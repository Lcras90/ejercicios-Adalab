const lostNumbers = [4, 8, 15, 16, 23, 42];
let parNumber = [];
let multi3Number = [];

function getParNumbers(a) {
  for (let i = 0; i < a.length; i++) {
    if (a[i] % 2 == 0) {
      parNumber.push(a[i]);
    }
  }
  return parNumber;
}

console.log(getParNumbers(lostNumbers));
console.log(parNumber);

function get3multi(a) {
  for (let i = 1; i < a.length; i++) {
    if (a[i] % 3 == 0) {
      multi3Number.push(a[i]);
    }
  }
  return multi3Number;
}

console.log(get3multi(lostNumbers));
const numberS = parNumber.concat(multi3Number);
console.log(numberS);
