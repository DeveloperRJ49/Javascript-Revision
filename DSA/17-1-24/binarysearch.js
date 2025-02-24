let arr = [5, 7, 8, 9, 10, 22, 29, 34, 39, 41];
let n = 10;
let lb = 0;
let ub = arr.length - 1;
// console.log(ub);
function binary(arr, lb, ub, n) {
  if (lb > ub) {
    return -1;
  }
  let mid = parseInt((lb + ub) / 2);
  if (arr[mid] == n) {
    return mid;
  }
  if (arr[mid] > n) {
    return binary(arr, lb, mid - 1, n);
  } else {
    return binary(arr, mid + 1, ub, n);
  }
}

let result = binary(arr, lb, ub, n);
if (result == -1) {
  console.log("Element not found");
} else {
  console.log(`Element is present at index ${result}`);
}
