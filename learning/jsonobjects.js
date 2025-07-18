 console.log("Api in jsonobjects");
 
console.log("DESTRUCTE VALUES");


const course = {
    corusename : "Js in hindi",
    price : 999,
    courseInstructor : "hitesh"
}
// destructuring in js 
// rather than acessing againa nd again using dot operator 

// destructure the objects like here down below
// const{objectz-keys : any name} = object
const{courseInstructor :Instructor,corusename} = course
// then  use them as variables
// highly used concept in react
console.log(`Instructor's name is ${Instructor} and name of course is `,corusename);

// API (Application Programming Interface) is a set of rules and tools that allows different software applications to communicate with each other. It defines how requests for data or services should be made, and how the responses are delivered, enabling programs to interact without needing to understand each other’s internal workings.

// json
/*
data format in api responses or 
{
    "name":"Pratham",
    "class":"AIDS-B2",
    "enrollNO":"08619051922"
}
    sometimes we do get array of objects too
    [
     {},    
     {}
    ]
*/


