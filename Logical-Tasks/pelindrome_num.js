for (let num = 1; num <= 100; num++) {
    let temp = num, rev = 0, rem;

    while (temp > 0) {
        rem = temp % 10;
        rev = (rev * 10) + rem;
        temp = Math.floor(temp / 10);
    }

    if (rev === num) {
        console.log(num);
    }
}

// let num = parseInt(prompt("Enter a number:"));
// let temp = num, rev = 0, rem;

// while (temp > 0) {
//     rem = temp % 10;
//     rev = (rev * 10) + rem;
//     temp = Math.floor(temp / 10);
// }

// if (rev === num) {
//     console.log(`${num} is a Palindrome`);
// } else {
//     console.log(`${num} is NOT a Palindrome`);
// }
