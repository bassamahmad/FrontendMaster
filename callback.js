//callback Function Example

const callBackFunction = (a, b, callback) => {
    let result = a + b;
    callback(result);
}
const showResult = (sum) => {
    console.log(sum)
}
callBackFunction(5, 10, showResult);

//When to use callback functions

//1. Asynchronous operations: Callbacks are often used in asynchronous operations like reading files, making network requests, or handling events.

//2. Event handling: In web development, callbacks are commonly used to handle events like button clicks or form submissions.

//3. Higher-order functions: Functions that take other functions as arguments or return functions as results often use callbacks to customize behavior.

//Example Use case

//let say

const isSolve = (a, b, callback) => {
    return callback(a, b);
}
const add = (x, y) => x + y;
const multiply = (x, y) => x * y;
const subtract = (x, y) => x * y;

console.log(isSolve(5, 10, add)); //15
console.log(isSolve(5, 10, multiply)); //50
console.log(isSolve(10, 5, subtract)); //5

//Here is the real time example of callback function
function getUserData(callback) {
    fetch("https://jsonplaceholder.typicode.com/users/1")
        .then(response => response.json())
        .then(data => callback(data)); // callback used here
}

const showUser = (user) => {
    console.log("User Name:", user.name);
};

getUserData(showUser);