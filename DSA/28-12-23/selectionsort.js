let array = [64, 25, 12, 22, 11];

for (let i = 0; i < array.length; i++) {
  console.log(array + " mina");
  for (let j = i + 1; j < array.length; j++) {
    if (array[i] > array[j]) {
      let temp = array[i];
      array[i] = array[j];
      array[j] = temp;
    }
    console.log(array);
  }
  console.log(array);
}
console.log("Sorted array: ", array);