let username = "Bassam";   // Global scope

function showName() {
    console.log(username);   // Accessible here
}

showName();  // Bassam
console.log(username); // Bassam


//Function scope

function test() {
    let message = "Hello bassam"; // Function scope
    console.log(message);  // Works
}

test();

console.log(message);


//Block scope

if (true) {
    let age = 25;   // Block scope
    const city = "Lahore";
    console.log(age, city); // Works
}

console.log(age);  // Error
console.log(city); // Error