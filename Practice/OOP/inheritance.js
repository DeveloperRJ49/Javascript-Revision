
class Minato {
    // constructor() {
    //     this.name = name;
    // }
    showJutsu () {
        console.log("Minato's Jutsu: Rasengan");
    }
}

class Naruto extends Minato {
    // constructor(name) {
    //     this.name = name;
    // }
    showAbility () {
        this.showJutsu();
        console.log("Naruto's Ability: Nine-Tails Chakra");
    }
}

let obj = new Naruto();

obj.showJutsu();
