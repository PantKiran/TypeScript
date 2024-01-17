// **********************************************
// ******************* PART 1 *******************
// **********************************************
// Create an empty array of numbers called "ages":
var Ages = [];
// **********************************************
// ******************* PART 2 *******************
// **********************************************
// Create an array variable called gameBoard that starts as an empty array.
// It should be typed to hold a 2 dimensional array of strings
var getBoard = [[], []];
// **********************************************
// ******************* PART 4 *******************
// **********************************************
// Write a function called getTotal that accepts an array of Product types
// It should return the sum of all the products' prices
var getTotal = function (Product) {
    var sum = 0;
    Product.map(function (product) {
        sum += product.price;
    });
    return sum;
};
var Result = getTotal([
    {
        name: "mug",
        price: 34,
    },
    {
        name: "hot",
        price: 43,
    },
]);
console.log(Result);
