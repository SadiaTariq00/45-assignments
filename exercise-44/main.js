"use strict";
// Sandwiches: Write a function that accepts a array of items a person wants on a sandwich. The function should have one parameter that collects as many items as the function call provides, 
// and it should print a summary of the sandwich that is being ordered. Call the function three times, using a different number of arguments each time.
function makesandwich(...items) {
    console.log("\nMaking a sandwich with the following items:");
    items.forEach(singleitem => console.log(singleitem));
    console.log("Enjoy your Sandwich");
}
makesandwich("Bread", "Mayonise");
makesandwich("Chicken", "Cheese ", "Egg");
makesandwich("Bread", "Mayonise", "Ketchup", "Chicken", "Cheese ", "Egg", "Butter");
