const myNums = [10, 20, 30];

// const myTotal = myNums.reduce(function (acc, currval) {
//     console.log(`acc: ${acc} and currval: ${currval}`);
//     return acc + currval
// }, 0);

// const myTotal = myNums.reduce( (acc, curr) => acc+curr, 0)

// console.log(myTotal);

const shoppingCart = [
    {
        itemName: "js course",
        price: 1000
    },
    {
        itemName: "py course",
        price: 999
    },
    {
        itemName: "mobile dev course",
        price: 5000
    },
    {
        itemName: "data science course",
        price: 13000
    },
]

const priceToPay = shoppingCart.reduce((acc, item) => acc + item.price , 0)

console.log(priceToPay);