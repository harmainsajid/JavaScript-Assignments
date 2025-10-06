// MATH EXPRESSIONS

// Q1
/*
let num1 = 3;
let num2 = 5;
let sum = num1 + num2;
document.writeln("Sum of " + num1 + " and " + num2 + " is " + sum + "</br>");
*/

// Q2
/*
let sub = num1 - num2;
document.writeln(
  "Subtraction of " + num1 + " and " + num2 + " is " + sub + "</br>"
);
let divi = num1 / num2;
document.writeln(
  "Division of " + num1 + " and " + num2 + " is " + divi + "</br>"
);
let multi = num1 * num2;
document.writeln(
  "Multiplication of " + num1 + " and " + num2 + " is " + multi + "</br>"
);
let mod = num1 % num2;
document.writeln("Modulus of " + num1 + " and " + num2 + " is " + mod);
*/

// Q3
/*
let num;
document.writeln("Value after variable declaration is: " + num + "</br>");
num = 5;
document.writeln("Initial value: " + num + "</br>");
++num;
document.writeln("Value after increment is: " + num + "</br>");
num = num + 7;
document.writeln("Value after addition is: " + num + "</br>");
--num;
document.writeln("Value after decrement is: " + num + "</br>");
num = num % 3;
document.writeln("The Remainder is: " + num);
*/

// Q4
/*
let ticketCost = 600 * 5;
document.writeln(
  "Total cost to buy 5 tickets to a movie is " + ticketCost + "PKR" + "</br>"
);
*/

// Q5
/*
for (let i = 1; i <= 10; i++) {
  let num = 4;
  document.writeln(num + " x " + i + " = " + num * i + "</br>");
}
*/

// Q6
let celsius = 25;
let fahrenheit = (celsius * 9) / 5 + 32;
document.writeln(celsius + "°C is " + fahrenheit + "°F" + "<br>");

let fahrenheit2 = 70;
let celsius2 = ((fahrenheit2 - 32) * 5) / 9;
document.writeln(fahrenheit2 + "°F is " + celsius2 + "°C");

// Q7
/*
let priceItem1 = 650;
let priceItem2 = 100;
let quantityItem1 = 3;
let quantityItem2 = 7;
let shippingCharges = 100;

let totalCost =priceItem1 * quantityItem1 + priceItem2 * quantityItem2 + shippingCharges;

document.writeln("<h2>Shopping Cart</h2>");
document.writeln("Price of item 1 is " + priceItem1 + "</br>");
document.writeln("Quantity of item 1 is " + quantityItem1 + "</br>");
document.writeln("Price of item 2 is " + priceItem2 + "</br>");
document.writeln("Quantity of item 2 is " + quantityItem2 + "</br>");
document.writeln("Shipping Charges: " + shippingCharges + "</br>" + "</br>");
document.writeln("Total cost of your order is " + totalCost + "</br>");
*/

// Q8
/*
let totalMarks = 980;
let obtainedMarks = 804;
let percentage = (obtainedMarks / totalMarks) * 100;

document.writeln("<h2>Marks Sheet</h2>");
document.writeln("Total Marks: " + totalMarks + "</br>");
document.writeln("Marks Obtained: " + obtainedMarks + "</br>");
document.writeln("Percentage: " + percentage + "%");
*/

// Q9
/*
let usDollars = 10;
let saudiRiyals = 25;
let totalInPKR = usDollars * 104.8 + saudiRiyals * 28;

document.writeln("<h2>Currency in PKR</h2>");
document.writeln("Total Currency in Pakistani Rupees: " + totalInPKR);
*/

// Q10

let number = 10;
let result = ((number + 5) * 10) / 2;

document.writeln("<h2>Arithmetic Operations</h2>");
document.writeln("Initial number: " + number + "</br>");
document.writeln("Result after calculation: " + result + "</br>");

// Q11

let currentYear = 2025;
let birthYear = 2005;
let age1 = currentYear - birthYear;
let age2 = age1 - 1;

document.writeln("<h2>Age Calculator</h2>");
document.writeln("Current Year: " + currentYear + "</br>");
document.writeln("Birth Year: " + birthYear + "</br>");
document.writeln("They are either " + age2 + " or " + age1 + " years old.");

// Q12

let radius = 20;
let pi = 3.142;
let circumference = 2 * pi * radius;
let area = pi * radius * radius;

document.writeln("<h2>The Geometrizer</h2>");
document.writeln("Radius of circle: " + radius + "</br>");
document.writeln("The circumference is " + circumference + "</br>");
document.writeln("The area is " + area);

// Q13

let favoriteSnack = "Chocolates";
let currentAge = 18;
let maxAge = 80;
let amountPerDay = 2;
let totalNeeded = (maxAge - currentAge) * 365 * amountPerDay;

document.writeln("<h2>The Lifetime Supply Calculator</h2>");
document.writeln("Favorite Snack: " + favoriteSnack + "</br>");
document.writeln("Current Age: " + currentAge + "</br>");
document.writeln("Estimated Maximum Age: " + maxAge + "</br>");
document.writeln("Amount per day: " + amountPerDay + "</br>");
document.writeln(
  "You will need " +
    totalNeeded +
    " " +
    favoriteSnack +
    " to last you until the ripe old age of " +
    maxAge +
    "."
);
