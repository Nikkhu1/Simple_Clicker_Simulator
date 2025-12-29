let button = document.getElementById('Button1');
let counter = document.getElementById('counter');

let count = 0;

function increment(){
  count += 1;

  counter.innerHTML = count;
}

button.addEventListener('click' , increment);