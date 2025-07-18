
const clock = document.querySelector('#clock');

setInterval(function(){
    let date = new Date();
    clock.innerHTML = date.toLocaleTimeString() +'  '+date.toLocaleDateString()
},1000)

