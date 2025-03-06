// Date: 10/10/2021
// Note: Sum of Array Elements
// Problem: Given an array of integers, return the sum of all elements in the array.
// Example:
// arr = [1, 2, 3, 4, 5]
// arr2 = [6,6,3]


// let arr = [1, 2, 3, 4, 5, 5, 5, 5, 5];

// let sumArray = (arr) => {
//     let arr2 = [];
//     let len = arr.length;  // 9
//     let mid = Math.floor(len / 2); //5

//     for (let i = 0; i <= mid; i++) {
//         if (i === len - i - 1) {
//             arr2[arr2.length] = arr[i];
//         } else if (i < len - i - 1) {
//             arr2[arr2.length] = arr[i] + arr[len - i - 1];
//         }
//     }

//     return arr2;
// }

// console.log(sumArray(arr));

// ----------------------------------------------------------------------------------------------------------------

// Find The Second Largest (Distinct) Element In An Array
// Given an array of integers, return the second largest element in the array.If the array has less than two distinct elements, return null.
// Example:
// arr = [1, 2, 3, 4, 5]
// 4 Second Largest


// --********   Using For Loop Less Time Complexity   *********--

// let arr = [1,2,3,4,5,5,5,6];

// let sLargest = (arr) => {
//     let l = Number.NEGATIVE_INFINITY;
//     let sl = Number.NEGATIVE_INFINITY;
    
//     for(let i=0; i < arr.length;i++){ 
//         if(arr[i] > l){
//             sl = l;
//             l = arr[i]
//         }else if(arr[i] != l && arr[i] > sl){
//             sl = arr[i]
//         }
//     }
//        console.log(l)
//        console.log(sl)
// }
// sLargest(arr)
// ----------------------------------------------------------------------------------------------------------------
// --********   Using Methods   *********--

// let arr = [10,10,9];

// let sLargest = (arr) => {
//     let uArr = Array.from(new Set(arr));
    
//     uArr.sort((a,b) => {
//         return b - a;
//     })
    
//     if(uArr.length >= 2){
//         return uArr[1]
//     }else{
//         return -1
//     }
// }
// console.log(sLargest(arr))

// ----------------------------------------------------------------------------------------------------------------

// Find The Second Smallest Element In An Array
// Given an array of integers, return the second smallest element in the array.If the array has less than two distinct elements, return null.
// Example:
// arr = [1, 2, 3, 4, 5]
// 2 Second Smallest

// --********   Using For Loop Less Time Complexity   *********--

// let arr = [1,2,3,4,5,5,5,6];

// let sSmallest = (arr) => {
//     let sma = Number.POSITIVE_INFINITY;
//     let sma2 = Number.POSITIVE_INFINITY;
    
//     for(let i=0; i < arr.length;i++){ 
//         if(arr[i] < sma){
//             sma2 = sma;
//             sma = arr[i]
//         }else if(arr[i] != sma && arr[i] < sma2){
//             sma2 = arr[i]
//         }
//     }
//        console.log(sma)
//        console.log(sma2)
// }
// sSmallest(arr)

// ----------------------------------------------------------------------------------------------------------------

// --********   Using Methods   *********--

// let arr = [10,10,9];

// let sSmallest = (arr) => {
//     let uArr = Array.from(new Set(arr));
    
//     uArr.sort((a,b) => {
//         return b - a;
//     })
    
//     if(uArr.length >= 2){
//         return uArr[1]
//     }else{
//         return -1
//     }
// }
// console.log(sSmallest(arr))


// ----------------------------------------------------------------------------------------------------------------

// Reverce an Array Without using any Prebuilt Function
// Given an array of integers, return the reverse of the array without using any prebuilt functions.
// Example:
// arr = [1, 2, 3, 4, 5]
// [5,4,3,2,1]


//   --********   Using For Loop Less Time Complexity   *********--

// let arr = [1, 2, 3, 4, 5];
// let rev = [];
// let len = arr.length;

// for (let i = 0; i < len; i++) {
//   rev[len - i - 1] = arr[i];
// }

// console.log(rev);

// ----------------------------------------------------------------------------------------------------------------

// --********   Using Function   *********--

// let arr = [1, 2, 3, 4, 5];

// let reverseArray = (arr) => {
//   let rev = [];
//   let len = arr.length;

//   for(let i=0; i< arr.length; i++){
//       rev[len - i - 1] = arr[i];
//   }
//   return rev;
// }
// console.log(reverseArray(arr));

// ----------------------------------------------------------------------------------------------------------------

