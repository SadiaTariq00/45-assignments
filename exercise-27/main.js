"use strict";
// Alien Colors #3: Turn your if-else chain from Exercise 5-4 into an if-else chain.
// • If the alien is green, print a message that the player earned 5 points.
Object.defineProperty(exports, "__esModule", { value: true });
// • If the alien is yellow, print a message that the player earned 10 points.
// • If the alien is red, print a message that the player earned 15 points.
// • Write three versions of this program, making sure each message is printed for the appropriate color alien
// 1st version... 
// let alien_color = "green"
// if(alien_color === "green"){
//     console.log("(version:01) Alien color is green, player earned 5 points.");
// } else if (alien_color === "yellow"){
//     console.log("(version:01) Alien color is yellow, player earned 10 points.");
// }else if (alien_color === "red"){
//     console.log("(version:01) Alien color is red, player earned 15 points.");
// }
// 2nd version....
// let alien_color = "yellow"
// if(alien_color === "green"){
//     console.log("(version:02) Alien color is green, player earned 5 points.");
// } else if (alien_color === "yellow"){
//     console.log("(version:02) Alien color is yellow, player earned 10 points.");
// }else if (alien_color === "red"){
//     console.log("(version:02) Alien color is red, player earned 15 points.");
// }
// 3rd version....
let alien_color = "red";
if (alien_color === "green") {
    console.log("(version:03) Alien color is green, player earned 5 points.");
}
else if (alien_color === "yellow") {
    console.log("(version:03) Alien color is yellow, player earned 10 points.");
}
else if (alien_color === "red") {
    console.log("(version:03) Alien color is red, player earned 15 points.");
}
