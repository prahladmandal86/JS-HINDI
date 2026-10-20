// String => A String is a sequence of character used to represet text, such as letter, number, symbole. 

const name = "Prahlad";
const repoCount = 50;

// console.log(name + repoCount);

// console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);

const gameName = new String('Prahlad');
// console.log(gameName[4]);
// console.log(gameName.length);
// console.log(gameName.toUpperCase());


// console.log(gameName.charAt(1));
// console.log(gameName.indexOf('r'));

const newString = gameName.substring(0, 4);
// console.log(newString);

const anotherString = gameName.slice(-5, 4);
// console.log(anotherString);

const newStringOne = "    Prahlad   ";
console.log(newStringOne);
console.log(newStringOne.trim());

const url = "https://prahlad.com/prahlad%20kumar"

console.log(url.replace('%20' , '_'));

console.log(url.includes('nibha'));




