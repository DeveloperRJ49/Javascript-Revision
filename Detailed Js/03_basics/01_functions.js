
// function sayMyName(){
//     console.log("I");
//     console.log("T");
//     console.log("A");
//     console.log("C");
//     console.log("H");
//     console.log("I");
// }

// sayMyName()

// function addTwoNumbers(number1, number2){
//     console.log(number1 + number2);
// }

// function addTwoNumbers(number1, number2){

//     let result = number1 + number2
//     return result;
// }

// const result = addTwoNumbers(3, 5)

// console.log("Result: ", result);


// function loginUserMessage(username = "sam"){
//     if(!username){
//         console.log("PLease enter a username");
//         return
//     }
//     return `${username} just logged in`
// }

// console.log(loginUserMessage("sparky"))
// console.log(loginUserMessage())


// ... is rest/Spred operator

// function calculateCartPrice(val1, val2, ...num1){
//     return num1
// }

// console.log(calculateCartPrice(200, 400, 500, 2000,3000,4000))

// const user = {
//     username: "sparky",
//     prices: 199
// }

// function handleObject(anyobject){
//     console.log(`Username is ${anyobject.username} and price is ${anyobject.prices}`);
// }

// handleObject(user)
// handleObject({
//     username: "sam",
//     price: 399
// })

// const myNewArray = [200, 400, 100, 600]

// function returnSecondValue(getArray){
//     return getArray[1]
// }

// console.log(returnSecondValue(myNewArray));
// console.log(returnSecondValue([200, 400, 500, 1000]));