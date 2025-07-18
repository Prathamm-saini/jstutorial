// functions so as we follow dry principle
// some reusable chunk of code 

function greeting(){
    console.log("hello pratham");
    
}

greeting()

function greet(name){
    console.log(`Hello ${name}`);
    
}

greet("Pratham")

function add(num1,num2){
    console.log(num1+num2);
    
}
add(77,23) // works 
add(2,"2") // combines 2 (numb)concat with "2" ex->2+2+"2"->42
// remeber if you write number first they gets added then 
// string is concatinated while if string is written first
// all of it combines into string "2",3,4->234
add("2",2) // same happens here

add(2,null)


// what is parametres -> values defined in fucntion while
// defining the function itself

//argument-> values passed into function for operation
/*
const result = add(1,1)

console.log(result); -> doesnt return anything or undefiend
// coz it just prints the value of add func
doesnt store
*/

function preetyAdd(num1,num2){
    //let reuslt = num1+num2
    //return reuslt
    return num1+num2
    // anything return here is unreachable statement
}

let answer = preetyAdd(50,50)
console.log(answer);


function loginUserMessage(username){
    if(!undefined){
        console.log("first enter username");
        return;
    }
    return `${username} just logged in`
}
console.log(loginUserMessage())

// shopping cart problem in eccom
// when manu values to add you donno how much

function calculateCartPrice(...num){
    return num
}
console.log(calculateCartPrice(100,200,300));
// returns an array of item with price here only pricing array

// passing objects onto function

const user = {
    name:"Pratham",
    collegeName:"Usar",
}

function handleObject(user){
    console.log(`name ${user.name}`);
    return
    
}
handleObject(user)

// passing array in function
const array = [1,2,3,4,5]
function printArray(array){
    return array
}
console.log(printArray(array));


// scoping in functions

let a = 10
const b = 20
var c = 30

console.log(a);
console.log(b);
console.log(c);
// no problem in priniting with any declaration'
// then why did we bought let keyword

// {}-> scope
// we can have conditinal scopes, function scope etc 

if(true){
   let d = 10
   const e = 20
   var f = 30 
}
//console.log(d); throws an error as d is not defined 
// as we are printing globally -?> let
//console.log(e); same for const
console.log(f); // this var actually prints 
// the value and doesnt care about its scope
// thats why we dont use var in js 



// whatever written inside a scope is local scope
// outside of it is global scope

// interview question
// global scope in node environment is different from browser environment

// in local scope we can acess items from global scope but not vice versa
function global(){
    const username ="Prat"
    console.log("entered global");
    
    function local(){
        console.log("local");
        
        const website ="http://youtube.com"
        console.log(username);
    }
    //console.log(website);-> error not accesible
    local()
}



global()
// question

if(true){
    const username ="Pratham"
    if(username=="Pratham"){
        const website = "youtube"
        console.log(username+website); 
    }
    //console.log(website);
    
}
//console.log(username);


// output
/*

pratham youtube
// others will give error
*/

// intresting 

function addOne(num){
    return num + 1
}
addOne(9) // execute and returns but not printed

// function variable
// const funcname = function(keyword)(){}
// this is function hoisting
// throws an error i.e acessing before declring
const addtwo = function(num){ //expression
    return num + 1
}
console.log(addtwo(9))


// catch ()
// with normal function declaration if we call func before declaration it works 
// with expression it doesnt work and throws an error if you acess function before declaration

/* 
this keyword in js
works on current context acessing 
context means what the variables are storing

Arrow Function in JavaScript

*/

const thisUser = {
    username:"hitesh",
    price:1099, 

    welcomeMessage:function(){
        console.log(`${this.username}, welcome to website `); 
        console.log(this);
        
    }
}

thisUser.welcomeMessage()
// context changed here
thisUser.username ="Pratham"
thisUser.welcomeMessage()

// browser's engine global object is window using with onclick etc
// we have different engines like node,bun etc with diff global object
function chai(){
    console.log(this); // this holds a lot of info 
    // console.log()
}
// inside function this keyword remains undefined
chai()



const chai2 = function(){
    let username = "Pra"
    console.log(this.username);
}





// arrow function (this not used here)

const chai3 = ()=>{
    let username = "Prat"
    console.log(this.username);
}
// 2nd way
const add2 = (num1,num2)=>{
    return num1+num2
}
console.log(add2(3,4));
// whenever {} is used return stateement necesaary 

// 3rd way for simple statements
const multiply = (num1,num2) => (num1*num2)
// use braces
const unlimitedPrinting= (...num) => num
// prints an array of numbers 

const username= (username) => ({username:"Prath"})

/* 
Arrow functions, introduced in ES6, are used for their concise syntax and lexical this binding, making them useful for writing short, readable code, especially within array methods or callbacks. They avoid the complexities of this binding in regular functions, making them easier to reason about in certain contexts


*/

// Immediately invoked function expression(iefe)
// its like you write a func and it gets executed
// in practical scenerios whenevr we want our func to get connected to database immediately

// its like init func in golang
// iefe is used to remove pollution from global scope variables defination etc stuff defined there 
// 
(function connection(){
    console.log(`DB CONNECTED`);
    
}());


