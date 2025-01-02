let student = {
    name: "Scout",
    age: 20,
    gender: "male",
    hobbies: ["reading", "gaming", "travelling"],
    address: {
        city: "Surat",
        state: "Gujrat",
        phone: 90909090
    }
}

// console.log(student);

// ============ For In loop ==============(work  on array/Object)==========

// for (let i in student) {
//     if (i == "hobbies") {
//         student.hobbies.map((val)=>{
//             console.log(`hobbies  =>  ${val}`); 
//         });
//     }else{
//         console.log(`${i}  =>  ${student[i]}`);
//     }
// }

// ============ For Of loop ==============(Only work  on array)==========

// let marks = [60,80,90,85,30] ;

// for (let i of marks){
//     console.log(i);
// }

// console.log(student.hobbies);
// console.log(student["address"]);
console.log(Object.entries(student));

