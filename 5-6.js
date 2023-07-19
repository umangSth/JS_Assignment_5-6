// the Car class with different object and method
class Car {
    // Constructor to initialize car properties
    constructor(brand, model, year, color, price, gas) {
        this.brand = brand;
        this.model = model;
        this.year = year;
        this.color = color;
        this.price = price;
        this.gas = gas;
    }

    // Method to honk and display car details
    honk() {
        console.log("\nTuut Tuut!!");
        console.log(`Brand: ${this.brand}`);
        console.log(`Model: ${this.model}`);
        console.log(`Year: ${this.year}`);
        console.log(`Color: ${this.color}`);
        console.log(`Price: ${this.price}`);
    }
     
    // Method to simulate a race turn and update gas level
    raceTurn() {
        let currentYear = new Date().getFullYear();
        let gasUsed = 5 + (currentYear - this.year);
        this.gas -= gasUsed;
        if (this.gas < 0) {
            return -1; // Car ran out of fuel
        } else {
            return 1; // Car completed the turn
        }
    }
}

// Function to simulate the race and return the result
function race(car) {
    let turns = 7;
    let result = 1;
    for (let i = 0; i < turns; i++) {
        result = car.raceTurn();
    }
    if (result == 1) {
        return `${car.brand} has completed the race.`;
    } else {
        return `${car.brand} ran out of fuel.`;
    }
}

// Create car objects
let honda = new Car("Honda", "CR-V", 2023, "Red", 50000, 45);
let ford = new Car("Ford", "F-150", 2020, "Black", 25000, 30);
let bmw = new Car("BMW", "X5", 2022, "Green", 60000, 65);
let mazda = new Car("Mazda", "CX-5", 2019, "White", 15000, 60);
let audi = new Car("Audi", "Q7", 2018, "Silver", 52000, 47);
let kia = new Car("Kia", "Forte", 2020, "Blue", 21000, 56);

// calling the honk method for each car class object
let cars = [honda, ford, bmw, mazda, audi, kia];

for (let i = 0; i < 6; i++) {
    cars[i].honk();
}

for (let i = 0; i < 6; i++) {
    console.log(`\n${i + 1}. ${race(cars[i])}`);
}
