var Age = 5;
Age = "xy";
var coordinates = { x: 5, y: 6 };
coordinates = { lat: 899, lon: 9988 };
// type narrowing
var calculateTax = function (price, tax) {
    if (typeof price === "string") {
        return price.replace("$", "");
    }
    else {
        return price * tax;
    }
};
var Final = calculateTax("$5", 56);
console.log(Final);
