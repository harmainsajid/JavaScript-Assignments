// ARRAYS AND LOOP
// Q1
let matrix = [
  [0, 1, 2, 3],
  [1, 0, 1, 2],
  [2, 1, 0, 1]
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
  document.writeln(tableNumber + " x " + i + " = " + (tableNumber * i) + "</br>");
}
*/
// Q5
let fruits = ["apple", "banana", "mango", "orange", "strawberry"];

for (let i = 0; i < fruits.length; i++) {
  console.log(fruits[i]);
}
