// ARRAYS
// Q1
// let studentNames = [];

// Q2
// let stdname = new Array();

// Q3
// let str = ["apple", "mango", "banana"];

// Q4
// let num = [12, 53, 46, 89];

//Q5
// let bool = [true, false];

//Q6
// let miXArray = ["Ali", 25, true];

// Q7
/*
let qualifications = ["SSC", "HSC", "BCS", "BS", "BCOM", "MS", "M.Phil", "PhD"];
document.writeln(
  "Qualifications:" +
    qualifications[0] +
    "</br>" +
    "</br>" +
    qualifications[1] +
    "</br>" +
    qualifications[2] +
    "</br>" +
    qualifications[3] +
    "</br>" +
    qualifications[4] +
    "</br>" +
    qualifications[5] +
    "</br>" +
    qualifications[6] +
    "</br>" +
    qualifications[7] +
    "</br>"
);
*/

// Q8
/*
let stdNames = ["Michael", "Jhon", "Tony"];
let stdScores = [320, 230, 480];
let stdPercentage = [
  (stdScores[0] / 500) * 100,
  (stdScores[1] / 500) * 100,
  (stdScores[2] / 500) * 100,
];
document.writeln(
  "Score of " +
    stdNames[0] +
    " is " +
    stdScores[0] +
    ". Percentage: " +
    stdPercentage[0] +
    "%" +
    "</br>" +
    "Score of " +
    stdNames[1] +
    " is " +
    stdScores[1] +
    ". Percentage: " +
    stdPercentage[1] +
    "%" +
    "</br>" +
    "Score of " +
    stdNames[2] +
    " is " +
    stdScores[2] +
    ". Percentage: " +
    stdPercentage[2] +
    "%"
);
*/

// Q9
/*
let colors = ["pink", " black", " white", " blue"];

colors[0] = prompt("What color you want to add at the beginning");
colors[3] = prompt("What color you want to add at the end");
colors[2] = prompt("What color you want to add at the mid");
colors[1] = prompt("What color you want to add at the mid");
document.writeln("</br>" + colors);
*/

// Q10
/*
var studentScores = [320, 230, 480, 120];
document.writeln("Score of Students : " + studentScores + "</br>");
studentScores.sort();
document.writeln("Ordered Scores of Students :", studentScores);
*/
// Q11
/*
var cities = ["Karachi", " Lahore", " Islamabad", " Quetta", " Peshawar"];
var selectedCities = cities.slice(2, 4);
document.writeln("Cities List : ", cities + "</br>");
document.writeln("Selected Cities List : ", selectedCities);
*/
// Q12
/*
let arr = ["This", " is", " my", " cat"];
document.writeln("Array" + "</br>" + arr + "</br>");
let singleString = arr.join("");
document.writeln("String" + "</br>" +singleString);
*/

// Q13
let queue = [];
queue.push("Keyboard");
queue.push("Mouse");
queue.push("Printer");
queue.push("Monitor");

document.writeln(queue.shift());
document.writeln(queue.shift());
document.writeln(queue.shift());
document.writeln(queue.shift());

// Q14
let items = [];

items.push("Keyboard");
items.push("Mouse");
items.push("Printer");
items.push("Monitor");

document.writeln("Devices: " + items + "<br><br>");

document.writeln("Out:<br>" + items.pop() + "<br>");
document.writeln("Out:<br>" + items.pop() + "<br>");
document.writeln("Out:<br>" + items.pop() + "<br>");
document.writeln("Out:<br>" + items.pop());

// Q15
let phoneManufacturers = [
  "Apple",
  "Samsung",
  "Motorola",
  "Nokia",
  "Sony",
  "Haier",
];
document.writeln("<select>");

for (let i = 0; i < phoneManufacturers.length; i++) {
  document.writeln("<option>" + phoneManufacturers[i] + "</option>");
}
document.writeln("</select>");
