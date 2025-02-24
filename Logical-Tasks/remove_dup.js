let arr = [1,2,3,3,2,1,4,5,5,4];
let newArr = [];
let index = 0;

for (let i = 0; i < arr.length; i++) {
    let flag = 1;

    for (let j = 0; j < index; j++) {
        if (arr[i] === newArr[j]) {
            flag = 0;
            break;
        }
    }

    if (flag == 1) {
        newArr[index] = arr[i];
        index++;
    }
}

console.log(newArr);
