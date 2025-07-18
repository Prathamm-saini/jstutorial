console.log("loops.js loaded");


for(let i=0;i<=2;i++){
    console.log(i); 
}

let arr =[1,2,3,4,5]

for(let i=0;i<=arr.length-1;i++){
    if(arr[i]%2==0){
        console.log(`even number : ${arr[i]}`);
        
    } 
}

for(let i=0;i<arr.length;i++){
    console.log("outer loop :",i);
    for(let j=0;j<arr.length;j++){
        console.log("inner loop :",j);    
    }
    
}

// breaka nd continue
for(let i=0;i<arr.length;i++){
    if(arr[i]%2==0){
        console.log(`even number : ${arr[i]}`);
        continue; // skips the rest of the loop iteration for even numbers
    }
    console.log(`odd number : ${arr[i]}`); // will only log odd numbers
}
// break will exit the loop entirely
// continue will skip to the next iteration and 
// anything written after continue will not execute for that iteration
// here as continue is used for even , it skips printing odd number



// while and do while loops

let i = 0;
while(i<arr.length){
    console.log(`while loop index: ${i}`)
    i++;
}

// do while loop will execute at least once
let j = 0;
do {
    console.log(`do while loop index: ${j}`);
    j++;
}while(j < arr.length);

// high order array loops
// aray and object specific loops


// for of loop (array specific)

const a = [1,2,3,4,5]
// object is not js object 
for (const val of a){
    console.log(val);
}

// for each loop doesn't return anything

const coding = ["Go","Java","JavaScirpt","Sql"]
coding.forEach((item)=>{
    console.log(item);
    return item
}
)

// filter function
const nums = arr.filter((num)=>num>4)
console.log(nums);
