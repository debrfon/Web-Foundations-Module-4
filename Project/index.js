/* ------------------------------ Analyze this code: ----------------------------------- */

let petsOwned = 2;

const iLoveJavascript = true;

let favoriteFood = "Pizza";

var age = 21;

const iLoveJavascript = false;

let name = Yvonne;

/* ------------------------------ Complete the instructions below this line: ----------------------------------- */

//Create a variable called "yourName". Assign it to the string or your first and last name.

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* ------------------------------ DO NOT TOUCH CODE BELOW THIS LINE ----------------------------------- */

let header = document.querySelector("nav");
let newString = document.createElement("span");
let linkedBanner = document.createElement("div");
linkedBanner.classList.add("linked-banner");
linkedBanner.innerText =
  "Congratulations you have successfully linked the Javascript file!";
document.querySelector(".questions-container").prepend(linkedBanner);
if (myName !== undefined) {
  newString.innerText = `Hello ${myName} welcome to your project!`;
}

header.appendChild(newString);
