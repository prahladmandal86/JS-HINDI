// Primitive 

// 7 types : String, Number, null, Boolean, undefined, Symbol, BigInt

const score = false
const scorevalue = 100.3

const siLoggedIn = false;
const outsideTemp = null;
let userEmail; 

const id = Symbol('123');
const anotherId = Symbol('123');

console.log(id === anotherId); // false


// const bigNumber = 34567890123456789012345678901234567890n;

// Reference (Non Primitive)

// 3 types : Object, Array, Functions 

const heros = ["shaktiman", "naagraj", "doga"];
 let myObj = {
    name: "jack",
    age: 18,
}

const myFunction = function() {
    // Function implementation
    console.log("Hello world!");
}

console.log(typeof anotherId); // "symbol"



// ++++++++++++++++++++++++++++++++++++++++++++++++

// stack (Primitive) ,Heap (Non Primitive)
let MyInsta = "notyour.prahlad"
let anotherInsta = MyInsta;

anotherInsta = "thats.myId"

console.log(MyInsta);
console.log(anotherInsta);

let userOne = {
    email: "prahladmandal324@gmail.com",
    upi: "prahladmandal324@upi"
}

let userTwo = userOne;
userTwo.email = "okaysen123@gmail.com";

console.log(userOne.email);
console.log(userTwo.email);