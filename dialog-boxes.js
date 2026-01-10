// JavaScript Dialog Boxes Example

// 1. Alert
alert("Welcome to the website!");

// 2. Confirm
let isSure = confirm("Do you want to continue?");

if (isSure) {
  console.log("User chose to continue.");
} else {
  console.log("User canceled the action.");
}

// 3. Prompt
let userName = prompt("What is your name?");

if (userName) {
  console.log("User name:", userName);
} else {
  console.log("No name provided.");
}
