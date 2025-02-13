// Wap to print sum of digit in a number        ----------------------------------------------------------------------------------------------------

// let num = Number(prompt("Enter Any Number"))
// let sum = 0

// while(num > 0){
//     sum += num % 10;
//     num = Math.floor(num / 10);
// }
// console.log(sum);

// Swap A 2 variable using 3rd variable     ----------------------------------------------------------------------------------------------------

// let a = 5
// let b = 1
// let c = a

// a = b;
// b = c
// c = a
// console.log(a,b,c)

// Swap A 3 variable using 4th variable     ----------------------------------------------------------------------------------------------------

// let a = 10 , b = 20 , c = 30 , temp;

// temp = a;
// a = b;
// b = c;
// c = temp;
// console.log(a,b,c);

// Swap A 2 variable without using 3rd variable     ----------------------------------------------------------------------------------------------------

// let a = 10 , b = 20;

// a = a + b;   // 10+20 = 30
// b = a - b    // 30-20 = 10
// a = a - b    // 30-10 = 20

// console.log(a,b);

// Swap A 3 variable without using 4th variable     ----------------------------------------------------------------------------------------------------

// let a = 10, b = 20, c = 30;

// a = a + b + c;   // 10+20+30 = 60
// b = a - b - c;   // 60-20-30 = 10
// c = a - b - c;   // 60-10-30 = 20
// a = a - b - c;   // 60-10-20 = 30

// console.log(a, b, c);

// WAP to FIND Factor of a number       ----------------------------------------------------------------------------------------------------  

// let num = Number(prompt("Enter Any Number"));
// let i = 1;

// While Loop

// while (i <= num) {
//     if (num % i == 0) {
//         console.log(i);
//     }
//     i++;
// }

// For Loop

// for (i; i <= num; i++) {
//     if (num % i == 0) {
//         console.log(i);
//     }
// }

// WAP to FIND Factorial of a number       ----------------------------------------------------------------------------------------------------  

// let num = Number(prompt("Enter Any Number"));
// let fact = 1;
// let i = 1

// While Loop

// while (i <= num) {
//     fact *= i
//     i++;
// }

// For Loop

// let num = Number(prompt("Enter Any Number"));
// let fact = 1;
// let i = num

// for (i; i >= 1; i--) {
//     fact *= i;
// }

// console.log("factoria; id  => " + fact);

// WAP to print fibbonacci sereas       ----------------------------------------------------------------------------------------------------  

// let num = Number(prompt("ENTER ANY NUMBER"));
// let a = 0;
// let b = 1;
// let next;
// let i = 2;

//  While Loop

// while( i < num){
//     next = a + b;
//     console.log(next);
//     a = b;
//     b = next;
//     i++
// }

// For Loop

// for (i; i <= num; i++) {
//     next = a + b;
//     console.log(next);
//     a = b;
//     b = next;
// }

// WAP to vheck prime number      ----------------------------------------------------------------------------------------------------  
let num = Number(prompt("ENTER ANY NUMBER"));
let i = 2;

// While Loop

while (i < num) {  
    if (num % i == 0) {  
        console.log("Not Prime");
        break;
    }
    i++;
}

if (i == num) {  
    console.log("Prime Number");
}
