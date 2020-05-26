const btn = document.querySelector('button')
let number = 1;

const addElement = function() {
  
  //console.log('click');
  const div = document.createElement('div');
  //console.log(div);
  div.textContent = number;
  document.body.appendChild(div);
  number++
}

btn.addEventListener('click', addElement)