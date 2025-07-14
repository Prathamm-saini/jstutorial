// whenever we create objects using constructor 
// it is called singleton object i.e unique object 
// 2nd way is object literal

const mySymbol = Symbol("key1")

// we will study object literal
// these objects are stored with key and value pairs
// btw key are assumed to be strings under the hood in js 
// even though you dont type in "" double quotes it's assumed as it is 
const jsUser={
    name:"Pratham",
    age:21,
    [mySymbol]:"mykey1",
    location:"Delhi",
    isLockedIn:true,
    parentsName : ["Jitender","Ritika"],
    "fullname" : "Pratham Saini"
}

// ways to acess objects and its properties
console.log(jsUser.name); // using . operator 
console.log(jsUser['location']); // as you know keys are passed as strings under the hood
// so ""
//console.log(jsUser.fullname) throws an error as it's present in string itself
console.log(jsUser["fullname"]);// here we are forced to use this


// symbol as key and prints
//console.log(jsUser.mySymbol);
//console.log(typeof mySymbol);
// its problematic here as using .operator if we do 
// it treats symbol as strings 


//correct way is syntax change 
// when declaraing symbol in objects use [mySymbol] 

console.log(jsUser[mySymbol]);// no need to put " in symbols"
console.log(typeof mySymbol)// now its symbol only



// how to change value
// only use dot operator here
jsUser.age = 22
Object.freeze(jsUser) // freeze the object cant be changed now
jsUser.age = 21
console.log(jsUser);


// in js you can treat variables cd