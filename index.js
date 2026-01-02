let button1 = document.getElementById('Button1');
let button2 = document.getElementById('Button2');
let counter = document.getElementsByClassName('Counter');

let count = 0;
 
function increment(){
  count++;
  for(let i = 0; i < counter.length ; i++){
    counter[i].innerHTML = count;
  }
}

function Restart(){
  count = 0;
  for(let i = 0; i < counter.length ; i++)
    counter[i].innerHTML = count;
}

button1.addEventListener('click' , increment);
button2.addEventListener('click' , Restart);
