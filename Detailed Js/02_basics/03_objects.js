// singleton
// Object.create

// object literals

const mySym = Symbol("key1")

const JsUser = {
    name: "Sparky",
    "full name": "Sparky gaming",
    [mySym]: "mykey1",
    age: 18,
    location: "Jaipur",
    email: "sparky@google.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"]
}

// console.log(JsUser.email)
// console.log(JsUser["email"])
// console.log(JsUser["full name"])
// console.log(JsUser[mySym])

// JsUser.email = "sparky@chatgpt.com"

//  cant change a keys value after Object.freez ---------------------------------------

// Object.freeze(JsUser)
// JsUser.email = "sparky@microsoft.com"
// console.log(JsUser);

// JsUser.greeting = function(){
//     console.log("Hello JS user");
// }
// JsUser.greetingTwo = function(){
//     console.log(`Hello JS user, ${JsUser.name}`);
// }

// console.log(JsUser.greeting());
// console.log(JsUser.greetingTwo());