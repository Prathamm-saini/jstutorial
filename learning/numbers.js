console.log("numbers and maths")

const score = 400 // primitive type

// object creation using new keyword
const balance = new Number(100) // reference type
console.log(balance);

console.log(balance.toString());
console.log(typeof  balance);

console.log(balance.toFixed(2)); // gives result upto 2 decimal values

const otherNumber = 8.080
console.log(otherNumber.toPrecision(2)) // precise value  upto 3 digits 



const hundreds = 10000000
console.log(hundreds.toLocaleString('en-IN'))
// difficukt to read so using hundreds.toLocateString('en-In')
//en-IN -> indian -. converts into indian system with commas


// MAX AND MIN
console.log(Number.MAX_VALUE);
console.log(Number.MIN_VALUE)


// Maths in js
console.log(Math);
console.log(Math.abs(-2));//absolute value
console.log(Math.round(8.096,2));//round-off to int
console.log(Math.ceil(4.3));// anything greater than nearest int i.e 4 gives 5 
console.log(Math.floor(4.9)); //preecedent int

console.log(Math.max(4,3,6,8)); // max value from list


console.log(Math.floor(Math.random()*10)+1);
// value can be 0 too so add one 
//you can use floor to make it integer
// gives random value btwn 0 and 1 
// problem statement - valye from 1-6 needed to make a dice

//trick'
const max = 6
const min = 1

console.log(Math.floor(Math.random()*(max-min+1) +min));

 
