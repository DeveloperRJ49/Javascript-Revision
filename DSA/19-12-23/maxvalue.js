// const  arr = [1,2,3,4,5,6];
// let max = arr[0];
// for(let i = 0; i<arr.length; i++){
//     if(arr[i] > max){
//         max = arr[i];
//         console.log(arr[i]);
//     }
// }
// console.log(max+"this is a max");

const  arr1 = [1,2,0,4,5,6];
let min = arr1[0];
for(let i = 0; i<arr1.length; i++){
    if(arr1[i] < min){
        min = arr1[i];
        console.log(arr1[i]);
    }
}
console.log(min+" this is a min");
