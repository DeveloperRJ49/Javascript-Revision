// WAP to Remove Duplicate Elements from an array. Without using any prebuilt function.
// Example:
// arr = [1, 2, 2, 2, 3, 2, 3, 4, 4, 4, 5]
// [1,2,3,4,5]



let arr = [1,1,2,2,2, 2, 2, 3, 4, 5, 6, 6, 6];
let newArr = [];
let k = 0; // Index for newArr
for(let i=0; i<arr.length;i++){
    let flag = 0;
    
    for(let j=0; j<k; j++){
        if(arr[i] === newArr[j]){
            flag = 1;
            break
        }
    }
    
    if(flag == 0){
        newArr[k] = arr[i];
        k++
    }
}

console.log(newArr);