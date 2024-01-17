class Person {
  #initialBalance = 0;
  currentBalance = 757;
  constructor(name, age) {
    (this.name = name), (this.age = age);
  }
  greet() {
    console.log(`Hello ${this.name} you are ${this.age} years old`);
  }
  get initialBalance() {
    // getter methos
    return `Hello ${this.name}`;
  }

  set initialBalance(newBalance) {
    if (newBalance < 0) {
      throw new Error("Balance  must be positive");
    }
    this.#initialBalance = newBalance;
  }

  // getInitalBlance() {
  //   return this.#initialBalance;
  // }
  // setInitialBalance(newBalance) {
  //   return (this.#initialBalance = newBalance);
  // }
}

const Kiran = new Person("kiran", 27);
console.log(Kiran.initialBalance);
console.log((Kiran.initialBalance = -20));
// console.log(Kiran.getInitalBlance());
// console.log(Kiran.setInitialBalance(30));
// console.log(Kiran.Name);
// Kiran.greet();
