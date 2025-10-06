// USER INPUT & CONDITIONAL STATEMENT

// Q1
/*
let city = prompt("Enter your city name:");

city = city.toLowerCase();
if (city === "karachi") {
  document.writeln("Welcome to city of lights!");
} else {
  document.writeln("Welcome to " + city + "!");
}
*/

// Q2
/*
let gender = prompt("Enter your gender (male/female):");

gender = gender.toLowerCase();
if (gender === "male") {
  document.writeln("Good Morning Sir.");
} else if (gender === "female") {
  document.writeln("Good Morning Ma’am.");
} else {
  document.writeln("Good Morning!");
}
*/

// Q3
/*
let signalColor = prompt("Enter color of traffic signal (Red, Yellow, Green):");

signalColor = signalColor.toLowerCase();
if (signalColor === "red") {
  document.writeln("Must Stop");
} else if (signalColor === "yellow") {
  document.writeln("Ready to move");
} else if (signalColor === "green") {
  document.writeln("Move now");
} else {
  document.writeln("Invalid color entered!");
}
*/

// Q4
/*
let fuel = +prompt("Enter remaining fuel in your car (in litres):");

if (fuel < 0.25) {
  document.writeln("Please refill the fuel in your car.");
} else {
  document.writeln("You have enough fuel.");
}
*/

// Q5
/*
// a.
let a = 4;
if (++a === 5) {
  alert("given condition for variable a is true");
}

// b.
let b = 82;
if (b++ === 83) {
  alert("given condition for variable b is true");
}

// c.
let c = 12;
if (c++ === 13) {
  alert("condition 1 is true");
} 

if (c === 13) {
  alert("condition 2 is true");
} 

if (++c < 14) {
  alert("condition 3 is true");
} 

if (c === 14) {
  alert("condition 4 is true");
}

// d.
let materialCost = 20000;
let laborCost = 2000;
let totalCost = materialCost + laborCost;
if (totalCost === laborCost + materialCost) {
  alert("The cost equals");
}

// e.
if (true) {
  alert("True");
} 

if (false) {
  alert("False");
} 

// f.
if ("car" < "cat") {
  alert("car is smaller than cat");
}
*/

// Q6
/*
let subject1 = +prompt("Enter marks obtained in first subject:");
let subject2 = +prompt("Enter marks obtained in second subject:");
let subject3 = +prompt("Enter marks obtained in third subject:");

let totalMarks = +prompt("Enter total marks:");
let obtainedMarks = subject1 + subject2 + subject3;
let percentage = (obtainedMarks / totalMarks) * 100;

let grade;
let remarks;

if (percentage >= 80) {
  grade = "A-one";
  remarks = "Excellent";
} 
else if (percentage >= 70) {
  grade = "A";
  remarks = "Good";
} 
else if (percentage >= 60) {
  grade = "B";
  remarks = "You need to improve";
} 
else {
  grade = "Fail";
  remarks = "Sorry";
}

document.writeln("<h3>Marks Sheet</h3>");
document.writeln("Total Marks: " + totalMarks + "<br>");
document.writeln("Marks Obtained: " + obtainedMarks + "<br>");
document.writeln("Percentage: " + percentage.toFixed(2) + "%<br>");
document.writeln("Grade: " + grade + "<br>");
document.writeln("Remarks: " + remarks);
*/

// Q7
/*
let secretNumber = 7;  
let guess = +prompt("Guess the secret number (between 1 and 10):");

if (guess === secretNumber) {
    alert("Bingo! Correct answer");
} else if (guess + 1 === secretNumber) {
    alert("Close enough to the correct answer");
} else {
    alert("Sorry! Try again.");
}
*/

// Q8
/*
let number = +prompt("Enter a number:");

if (number % 3 === 0) {
    alert("The number is divisible by 3.");
} else {
    alert("The number is not divisible by 3.");
}
*/

// Q9
/*
let number = +prompt("Enter a number:");

if (number % 2 === 0) {
  alert("The number is even.");
} else {
  alert("The number is odd.");
}
*/

// Q10
/*
let temperature = +prompt("Enter the temperature:");

if (temperature > 40) {
  alert("It is too hot outside.");
} else if (temperature > 30) {
  alert("The Weather today is Normal.");
} else if (temperature > 20) {
  alert("Today's Weather is cool.");
} else if (temperature > 10) {
  alert("OMG! Today’s weather is so Cool.");
} else {
  alert("It's really cold outside!");
}
*/

// Q11
let firstNumber = +prompt("Enter the first number:");
let secondNumber = +prompt("Enter the second number:");
let operation = prompt("Enter operation (+, -, *, /, %):");

let result;

if (operation === "+") {
  result = firstNumber + secondNumber;
  alert("Result: " + result);
} else if (operation === "-") {
  result = firstNumber - secondNumber;
  alert("Result: " + result);
} else if (operation === "*") {
  result = firstNumber * secondNumber;
  alert("Result: " + result);
} else if (operation === "/") {
  result = firstNumber / secondNumber;
  alert("Result: " + result);
} else if (operation === "%") {
  result = firstNumber % secondNumber;
  alert("Result: " + result);
} else {
  alert("Invalid operation! Please enter +, -, *, /, or %.");
}
