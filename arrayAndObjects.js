const arr = [
    ["apple", "banana", "cherry"],
    ["dog", "cat", "mouse"],
    ["red", "blue", "green"]
]


console.log(arr[0][1]);
console.log(arr[2][2]);

arr.push(["new", "item"]);
console.log(arr);
//Using Length property we can find number of elements in array
console.log(arr.length); // 4



//Comparing Reference Types (Objects and Arrays) 

const array1 = [1, 2, 3];
const array2 = [1, 2, 3];

console.log(array1 === array2); // false

const object1 = { a: 1, b: 2 };
const object2 = { a: 1, b: 2 };

console.log(object1 === object2); // false

const array3 = array1;

console.log(array1 === array3); // true

//when Equality returns true

const a = [1, 2, 3];
const b = a;

console.log(a === b); // true



//This keyword in Objects

const person = {
    name: "Bassam",
    age: 25,
    greet: function () {
        console.log(`Hello, my name is ${this.name}`);
    }
};

person.greet(); // Hello, my name is Bassam
///With Class 
class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    greet() {
        console.log(`Hello, my name is ${this.name} and my age is ${this.age}`);
    }
}
const person1 = new Person("Bassam Ahmad", 30);

person1.greet(); // Hello, my name is Bassam Ahmad




//Guard Clause (Nested)

//Without Guard Clause

function processUser(user) {
    if (user) {
        if (user.isActive) {
            console.log("Processing active user:", user.name);
        }
    }
}


//With Guard Clause
//To avoid nested if statements
function processUserGuard(user) {
    if (!user || !user.isActive) return;
    console.log("processing active user", user.name)
}
//Ternary Operator Example  

const age = 20;

const canVote = age >= 18 ? "Yes, can vote" : "No, cannot vote";

console.log(canVote); // Yes, can vote