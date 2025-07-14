console.log("conversions")


let score = "33abc"
// here its clear value is 33 and is coming from score variable
// sometimes in web requests you may not know or it may caome through json or any format

console.log(typeof score)
console.log(typeof(score))

//conversion from strings to number using Number
let valueInNumber = Number(score)
// console log it it will give you 33 
// but what if i change input to "33abc"
// it still gives its type as number after conversion
// but if you print it will come out to be NaN
console.log(typeof valueInNumber)
console.log(valueInNumber)

// null gets converted to 0 if converted to integer
// undefined -> NaN
// supose string pratham -> converted -> NaN
// not a number -> NaN still returns a number if type checked


let isLoggedIn = 1
let booleanIsLoggedIn = Boolean(isLoggedIn)
console.log(booleanIsLoggedIn)
// sucessfully converted from 1 to boolean 0 to false
// empty string -> false , normal string -> false

let isempty= ""
let booleanIsEmpty = Boolean(isempty)
console.log(booleanIsEmpty)


let someNumber = 33 
let someString = String(someNumber)
console.log(someNumber)



/*
Operations in js
+ - * / % - basic maths operation
 */
// 
let value = 3
let negValue = -value
console.log(negValue)

// concatenation of strings
let str1 = "Pratham "
let str2 = "Saini"
str3 = str1+str2
console.log(str3)

// confusion of conversions in strings
// quite confusing under the hood mainly used for making your own browser
   
// algo-> if string is written first all is treated as string and concatenated
// if number is there first operation of +- happens and then concatenation
console.log("1"+2)
console.log(1+"2")
console.log("1"+2+2)
console.log(1+2+"2")

// code should be simple no point in doing all diff stuff jsut for the sake fo doing or exam

console.log(+true) //1
console.log(+"") // 0 empty parentehesi -> 0 

// bad code
let num1,num2,num3 
num1=num2=num3 = 2+2


// ++ operator increments by 1  postfix operator
//y = ++x will first increment x and then assign the new value to y
//Example in an expression: y = x++ will assign the original value of x to y, and then increment x

let gameCounter = 100
gameCounter++;
console.log(gameCounter)

let pre = 2
console.log(--pre)


// assignment and compariosn operators
// > ,<,>=,<=,!=,==

// always ensure you convert to similar datatypes and then compare
// here js will automtically do it and comapre
console.log("2">1) // true
console.log("02">1) //true


// null is considered grrated than 0 
// its coz == and comparsion operators works diffrently 
// comparison converts null to number i.e 0 only therefore null>=0 is true
// while null>0 is false
// while == operator works differently and gives false

// undefined always gives false not comparable
console.log(null>0)
console.log(null==0)
console.log(null>=0)

// triple equals to operator 

console.log("2"===3)
// strict check ===


/* Summary of Data Types
data is categorised in usually two categories depending on how they are acessed and stored in memery
1.primitive
string,number,boolean,null,undefined (value not yet came ),symbol
(make value unique)
and BigInt (sci value)
no float here number is both int and float
null is completely empty

2.Reference type (non primitive)
array,objects,functions

javascript is dynamically typed language i.e no need to define datatypes as int/string etc
at compile time




*/


const id = Symbol('123')
const anotherId = Symbol('123')
console.log(id==anotherId)

const bigNumber = 12222222222n
// just put n in big int
// even if you pass same value inside Symbol internally it gets stored
// differently cozof symbol 



// array declaration it is of type object
const friends = ["Pratham","Rahul","Lalit","Saqlain","Ravi"]

// object declaration
let myobj = {
    'Pratham':86,
    'Saqlain':87,
    'Ravi':108
}

// function
// function if of type function only called as object function
const myFunc = function(){
    console.log("Hello JavaScript")
}

let nullObj = null
console.table([typeof friends,typeof myobj,typeof myFunc,typeof nullObj])


