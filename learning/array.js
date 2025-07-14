console.log("array");

// store collection of multiple elements in a single variable
// in js we can have elements of different types 
// array follows shallow copy i.e referetailly point to same object in heap memeory
const myArr = [1,3,2,5,true,'Pratham',86]
console.log(myArr[4]);

console.log(myArr.length);

 
// array is a object so it has many prototype functions

myArr.push("24 oct 2003") // push element to the last
console.log(myArr);

myArr.pop()// pop from the last

console.log(myArr)

myArr.unshift(9) // put element at start pos but its not optimized

myArr.shift() // removes the start only


// linear search in js using array.includes(value to search))

console.log(myArr.includes("Pratham"));// returns true or false 
console.log(myArr.indexOf(true)); // retuns index


// join

const newArr = myArr.join() // join converts to string default
console.log(myArr);
console.log(newArr); // gets converted to string


// slice and splice
// initial array printing
console.log("A",myArr);

// slice
const slice = myArr.slice(1,3) // create a slice of array
// (beg,end) end not included
console.log(slice);
console.log("B",myArr);

//splice
const spliced = myArr.splice(1,3)
// splice manipulates the original array and move the 
// elements in range with itself
// here (beg,end is inclusive)
console.log(spliced);
console.log("c",myArr)




// PART 2 array

// problem with push

const friends = ["Pratham","Rahul","Saqlain","lalit","Ravi"]
const family = ["Ritika","Jitender","Saiyam"]

friends.push(family) // here it created family array inside 
// friends rather than joining both arrays

//console.log(friends);
//console.log(friends[5]);

// concat too has this problem
//const mitr = friends.concat(family)
//console.log(mitr)


// better way to join
//const all = [friends,family]
//console.log(all);


// flat array sabko ek array mai 
let anotherArray = [1,2,3,[4,5,6],7,[6,7,[4,5]]]

const real_another_array = anotherArray.flat(Infinity)
console.log(real_another_array);


// check if object is array

console.log(Array.isArray("Pratham")); // false
// create array from object you give
console.log(Array.from("Pratham"));// convert strings to array
console.log(Array.from(myArr)) // if exists beforehand prinst the same


// doesnt print anything or cant make array
//as it gets confused whether to amke key's array or values
console.log(Array.from({name:"Pratham"}));


// create array from var

let scoreOne = 100
let scoreTwo = 200
let scoreThree = 300

console.log(Array.of(scoreOne,scoreTwo,scoreThree));


