class TipCalc {
    constructor(billAmount, persons) {
        this.billAmount = billAmount;
        this.persons = persons;
        this.tipAmmount = this.claculateTip();
        this.total = this.billAmount + this.tipAmmount;
    }

    claculateTip() {
        if (this.billAmount > 0 && this.billAmount < 100) {
            return 10;
        } else if (this.billAmount >= 100 && this.billAmount < 500) {
            return 50;
        } else if (this.billAmount >= 500 && this.billAmount < 1000) {
            return 100;
        } else if (this.billAmount > 1000) {
            return 150;
        } else {
            return 0;
        }
    }

    perPersonBill() {
        return this.billAmount / this.persons;
    }

    perPersonTip() {
        return this.tipAmmount / this.persons;
    }

    displayDetails() {
        alert(` Bill Amount : ₹${this.billAmount}
                Tip Ammoutn : ₹${this.tipAmmount}
                Total Amount : ₹${this.total}
                Bill per Person : ₹${this.perPersonBill()}
                Tip per Person : ₹${this.perPersonTip()}
            `);
    }
}

let billAmount = parseInt(prompt("Enter the bill amount:"));
let persons = parseInt(prompt("Enter the number of persons:"));

if (isNaN(billAmount) ||  billAmount > 5000 || isNaN(persons) || persons <= 0) {
    alert("Please Enter the valid Numbers")
} else {
    let tipCalculator = new TipCalc(billAmount, persons);
    tipCalculator.displayDetails();
}