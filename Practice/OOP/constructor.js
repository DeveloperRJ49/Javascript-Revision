class Car {
    constructor(name,color){
        this.name = name;
        this.color = color;
    }
    carInfo() {
        console.log(`this car is ${this.name} in ${this.color} color`);
    }
};


let carData = new Car('Toyota','Black');
let carData2 = new Car('Bmw','Gray');

carData.carInfo();
carData2.carInfo();
