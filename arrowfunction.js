const products = [
    { name: "Phone", price: 300 },
    { name: "Laptop", price: 1000 },
    { name: "Keyboard", price: 50 }
];

const sorted = products.sort((a, b) => a.price - b.price);

console.log(sorted);
//Advantages of Arrow Functions

//1. Concise Syntax: Arrow functions have a shorter syntax compared to traditional function expressions, making the code more readable and easier to write.

//2. Lexical 'this' Binding: Arrow functions do not have their own 'this' context. Instead, they inherit 'this' from the surrounding lexical scope, which can be beneficial in certain scenarios, especially in object methods and callbacks.

//3. Implicit Return: For single-expression functions, arrow functions allow for an implicit return without the need for curly braces and the 'return' keyword, further simplifying the code.

//4. No 'arguments' Object: Arrow functions do not have their own 'arguments' object, which can help avoid confusion when working with nested functions.

//Example Use case

const numbers = [1, 2, 3, 4, 5];

// Using arrow function to double each number in the array
const doubled = numbers.map(num => num * 2);

console.log(doubled); // [2, 4, 6, 8, 10]

//Single line arrow function

const addNumber = (s, f) => s + f;

//Multi line arrow function

const multiplyNumbers = (s, f) => {
    return s * f; //People forgot to return in multi line arrow function
}