let Age: number | string = 5;
Age = "xy";

type Points = {
  x: number;
  y: number;
};

type Loc = {
  lat: number;
  lon: number;
};

let coordinates: Points | Loc = { x: 5, y: 6 };
coordinates = { lat: 899, lon: 9988 };

// type narrowing
const calculateTax = (price: number | string, tax: number) => {
  if (typeof price === "string") {
    return price.replace("$", "");
  } else {
    return price * tax;
  }
};
const Final = calculateTax("$5", 56);
console.log(Final);

// mutlitple types of array
const stuff: (string | number)[] = [4, "kiran"];

// literal types
let mood: "happy" | "sad" | "excited";
// mood = 'angry'
mood = "happy";

type weekdays = "monday" | "tuesday" | "wednesday" | "thursday" | "friday";

const today: weekdays = "monday";
