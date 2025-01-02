let person = {
    name: "Admino",
    age: 30,
    gender: "male",
    occupation: "Software Engineer",
    hobbies: ["reading", "hiking", "coding"],
    address: {
        city: "surat",
        state: "gujrat",
        phone: 99999999
    },
    work: true,
};

// ========== String methods object =======================

// let upperCaseName = person.name.toUpperCase();
// console.log("Uppercase Name:", upperCaseName);

// let lowerCaseName = person.name.toLowerCase();
// console.log("Lowercase Name:", lowerCaseName);

// let nameLength = person.name.length;
// console.log("Name Length:", nameLength);

// let replacedName = person.name.replace("Admino", "Godmino");
// console.log("Replaced Name:", replacedName);

// let startsWithLetters = person.name.startsWith("Ad");
// console.log("Starts with 'Ad':", startsWithLetters);

// let includesLetters = person.name.includes("ino");
// console.log("Includes 'ino':", includesLetters);

// let repeatedName = person.name.repeat(3);
// console.log("Repeated Name:", repeatedName);

// let findChar = person.name.charAt(0);
// console.log("First Character:", findChar);

// let substringName = person.name.substring(0,4);
// console.log("Substring:", substringName);

// let nameArray = person.name.split("");
// console.log("Name Array:", nameArray);

// ========== Array methods in object =======================

let hobbies = person.hobbies

// hobbies.push('Travelling')
// console.log("Hobbies:", hobbies)

// hobbies.pop()
// console.log("Hobbies:", hobbies)

// hobbies.unshift('Travelling')
// console.log("Hobbies:", hobbies)

// hobbies.shift()
// console.log("Hobbies:", hobbies)

// let  check = hobbies.includes('Travelling')
// console.log(check);

// let  check = hobbies.indexOf('Travelling')
// console.log(check);
// let  check = hobbies.indexOf('coding')
// console.log(check);

// console.log(hobbies.length);

// console.log(Array.isArray(hobbies));

// let newArray = hobbies.forEach((val,i) => {
//     console.log(i,val);
// });

// let newArray = hobbies.map((val,i) => {
//     return val + 'value';
// });
// console.log(newArray);

let filArray = hobbies.filter( val => val !== "coding" )
console.log(filArray);

