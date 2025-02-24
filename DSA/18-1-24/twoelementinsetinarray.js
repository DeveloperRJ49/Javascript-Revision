let arr = [4, 5, 3, 6, 8, 7, 2, 9];
let position = 4;
let value1 =55;
let value2 =66;
console.log(arr);
for (let i = arr.length; i >= position; i--) {
    arr[i] = arr[i - 1];    
    arr[i+1] = arr[i - 1];
} 
arr[position - 1] = value1;
arr[position] = value2;
console.log(arr);
