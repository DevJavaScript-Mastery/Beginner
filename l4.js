// Assign the value 5 to x
let x = 5;
// Assign the value 2 to y
let y = 2;
// Assign the value x + y to z:
let z = x + y;

let x = 5;
let y = 2;
let z = x + y;


let x = 5;
let y = 2;
let z = x * y;

let text1 = "20";
let text2 = "5";
let result = text1 < text2;


let text1 = "20";
let text2 = "5";
let result = text1 < text2;

let text1 = "20";
let text2 = "5";
let result = text1 < text2;

let text1 = "20";
let text2 = "5";
let result = text1 < text2;

let x = 5 + 5;
let y = "5" + 5;
let z = "Hello" + 5;

let x = 5;
let y = 2;
let z = x - y;

let x = 5;
let y = 2;
let z = x / y;

let x = 5;
let y = 2;
let z = x % y;

let x = 5;
x++;
let z = x;

let x = 5;
x--;
let z = x;

let x = 5;
let z = x ** 2;

let x = 5;
let z = Math.pow(x,2);

let x = 100 + 50 * 3;

let x = (100 + 50) * 3;

let x = 100 + 50 - 3;

let x = -100;
x >>= 5;

let x = -100;
x >>= 5;

let x = 10;
x %= 5;
let x = 10;
x /= 5;

let x = 10;
x **= 5;

let x = 10;
x *= 5;

let x = 10;
x &&= 5;

let x = 10;
x ||= 5;

let x;
x ??= 5;

// Numbers:
let length = 16;
let weight = 7.5;

// Strings:
let color = "Yellow";
let lastName = "Johnson";

// Booleans
let x = true;
let y = false;

// Object:
const person = {firstName:"John", lastName:"Doe"};

// Array object:
const cars = ["Saab", "Volvo", "BMW"];

// Date object:
const date = new Date("2022-03-25");

// Single quote inside double quotes:
let answer1 = "It's alright";

// Single quotes inside double quotes:
let answer2 = "He is called 'Johnny'";

// Double quotes inside single quotes:
let answer3 = 'He is called "Johnny"';
// With decimals:
let x1 = 34.00;

// Without decimals:
let x2 = 34;


let y = 123e5;    // 12300000
let z = 123e-5;   // 0.00123


let x = 5;
let y = 5;
let z = 6;
(x == y)       // Returns true
(x == z)       // Returns false

typeof 0              // Returns "number"
typeof 314            // Returns "number"
typeof 3.14           // Returns "number"

}

let value = toCelsius(77);


function toCelsius(fahrenheit) {
  return (5/9) * (fahrenheit-32);
}

let value = toCelsius();


function toCelsius(fahrenheit) {
  return (5/9) * (fahrenheit-32);
}

let value = toCelsius;


let x = toCelsius(77);
let text = "The temperature is " + x + " Celsius";

let text = "The temperature is " + toCelsius(77) + " Celsius";


// code here can NOT use carName

function myFunction() {
  let carName = "Volvo";
  // code here CAN use carName
}

// code here can NOT use carName
