let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
let sum = 0;
for (i = 0; i < arr.length; i++) {
  console.log(i + "=" + arr[i]);
  // sum += arr[i];
  sum = sum + arr[i];
}
console.log("sum = " + sum);

let target = 9;
console.log("TARGET = " + target);
for (i = 0; i < arr.length; i++) {
  for (j = 1; j < arr.length; j++) {
    if (arr[i] + arr[i + j] == target) {
      let arr1 = [i, i + j];
      console.log("INDEX NO :-" + arr1 + "<br>");
    }
  }
}
