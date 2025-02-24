// 1 2 3 4 5
// 6 7 8 9
// 10 11 12 
// 13 14 
// 15
// let n = 1;
// for (let i = 1; i <= 5; i++) {
//     for (let j = i; j <= 5; j++) {
//         process.stdout.write(n + ' ');
//         n++;
//     }
//     process.stdout.write('\n');

// }


// 15 14 13 12 11 
// 10 9 8 7
// 6 5 4
// 3 2
// 1

// let n = 15;
// for (let i = 1; i <= 5; i++) {
//     for (let j = i; j <= 5; j++) {
//         process.stdout.write(n + ' ');
//         n--;
//     }
//     process.stdout.write('\n');

// }


// 1 2 3 4 5
// 1 2 3 4
// 1 2 3 
// 1 2
// 1

// for (let i = 1; i <= 5; i++) {
//     for (let j = 1; j <= 6 - i; j++) {
//         process.stdout.write(j + ' ');
//     }
//     process.stdout.write('\n');
// }


// 1 2 3 4 5
// 2 3 4 5
// 3 4 5 
// 4 5
// 5

// for (let i = 1; i <= 5; i++) {
//     for (let j = i; j <= 5; j++) {
//         process.stdout.write(j + ' ');
//     }
//     process.stdout.write('\n');

// }

// 5 4 3 2 1
// 4 3 2 1
// 3 2 1
// 2 1
// 1

// for (let i = 1; i <= 5; i++) {
//     for (let j = 6-i; j >= 1; j--) {
//         process.stdout.write(j + ' ');
//     }
//     process.stdout.write('\n');
// }

// 5 4 3 2 1
// 5 4 3 2 
// 5 4 3
// 5 4
// 5

// for (let i = 1; i <= 5; i++) {
//     for (let j = 5; j >= i; j--) {
//         process.stdout.write(j + ' ');
//     }
//     process.stdout.write('\n');
// }

// 1
// 2 3
// 4 5 6
// 7 8 9 10
// 11 12 13 14 15

// let n = 1;

// for (let i = 1; i <= 5; i++) {
//     for (let j = 1; j <= i; j++) {
//         process.stdout.write(n + ' ');
//         n++
//     }
//     process.stdout.write('\n');
// }