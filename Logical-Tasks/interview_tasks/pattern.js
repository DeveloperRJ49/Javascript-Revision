// 1
// 1 2
// 1 2 3 
// 1 2 3 4
// 1 2 3 4 5

// for (let i = 1; i <= 5; i++) {
//     let row = "";
//     for (let j = 1; j <= i; j++) {
//         row += j + " "
//     }
//     console.log(row);
// }

// 1 
// 2 2 
// 3 3 3
// 4 4 4 4
// 5 5 5 5 5

// for (let i = 1; i <= 5; i++) {
//     let row = "";
//     for (let j = 1; j <= i; j++) {
//         row += i + " "
//     }
//     console.log(row);
// }

// 5
// 5 4
// 5 4 3
// 5 4 3 2
// 5 4 3 2 1

// for(let i=5; i>=1; i--) {
//     let row = "";
//     for(let j=5; j>=i; j--){
//         row += j + " "
//     }
//     console.log(row);

// }

// 5 
// 4 4 
// 3 3 3
// 2 2 2 2
// 1 1 1 1 1

// for (let i = 5; i >= 1; i--) {
//     let row = "";
//     for (let j = 5; j >= i; j--) {
//         row += i + " "
//     }
//     console.log(row);
// }

// 1
// 2 1
// 3 2 1
// 4 3 2 1
// 5 4 3 2 1

// for(let i=1;i<=5;i++){
//     let row = "";
//     for(let j=i;j>=1;j--){
//         row += j + " "
//     }
//     console.log(row);
// }

// 5
// 4 5
// 3 4 5
// 2 3 4 5
// 1 2 3 4 5

// for(let i=5;i>=1;i--){
//     let row = "";
//     for(let j=i;j<=5;j++){
//         row += j + " ";
//     }
//     console.log(row);
// }

// ****************************************************************************************************

// 5 4 3 2 1
// 5 4 3 2
// 5 4 3
// 5 4
// 5

// for (let i = 1; i <= 5; i++) {
//     let row = "";
//     for (let j = 5; j >= i; j--) {
//         row += j + " "
//     }
//     console.log(row);
// }

// 1 1 1 1 1 
// 2 2 2 2 
// 3 3 3
// 4 4
// 5

// for (let i = 1; i <= 5; i++) {
//     let row = "";
//     for (let j = 5; j >= i; j--) {
//         row += i + " "
//     }
//     console.log(row);
// }

// 5 4 3 2 1
// 4 3 2 1
// 3 2 1
// 2 1
// 1

// for(let i=5; i>=1; i--){
//     let row = "";
//     for(let j=i; j>=1; j--){
//         row += j + " "
//     }
//     console.log(row);
// }

// 5 5 5 5 5 
// 4 4 4 4 
// 3 3 3
// 2 2
// 1

for(let i=5; i>=1; i--){
    let row = "";
    for(let j=i; j>=1; j--){
        row += i + " "
    }
    console.log(row);
}

// * * * * *
// * * * *
// * * *
// * *
// *

// for(let i=5; i>=1; i--){
//     let row = "";
//     for(let j=i; j>=1; j--){
//         row += "*" + " "
//     }
//     console.log(row);
// }