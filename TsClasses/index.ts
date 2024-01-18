class Player {
  public readonly first: string;
  public readonly last: string;
  protected _score = 0;
  constructor(first: string, last: string) {
    (this.first = first), (this.last = last);
  }
  private secretMethod(): void {
    console.log("secret method");
  }
  get fullName(): string {
    return `${this.first} ${this.last}`;
  }
  get score() {
    return this._score;
  }
  set score(newScore: number) {
    if (newScore < 0) {
      throw new Error("score can not be negative");
    }
    this._score = newScore;
  }
}

class SuperPlayer extends Player {
  public isAdmin: boolean = true;

  maxScore() {
    return (this._score = 10000);
  }
}

const Ram = new Player("Ram", "Ram");
console.log(Ram.fullName);
console.log((Ram.score = 20));

// console.log(Ram.score);

// shorthand
// class Player {
//   constructor(public first: string, public last: string, private score = 0) {}
//   private secretMethod(): void {
//     console.log("secret method");
//   }
// }
// const Ram = new Player("Ram", "Ram");

// interface and Classes

interface Colorful {
  color: string;
}

interface printable {
  print(): void;
}

class Bike implements Colorful {
  constructor(public color: string) {}
}
class Jacket implements Colorful, printable {
  constructor(public brand: string, public color: string) {}
  print(): void {
    console.log(`${this.color} ${this.brand}`);
  }
}

const bike1 = new Bike("Red");
const jacket1 = new Jacket("nike", "blue");

// abstract classes

abstract class Employee {
  constructor(public first: string, public last: string) {}
  abstract getPay(): number;
  greet() {
    console.log(`Hey! ${this.first} ${this.last}`);
  }
}

class FullTimeEmployee extends Employee {
  constructor(
    public first: string,
    public last: string,
    private salary: number
  ) {
    super(first, last);
  }
  getPay(): number {
    return this.salary;
  }
}

class PartTimeEmployee extends Employee {
  constructor(
    public first: string,
    public last: string,
    private hourlyRate: number,
    private hourlyWorked: number
  ) {
    super(first, last);
  }
  getPay(): number {
    return this.hourlyRate * this.hourlyWorked;
  }
}

const John = new FullTimeEmployee("John", "John", 500000);
const Harry = new PartTimeEmployee("Harry", "Harry", 20, 3000);
console.log(John.getPay());
console.log(Harry.getPay());

// generics

interface dog {
  name: string;
  breed: string;
  age: number;
}

function identity<Type>(item: Type): Type {
  return item;
}
identity<dog>({ name: "GermanShaperd", breed: "GermanShaperd", age: 8 });

function getRandomElement<T>(item: T[]): T {
  const randIndex = Math.floor(Math.random() * item.length);
  return item[randIndex];
}
console.log(getRandomElement<string>(["he", "li", "fe"]));
console.log(getRandomElement([4, 5, 3, 2, 5]));

function MultipleTypes<T, U>(first: T, second: U) {
  return { ...first, ...second };
}
MultipleTypes({ first: [4, 5, 9] }, { second: ["one", "two"] });
