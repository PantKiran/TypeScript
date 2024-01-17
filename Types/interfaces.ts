interface points {
  x: number;
  y: number;
}
const pt: points = { x: 45, y: 54 };

interface Person {
  readonly id: number;
  first: string;
  last: string;
  nickname?: string;
  sayHi: () => string;
}

const Bahadur: Person = {
  first: "Bahadur",
  last: "Singh",
  id: 7484849,
  sayHi: () => {
    return "Hello";
  },
};
Bahadur.first = "hello";

interface Products {
  name: string;
  price: number;
  applyDiscount(discount: number): number;
}

const shoes: Products = {
  name: "nike",
  price: 58,
  applyDiscount(discount: number) {
    return this.price - (this.price * discount) / 100;
  },
};

// Reopening interfaces
interface Dog {
  name: string;
  age: number;
}

interface Dog {
  breed: string;
  bark(): string;
}

const GermanShaperd: Dog = {
  name: "GermanShaperd",
  age: 4,
  breed: "German",
  bark() {
    return "Woof Woof";
  },
};

// Extending interfaces i,e inheritance
interface ServiceDog extends Dog {
  job: "drug Sniffer" | "bomb" | "guide dog";
}

const Hilton: ServiceDog = {
  name: "Hilton",
  age: 4,
  breed: "German",
  bark() {
    return "wolf";
  },
  job: "bomb",
};

// multiple inheritance
interface person {
  name: string;
}

interface employee {
  readonly id: number;
  email: string;
}

interface Enineer extends person, employee {
  level: string;
  skills: string[];
}

const kiran: Enineer = {
  id: 74849494,
  name: "Kiran pant",
  email: "kiran.r.pant@gmail.com",
  level: "Sr software Engineer",
  skills: [
    "html",
    "css",
    "javaScript",
    "Reactjs",
    "nodejs",
    "Express",
    "Nextjs",
    "Nustjs",
    "tailwindcss",
    "mongodb",
    "postgres",
    "sql",
  ],
};
