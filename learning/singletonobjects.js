console.log("singleton objects");


const singleton = new Object();
console.log(singleton); // returns an empty object 
//  singleton ={} throws an error coz singleton is a constant
// same gets done with  const literalObject = {}


const literalObject = {}
literalObject.name="John";
literalObject.age=30;
console.log(literalObject);


// objects in objects 
const regularUser = {
    email:"prathamzxc@gmail.com",
    fullname:{
        firstName :"Pratham",
        lastName:"Saini"
    }
}
console.log(regularUser);
console.log(regularUser.fullname.firstName);
console.log(regularUser.fullname.lastName);


// 
const obj1 = {1:"a",2:"b" }
const obj2 = {3:"c",4:"d"}

// combines but mark them as obj1 and obj2

const obj3 = { obj1,obj2}
console.log(obj3);

// combines correctly without marking them as obj 1 and obj 2 

const obj4 = {...obj1,...obj2}
console.log(obj4)



// combining objecst with same keys overwrites the
// previous value
const obj5 = {1:"a",2:"b"}
const obj6 = {1:"c",2:"d"}
console.log({...obj5,...obj6}) // a and b is lost 


// 
console.log(Object.keys(regularUser));
// returns an array of keys 
console.log(Object.values(regularUser));

console.log(Object.entries(regularUser));


// check property exists
console.log("email" in regularUser)


