 console.log("conrol flow in js ");
 
 // if
const isUserloggedIn = true
const temperature = 41

// if ( temperature === 40 ){
//     console.log("less than 50");
// } else {
//     console.log("temperature is greater than 50");
// }

// console.log("Execute");
// <, >, <=, >=, ==, !=, ===, !==

// const score = 200

// if (score > 100) {
//     let power = "fly"
//     console.log(`User power: ${power}`);
// }

// console.log(`User power: ${power}`);


// const balance = 1000

// if (balance > 500) console.log("test"),console.log("test2");

// if (balance < 500) {
//     console.log("less than 500");
// } else if (balance < 750) {
//     console.log("less than 750");
    
// } else if (balance < 900) {
//     console.log("less than 750");
    
// } else {
//     console.log("less than 1200");

// }

const userLoggedIn = true
const debitCard = true
const loggedInFromGoogle = false
const loggedInFromEmail = true

if (userLoggedIn && debitCard && 2==3) {
    console.log("Allow to buy course");
}

if (loggedInFromGoogle || loggedInFromEmail) {
    console.log("User logged in");
}

// switch (key) {
//     case value:
        
//         break;

//     default:
//         break;
// }

const month = "march"

switch (month) {
    case "jan":
        console.log("January");
        break;
    case "feb":
        console.log("feb");
        break;
    case "march":
        console.log("march");
        break;
    case "april":
        console.log("april");
        break;

    default:
        console.log("default case match");
        break;
}


// true and false are strict values
// there is another one's truthy and falsy values
// userEmail conatins a string -> truthy value by default
const userEmail ="prathamzxc@gmail.com"
if(userEmail){
    console.log("email is present");
}else{
    log("email is not present");
}

// falsy values
// 0,"",null,undefined,false,NaN,0n,BigInt
// truthy values
//"0","false:"," ",[],{},function(){},new Date(),Infinity,symbol("symbol")



// if false ==0  -> true
// if false ===0 -> false strict equality check type on both side

// NUllish coalescing operator (??): null undefined
// it is used to provide a default value when the leftside is null or undefined

 
let val;
val = 5 ?? 10
let val1 = null ?? 10 
let val2 = undefined ?? 10
// this is made for optional chaining as well tackling with null and undefiend as default values
// it gives default value when  left side is null or undefined

// ternary operator
//condition ?  true : false
// if cond is true then return true value otehrwie false

const iceTeaPrice = 100
iceTeaPrice <=80 ? console.log("less than 80") :console.log("greater than 80");
