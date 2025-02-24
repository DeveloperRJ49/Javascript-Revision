let array = [24, 9, 29, 14, 19, 27];
let head = 0;
let tail = array.length - 1;

function quick(array, head, tail) {
  let pivot = array[tail];
  let j = head - 1;
  for (let i = head; i < tail; i++) {
    if (array[i] < pivot) {
      j++;
      [array[j], array[i]] = [array[i], array[j]];
    }
  }
  [array[j + 1], array[tail]] = [array[tail], array[j + 1]];
  return j + 1;
}

function quicksort(array, head, tail) {
  if (head < tail) {
    let p = quick(array, head, tail);
    quicksort(array, head, p - 1);
    quicksort(array, p + 1, tail);
  }
}

quicksort(array, head, tail);
console.log("quick sort");
for (let k = 0; k < array.length; k++) {
  console.log(array[k]);
}
