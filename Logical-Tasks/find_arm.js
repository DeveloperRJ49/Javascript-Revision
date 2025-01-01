let num = parseInt(prompt('Enter a number between 1 to 1000:'));

if (num < 1 || num > 1000) {
    alert('Enter a number between 1 to 1000');
} else {
    console.log(`Armstrong numbers from 1 to ${num}:`);
    let foundArmstrong = false;
    
    for (let i = 1; i <= num; i++) {
        if (isArmstrong(i)) {
            console.log(i);
            foundArmstrong = true;
        }
    }

    if (!foundArmstrong) {
        console.log(`${num} is not an Armstrong number.`);
    }
}

function isArmstrong(number) {
    const digits = number.toString().split('');
    const numDigits = digits.length;
    const sum = digits.reduce((acc, digit) => acc + Math.pow(parseInt(digit), numDigits), 0);
    return sum === number;
}