// ES6 Classes in JS
// Used when declaring React components

class Fruit {
  constructor() {
    // Set properties in constructor
    this.isJuicy = false;
    this.exists = false;
  }

  // Method that Orange inherits and doesn't override
  pluck() {
    this.exists = true;
  }

  eat() {
    console.log("Fruit eaten!");
    this.exists = false;
  }
}

// Subclass of Fruit
class Orange extends Fruit {
  constructor() {
    super();
    this.isJuicy = true;
    this.isPeeled = false;
  }

  peel() {
    this.isPeeled = true;
  }

  // Overriden method
  eat() {
    super.eat();
    console.log("Orange eaten!");
  }
}

// Instantiate with new keyword
const orange = new Orange();

console.log("orange.exists before pluck", orange.exists);
orange.pluck();
console.log("orange.exists after pluck", orange.exists);

console.log("orange.isPeeled before peel", orange.isPeeled);
orange.peel();
console.log("orange.isPeeled after peel", orange.isPeeled);

orange.eat();
