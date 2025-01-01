// ==========   Binary To Decimal ===================

const binary = prompt("Enter a binary number:");

if (/^[01]+$/.test(binary)) {
    const decimal = parseInt(binary, 2);
    console.log(`The decimal equivalent of binary ${binary} is ${decimal}.`);
} else {
    console.log("Invalid input. Please enter a valid binary number (only 0s and 1s).");
}