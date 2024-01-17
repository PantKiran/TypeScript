class Person {
  #initialBalance = 0;
  currentBalance = 757;
  constructor(name, age) {
    (this.name = name), (this.age = age);
  }
  greet() {
    console.log(`Hello ${this.name} you are ${this.age} years old`);
  }

  getInitalBlance() {
    return this.#initialBalance;
  }
  setInitialBalance(newBalance) {
    return (this.#initialBalance = newBalance);
  }
}

const Kiran = new Person("kiran", 27);
console.log(Kiran.getInitalBlance());
console.log(Kiran.setInitialBalance(30));

Kiran.greet();
