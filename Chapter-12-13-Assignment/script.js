// IF...ELSE & ELSE IF STATEMENT, TESTING SET OF CONDITIONS

// Q1
/*
let char = prompt("Enter a character (number or letter):");

if (char >= "0" && char <= "9") {
  alert("The input is a number.");
} else if (char >= "A" && char <= "Z") {
  alert("The input is an uppercase letter.");
} else if (char >= "a" && char <= "z") {
  alert("The input is a lowercase letter.");
} else {
  alert("The input is not a number or a letter.");
}
*/

// Q2
/*
let num1 = +prompt("Enter the first integer:");
let num2 = +prompt("Enter the second integer:");

if (num1 > num2) {
  alert("The larger number is: " + num1);
} else if (num2 > num1) {
  alert("The larger number is: " + num2);
} else {
  alert("Both numbers are equal.");
}
*/

// Q3
/*
let number = +prompt("Enter a number:");

if (number > 0) {
  alert("The number is positive.");
} else if (number < 0) {
  alert("The number is negative.");
} else {
  alert("The number is zero.");
}
*/

// Q4
/*
let char = prompt("Enter a single character:");
char = char.toLowerCase();

if (
  char === "a" ||
  char === "e" ||
  char === "i" ||
  char === "o" ||
  char === "u"
) {
  alert("True — it is a vowel.");
} else {
  alert("False — it is not a vowel.");
}
*/

// Q5
/*
let correctPassword = "harmain123";
let userPassword = prompt("Enter your password:");

if (userPassword === "") {
  alert("Please enter your password.");
} else if (userPassword === correctPassword) {
  alert("Correct! The password you entered matches the original password.");
} else {
  alert("Incorrect password.");
}
*/

// Q6
/*
let greeting;
let hour = 13;

if (hour < 18) {
  greeting = "Good day";
} else {
  greeting = "Good evening";
}

console.log(greeting);
*/

// Q7
let time = +prompt("Enter time in 24-hour format (e.g., 1900):");

if (time >= 0 && time < 1200) {
  alert("Good morning!");
} else if (time >= 1200 && time < 1700) {
  alert("Good afternoon!");
} else if (time >= 1700 && time < 2100) {
  alert("Good evening!");
} else if (time >= 2100 && time <= 2359) {
  alert("Good night!");
} else {
  alert("Invalid time entered!");
}
