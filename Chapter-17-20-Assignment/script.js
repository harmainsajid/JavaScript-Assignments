// ARRAYS AND LOOP
// Q1
let matrix = [
  [0, 1, 2, 3],
  [1, 0, 1, 2],
  [2, 1, 0, 1],
];

// Q2
console.log(matrix[0]);
console.log(matrix[1]);
console.log(matrix[2]);

// Q3
for (let i = 1; i <= 10; i++) {
  console.log(i);
}

// Q4
/*
let tableNumber = +prompt("Enter a number for multiplication table:");
let tableLength = +prompt("Enter the length of the table:");
for (let i = 1; i <= tableLength; i++) {
  document.writelnInln(tableNumber + " x " + i + " = " + (tableNumber * i) + "</br>");
}
*/
// Q5
let fruits = ["apple", "banana", "mango", "orange", "strawberry"];

for (let i = 0; i < fruits.length; i++) {
  console.log(fruits[i]);
  console.log("Element at index " + i + " is " + fruits[i]);
}

// Q6 

document.writeln("<b>Counting:</b><br>");
for (var i = 1; i <= 15; i++) {
  document.writeln(i + ", ");
}
document.writeln("<br><br>");

document.writeln("<b>Reverse counting:</b><br>");
for (var i = 10; i >= 1; i--) {
  document.writeln(i + ", ");
}
document.writeln("<br><br>");

document.writeln("<b>Even:</b><br>");
for (var i = 0; i <= 20; i += 2) {
  document.writeln(i + ", ");
}
document.writeln("<br><br>");

document.writeln("<b>Odd:</b><br>");
for (var i = 1; i < 20; i += 2) {
  document.writeln(i + ", ");
}
document.writeln("<br><br>");

document.writeln("<b>Series:</b><br>");
for (var i = 2; i <= 20; i += 2) {
  document.writeln(i + "k, ");
}

// Q7
var A = ["cake", "apple pie", "cookie", "chips", "patties"];

var userInput = prompt("Welcome to our bakery. What do you want to order?");

userInput = userInput.toLowerCase();

if (A.indexOf(userInput) !== -1) {
  alert(userInput + " is available at index " + A.indexOf(userInput) + " in our bakery.");
} else {
  alert("We are sorry. " + userInput + " is not available in our bakery.");
}

// Q8
var A = [24, 53, 78, 91, 12];

var largest = A[0]; 

for (var i = 1; i < A.length; i++) {
  if (A[i] > largest) {
    largest = A[i];
  }
}

document.write("Array items: " + A + "<br>");
document.write("The largest number is " + largest);