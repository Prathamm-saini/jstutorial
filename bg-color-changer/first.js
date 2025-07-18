/// 1. selct all button
// 2. on click event 
// 3. bg color change 


const buttons = document.querySelectorAll('.button')
//console.log(buttons)
const body = document.querySelector('body')

// events-> onClick

buttons.forEach(function(button){
    console.log(button)
    button.addEventListener('click',function(e){
        console.log(e);
        console.log(e.target);
        if(e.target.id == 'grey'){
            body.style.backgroundColor=e.target.id;
        }
        if(e.target.id == 'white'){
            body.style.backgroundColor=e.target.id;
        }   
        if(e.target.id == 'blue'){
            body.style.backgroundColor=e.target.id;
        }   
        if(e.target.id == 'yellow'){
            body.style.backgroundColor=e.target.id;
        }           
    })

})