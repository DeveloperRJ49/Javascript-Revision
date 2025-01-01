// ==========   Armstrong Number From(1 to 1000) ===================

let num = parseInt(prompt('enter the number'));

if (num < 1 || num > 1000) {
    alert('enter a number between 1 to 1000')
} else {
    if (isArmstrong(num)) {
        console.log(`${num} is an Armstrong number.`);
    } else {
        console.log(`${num} is not an Armstrong number.`);
    }
}
function isArmstrong(number) {
    const digits = number.toString().split('');
    const numDigits = digits.length;
    const sum = digits.reduce((acc, digit) => acc + Math.pow(parseInt(digit), numDigits), 0);
    return sum === number;
}