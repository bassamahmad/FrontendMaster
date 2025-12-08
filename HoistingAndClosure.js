//Closure

function getUserData(user) {
    var name = user.name;
    var age = user.age;
    function showUserName() {
        console.log("here is the user ->", name)
    }
    return showUserName;
}
const user = { name: "Bassam", age: "30" }
const displayName = getUserData(user)

displayName();


//Switch statement

const myName = "bassam";

switch (myName) {
    case "bassam":
        console.log("My name is Bassam");
        break;
    case "zubair":
        console.log("My name is Zubair");
        break;
    case "ali":
        console.log("My name is Ali");
        break;
    default:
        console.log("Name not found");
}

//When to use switch statement

//WHen tyou have to compare the same variable with multple values  

//Ensure to use variables inside curly braces otherwise they will leak 
const action = "login";
switch (action) {
    case "login": {
        const message = "Welcome !"
        console.log(message);
        break;
    }
    case "logout": {
        console.log(message)
        break;
    }
}

//Assignment 

function isSeason(month) {
    switch (month) {
        case 12:
        case 1:
        case 2:
            return "Winter";
        case 3:
        case 4:
        case 5:
            return "spring";
        case 6:
        case 7:
        case 8:
            return "summer"
        case 9:
        case 10:
        case 11:
            return "Fall"
        default:
            return "not found"
    }
}
console.log(isSeason(7))
console.log(isSeason(12))


//ForLoop

//Exercise
const evenNumbers = []
for (let i = 1; i <= 10; i++) {
    evenNumbers.push(i * 2)
}

let sum = 0;

for (let i = 0; i < evenNumbers.length; i++) {
    sum = sum + evenNumbers[i]
}

console.log(evenNumbers)
console.log(sum)


//Recursion
//Recursion happen when we call the function nested call of same functions
//When to use, when we have a tree like structure
function countDown(n) {
    console.log(n)
    if (n <= 0) return
    console.log("before")
    countDown(n - 1)
    console.log("after")
}
countDown(5)


//Arrays Methods
//Map

const numbers = [1, 2, 3, 4, 5]
const double = numbers.map((number) => {
    return number * 2
})
console.log(double)

//Filter Method
 
//Reduce
// What is the difference between the some and every array methods?

// Select the correct answer.

// some returns true if at least one element passes the test, while every requires all elements to pass
// some returns the first matching element, while every returns an array of all matches
// some creates a new array with matching elements, while every modifies the original array
// some checks for truthy values, while every checks for strictly true boolean values
