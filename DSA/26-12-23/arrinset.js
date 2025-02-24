const array = [1, 2, 3, 4, 5, 6, 7, 8, 9];
let position = 4;
let value = 30;

for (let i = array.length; i >= position; i--) {
  array[i] = array[i - 1];
}
array[position ] = value;
console.log(array);

