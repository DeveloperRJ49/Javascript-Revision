// kadane time complexity = O(n) first method
let array = [5,4,-2,6,-3,7,9,-1,8];
// let array = [-2, -3, 4, -1, -2, 1, 5, -3];
let sum = 0;
let max =array[0];

for(let i=0; i<array.length;i++){
    sum = sum + array[i]
    if(sum < 0){
        sum = 0
    }
    if(max < sum){
        max = sum
    }
}
console.log(max);

// kadane time complexity = O(n2) second method
// let array = [5,4,-2,6,-3,7,9,-1,8];
// // let array = [-2, -3, 4, -1, -2, 1, 5, -3];
// let max = array[0];
// for (let i = 0; i < array.length; i++) {
//   let sum = 0;
//   for (let j = i; j < array.length; j++) {
//     sum += array[j];
//     if (max < sum) {
//       max = sum;
//     }
//   }
// }
// console.log("main answer :-" + max);

// kadane time complexity = O(n3) third method

// let array = [5, 4, -2, 6, -3, 7, 9, -1, 8];
// // let array = [-2, -3, 4, -1, -2, 1, 5, -3];
// let max = array[0];

// for (let i = 0; i < array.length; i++) {
//   for (let j = i; j < array.length; j++) {
//     let sum = 0;
//     for (let k = i; k < array.length; k++) {
//       sum = sum + array[k];
//       if (max < sum) {
//         max = sum;
//       }
//     }
//   }
// }
// console.log("main answer :-"max);
