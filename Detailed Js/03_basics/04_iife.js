// Immediately Invoked Function Expressions (IIFE)
// Immediately Invoked Function Expressions (IIFE) use For remove Polution from Global scope


(function chai(){
    // named IIFE
    console.log(`DB CONNECTED`);
})();

// ( (name) => {
//     console.log(`DB CONNECTED TWO ${name}`);
// } )('hitesh')


( (fun1)=> {
    console.log(`DB CONNECTED THREE`);
})
();