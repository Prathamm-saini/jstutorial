console.log("Date and Time");
console.log("Date is an object in js defined from single moment from jan 1 1970");


let myDate = new Date()
console.log(myDate);// retuns a string , not readable
console.log(String(myDate)) // retuns current time with readable fromatting

console.log(myDate.toDateString()); // with day 
console.log(myDate.toLocaleDateString()); // cuurent date MM/DD/YY
console.log(typeof myDate); // object



let myBirthday = new Date(2003,9,24) // remember format is YYYY,MM,DD
// for MM its in index value give one lower value 0-> jan 11->dec
console.log(myBirthday.toDateString());


// custom printing
let momBirthday = new Date("06-04-1982")
console.log(momBirthday.toDateString());


let myTimeStamp = Date.now()

console.log(myTimeStamp);



// 
let newDate = new Date()
console.log(newDate);
console.log(newDate.getFullYear());
console.log(newDate.getMonth());
console.log(newDate.getDay());
console.log(newDate.getTime());



// most important method is date
// just customizable date formatting
newDate.toLocaleString('default',{
    weekday: "long"
})

