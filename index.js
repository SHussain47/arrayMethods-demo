// ----------------- Scopes ----------------- //
// Global Scope
let age = 89;

function person() {
  let name = "Tom";
  const age = 45;
  let colour = "Teal";
  // Function Scope
  console.log(age);
}

function changeColour() {
  let colour = "purple";
  const age = 19;
  let random = "Teal";
  console.log("Age: ", age);
}

console.log(age);
person();
changeColour();

let bird = "Mandarin duck";
function birdWatch() {
  let bird = "Golden Pheasant";
  console.log(bird);
}
birdWatch();

if (true) {
  // Block Scope
  let animal = "Panda";
  console.log(animal);
}
// console.log(animal); // Error since it can't access animal inside block scope

const animals = ["Bear", "Panda", "Lion"];
for (let i = 0; i < animals.length; i++) {
  const animal = animals[i];
  console.log(animal);
}
// console.log(animal); // Error since it can't access animal inside block scope

// ----------------- EXPRESSIONS ----------------- //
function add(num1, num2) {
  return num1 + num2;
}
// Anonymous function - no name
const sum = function (num1, num2) {
  return num1 + num2;
}
console.log(sum(1, 2));

sayHello();
function sayHello() {
  console.log("Hello");
}

// sayHi(); // Error
const sayHi = function () {
  console.log("Hi");
}
sayHi();


function multiply(num1, num2) {
  return num1 * num2;
}
const subtract = function (num1, num2) {
  return num1 - num2;
}
const divide = function (num1, num2) {
  return num1 / num2;
};

const operations = [add, multiply, divide, subtract];
console.log(operations[0](1,2));
console.log(operations[1](1, 2));
console.log(operations[2](1, 2));
console.log(operations[3](1, 2));


// ----------------- CALLBACK FUNCTIONS ----------------- //
function saySomething (callback) {
  console.log("Say Something: ");
  callback();
}
function sayDone() {
  console.log("CATS!");
}
saySomething(sayDone);


function logger() {
  console.log("5 seconds later");
}
setTimeout(logger, 5000); // Delays by 5 secs


const names = ["Alice", "Bonnie", "Charlie"];

const print = function (name) {
  console.log(name);
};
console.log(print);
// .forEach only for arrays
names.forEach(function (name) {
  console.log("Hello", name)
});

const printName = names.forEach(function (name) {
  return name;
});
console.log(printName);

const nums = [1, 2, 3];
const doubles = function (num) {
  return num * 2;
};
// .map creats array
const doubled = nums.map(doubles);
console.log(doubled);


// Regular Function 
function greet(name) {
  return "Hello, " + name;
};

// Arrow Function
const greet1 = (name) => "Hello, " + name;
console.log(greet1("Chuck"));

const addition = (a, b) => a + b;
console.log(add(2, 3));


const numbers = [20, 21, 22, 23, 24];
const squared = numbers.map((num) => {
  console.log(num * num);
  return num * num;
});
console.log("Squared", squared);
// One line without curly braces does not need return statement 
const x2 = numbers.map((num) => num * 2);
console.log(x2);

// .filter graps elements that meet the conditions set
const evens = numbers.filter((num) => {
  if (num % 2 === 0) {
    return num;
  }
});
console.log("Evens", evens);

const words = ["Dogs", "Dolphine", "Cat"];
// .find only the first time that meets the requirement 
const result = words.find((word) => {
  return word.startsWith("D");
});
console.log(result);

const scores = [80, 92, 45, 34];
// .some - some need to meet requirement
const hasFailed = scores.some((score) => score < 50);
console.log("Failed:", hasFailed);

const ages = [80, 92, 45, 34];
// .every - all need to meet requirement
const areAdult = ages.every((score) => age >= 21);
console.log("Adult:", areAdult);


const numbs = [1, 2, 3, 4];
const sumOf = numbs.reduce((accumulator, currentValue) => {
  console.log(
    "accum",
    accumulator,
    "current",
    currentValue,
    "total:",
    accumulator + currentValue
  );
  return accumulator + currentValue;
}); 
console.log(sumOf);

// const letters = ["a", "b", "c", "d"];
// const counts = letters.reduce((acc, letter) => {
//   acc[letter] = 1;
// });


const shoppingList = [
  { product: "grapes", quantity: 1, price: 3.99 },
  { product: "apples", quantity: 2, price: 12.99 },
  { product: "oranges", quantity: 5, price: 10.99 },
];
const findGrapes = shoppingList.find((item) => {
  return item.product === "grapes";
});
console.log(findGrapes);

const totalItems = shoppingList.reduce((acc, curr) => {
  return acc + curr.quantity;
}, 0);
console.log(totalItems);










