// **********************************************
// ******************* PART 1 *******************
// **********************************************
// Create a variable called highScore that can be a number OR a boolean
var highScore = true;
// **********************************************
// ******************* PART 2 *******************
// **********************************************
// create an array called stuff
// it can be an array of numbers OR an array of strings
// it cannot be an array of numbers and strings (mixed together)
var Stuff = [3, 3];
var level = "Beginner";
// Create an array called colors that can hold a mixture of RGB and HSL color types
var colors = [];
// **********************************************
// ******************* PART 6 *******************
// **********************************************
// Write a function called greet that accepts a single string OR an array of strings
// It should print "Hello, <name>" for that single person OR greet each person in the array with the same format
var greet = function (person) {
    if (typeof person === "string") {
        console.log("Hello ".concat(person));
    }
    else {
        person.map(function (Person) {
            console.log("Hello ".concat(Person));
        });
    }
};
greet("kiran");
