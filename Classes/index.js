class Person {
  static description = "static is for Class and not for particular instances";
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

// extending Class

class AdminPerosn extends Person {
  isAdmin = true;
  constructor(name, age, permissions) {
    super(name, age);
    this.permissions = permissions;
  }
}

const admin = new AdminPerosn("kiran", 27, ["update", "delete"]);
console.log(admin);

const Kiran = new Person("kiran", 27);
console.log(Kiran.initialBalance);
console.log((Kiran.initialBalance = 20));
console.log(Person.description);
// console.log(Kiran.getInitalBlance());
// console.log(Kiran.setInitialBalance(30));
// console.log(Kiran.Name);
// Kiran.greet();
