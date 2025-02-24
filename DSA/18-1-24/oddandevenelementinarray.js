class odd{
    constructor(){
        this.array = [2,4,9,6,7,3,1,8,61,94,5];
    }
    findodd(){
        console.log(this.array);
        for(let i=0; i<this.array.length; i++){
            if(this.array[i] % 2 != 0 ){
                console.log(`this is odd number ${this.array[i]}`);
            }
        }
    }
}

let chekodd = new odd();
chekodd.findodd();


// let array = [2,4,9,6,7,3,1,8,61,94,5];
// console.log(array);

// for(let i=0; i<array.length; i++){
//     if(array[i] % 2 != 0 ){
//         console.log(`this is odd number ${array[i]}`);
//     }
// }

// for(let i=0; i<array.length; i++){
//     if(array[i] % 2 == 0 ){
//         console.log(`this is even numaber ${array[i]}`);
//     }
//     else{
//         console.log(`this is odd number ${array[i]}`);
//     }
// }

// console.log(array);

// for(let i=0; i<array.length; i++){
//     if(array[i] % 2 == 0 ){
//         console.log(`this is even number ${array[i]}`);
//     }
// }


