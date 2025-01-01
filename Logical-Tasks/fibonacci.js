// ==========   Fibonacci Series ===================

let n = parseInt(prompt("Enter the number of terms :"))
let num1 = 0, num2 = 1;
let num3;

num3 = num1 + num2;

console.log("fibonacci Series : ");
console.log(num1);
console.log(num2);

for (let i = 3; i <= n; i++) {
    console.log(num3);
    num1 = num2;
    num2 = num3;
    num3 = num1 + num2
}