function get100Numbers() {
  let arr = [];
  let num = 0;
  for (let i = 0; i <= 99; i++) {
    num++;
    arr.push(num);
  }
  return arr;
}

console.log(get100Numbers());

// Exercise 2
let arr2 = get100Numbers();
console.log(arr2);

function get100NumbersReverse() {
  arr2.reverse();
  return arr2;
}
console.log(get100NumbersReverse());
