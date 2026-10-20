// ************************* Lecture 1 variable declaration in JS *************************
const idCard = "U22CN150";
let name = "Prahlad";
let age = 19;
var email = "Okaysen123@gmail.com";


// idCard = "U22CN158";
name = "Rekha"; // allowed to change the value of let variable
let myAge = 20.5;
email = "vatss123@gmail.com"; // allowed to change the value of var variable


// console.log(idCard); N0t allowed to change the value of const variable
// console.log(name);


// console.log(typeof idCard);
// console.log(typeof age);
// console.log(email);
// console.log(typeof myAge);
// console.log(typeof name);



// Special case of use in print 
// console.table([idCard, name, age, email, myAge])


// ************************* Lecture 2 data types in JS *************************
"Use strict"; // treat all JS code as newer version, 

// x = 10; // it will throw error because we are using strict mode, so we have to declare variable before using it

// console.log(x); // x is not defined

// let x = 10; // it will not throw error because we have declared variable before using it

// console.log(x); //Allowed to use x after declaration


// alert(3 + 3); // we are using nodejs, not browser
let a = 3;
let b = 3;
let c = a + b;

// console.log(c); // we can use console.log() to print the output in node.js

// Data  types inroduction
let myName = "Prahlad"; // string
let anotherAge = 18; // number 
let isLoggedin = false; // Boolean

// Data : Data is a collection of facts, information, or values that can be stored and processed by a computer.
// Example : let myName = "Prahlad"; myName ka data "Prahlad" , age = 21; 21 is data of age variable


//Data types : A data type defines the type of data that a variable can store.
// types of data type 
// String => ""
// Number => 2 to poower of 53. JavaScript numbers ko generally 64-bit floating-point format mein store karta hai.
// bigint => bade integer k liye 
// boolean => true/false
// null => jab hum value intentionally batate hain ki abhi value nhi hain. Example:- let userName = null;
// undefined => variable declear hua but abhi value assign nhi hua. Example :- let userName; console.log(username); 
// Symbole => Create unique identifiers. Example :- let id = Symbole(); console.log(id);
// object => { key: value } => array, date, object, literal.

// typeof null => "object"
// typeof {} => "object"
// typeof [] => "object"
// typeof undefined => "undefined"

// ************************* Lecture 3 conversionOperation *************************
// Conversion Operation ka matlab hai ek data type ki value ko doosre data type mein convert karna.

let score = "PRAHLAD";
// console.log(typeof score);
// console.log(typeof(score));

let valueInNumber = Number(score);
// console.log(valueInNumber)
// console.log(typeof valueInNumber)

// "33" => Number();
// "22abc" => NaN => Not a Number
// 1 => true; 0 => false;

let isLoggedIn = "Prahlad";
// console.log(isLoggedIn);
let valueInboolean = Boolean(isLoggedIn);
// console.log(valueInboolean)
// console.log(typeof(valueInboolean));

let sumNumber = 45;
let valueInString = String(sumNumber);
// console.log(valueInString)
// console.log(typeof valueInString)

let value = 3;
let valueInNeg = -(value);
// console.log(valueInNeg);
// console.log(typeof valueInNeg)
// console.log(2 ** 4)

let x = "2";
let y = "2";
// console.log(x + y);
// console.log("18" + 1)
// console.log(18 + "1")
// console.log(1 + 2 + "3")
// console.log(3 - "2")
// console.log("3" - 2)

// let profit = 3;
// profit++;
// console.log(profit)


// ************************* Lecture 4 variable declaration in JS *************************
// console.log(2 > 3)
// console.log(2 < 3)
// console.log(2 >= 3)
// console.log(2 <= 3)
// console.log(2 == 3)
// console.log(2 != 3)


// console.log(null == 0)
// console.log(null >= 0)
// console.log(null <= 0)
// console.log(null != 0)

console.log("2" > 1)
console.log("02" > 1)

console.log(undefined == 0);
console.log(undefined > 0);
console.log(undefined < 0);
console.log(undefined != 0);


