const name = "Pratham"
const repoCount = 50

console.log(name+repoCount+"value"); // outdated syntax

// Modern way of Concatenation
// string interpolation
// backticks format ``
console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);

// syntax write `whatver you wanna write (add ${write var here} before adding var )`

// Declaring strings using new keyword
//here instead of primitive's its an object type
const gameName = new String("Pratham")
// just we get some additional methods

console.log(gameName[0]); //indexed
console.log(gameName.__proto__) // referes to strings.prototype object 
// it is a prototype for all string obj (both primitive strings and wrapper strings)
// provides many methods

console.log(gameName.length);
console.log(gameName.toUpperCase());
console.log(gameName.charAt(2));// returns character at a particular index


console.log(gameName.indexOf('m'));
// retruns index at which aparticualr index is present


const newString = gameName.substring(0,4)
// creating a new string from original string
console.log(newString);

// similar to substring just you acn give negative values in slice
// and can start from reverse dir
const anotherString = gameName.slice(-1)
// slice(begin,end)
console.log(anotherString);



// TRIM AND REPLACE

const newStringOne ="  hitesh   "
console.log(newStringOne.trim()); // trim from both start and end
console.log(newStringOne.trimStart()) // trim from start
console.log(newStringOne.trimEnd()) // trim from end


// in web we get many values in strings format
const url = "http://github.com"

console.log(url.replace('github','google'))

// doesnt change the original object as its a primitive data type
