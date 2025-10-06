// MATH EXPRESSIONS

// Q1
/*
let number = prompt("Enter the number");

document.writeln("The value of number is: " + number + "<br><br>");

document.writeln("The value of ++number is: " + ++number + "<br>");
document.writeln("Now the value of number is: " + number + "<br><br>");

document.writeln("The value of number++ is: " + number++ + "<br>");
document.writeln("Now the value of number is: " + number + "<br><br>");

document.writeln("The value of --number is: " + --number + "<br>");
document.writeln("Now the value of number is: " + number + "<br><br>");

document.writeln("The value of number-- is: " + number-- + "<br>");
document.writeln("Now the value of number is: " + number);
*/

// Q2
/*
let a = 2;
let b = 1;

let result = --a - --b + ++b + b--;

document.writeln("a = " + a + "<br>");
document.writeln("b = " + b + "<br>");
document.writeln("result = " + result);
*/

// Q3;

// let userName = prompt("Enter your name:");
// document.writeln("Hello " + userName + "! Welcome to my website.");

// Q4

let number = prompt("Enter a number to print its multiplication table:", 5);

document.writeln("<h3>Multiplication Table of " + number + "</h3>");

for (let i = 1; i <= 10; i++) {
  document.writeln(number + " x " + i + " = " + number * i + "<br>");
}

// Q5

let subject1 = prompt("Enter name of first subject:");
let subject2 = prompt("Enter name of second subject:");
let subject3 = prompt("Enter name of third subject:");

let totalMarksEach = 100;
let marks1 = +prompt("Enter obtained marks in " + subject1 + ":");
let marks2 = +prompt("Enter obtained marks in " + subject2 + ":");
let marks3 = +prompt("Enter obtained marks in " + subject3 + ":");

let totalObtained = marks1 + marks2 + marks3;
let totalMarks = totalMarksEach * 3;
let percentage = (totalObtained / totalMarks) * 100;

document.writeln("<h3>Result Summary</h3>");
document.writeln("<table border='1' cellspacing='0' cellpadding='5'>");
document.writeln(
  "<tr><th>Subject</th><th>Total Marks</th><th>Obtained Marks</th></tr>"
);
document.writeln(
  "<tr><td>" +
    subject1 +
    "</td><td>" +
    totalMarksEach +
    "</td><td>" +
    marks1 +
    "</td></tr>"
);
document.writeln(
  "<tr><td>" +
    subject2 +
    "</td><td>" +
    totalMarksEach +
    "</td><td>" +
    marks2 +
    "</td></tr>"
);
document.writeln(
  "<tr><td>" +
    subject3 +
    "</td><td>" +
    totalMarksEach +
    "</td><td>" +
    marks3 +
    "</td></tr>"
);
document.writeln("</table>");
document.writeln("<br><b>Total Marks:</b> " + totalMarks);
document.writeln("<br><b>Marks Obtained:</b> " + totalObtained);
document.writeln("<br><b>Percentage:</b> " + percentage.toFixed(2) + "%");
