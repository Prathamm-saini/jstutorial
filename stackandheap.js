console.log("Memory in JS")

/*
Memory allocation and de allocation

there are two type of memory
stack and heap


stack memory(primitive)
if something's stored in stack memeory
you get copy of that value when you take it via some 
func call or something

heap memory(non primitive)
you get reference to the original object 
so changes done are visible to original object 

*/

let myYoutubeName = "Pratham Saini"
// it's primitive so goes onto stack
// LIFO principle followed here
let anotherName = myYoutubeName
anotherName = "prat"

console.log(myYoutubeName)
console.log(anotherName)

// here we get copy of myyoutubename value to anothername
// so any changes made to anothername doesnt affect myYoutubeName
// shallow copying


let userOne= {
    email:"username@gmail.com",
    upi:"gpay"
}
let userTwo = userOne

userTwo.email ="prathamzxc@gmail.com"

console.log(userOne)
// here value of original object i.e userOne's email will be changed 
// as non primitive are stored in heap where usertwo stroes reference of userONe

