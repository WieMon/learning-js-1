const btn = document.querySelector('button')
let number = 1;
let activeNumber = 1;

const addElement = function() {
  
  //console.log('click');
  const div = document.createElement('div');
  console.log(div);
  div.textContent = number;
  // if (number%5 == 0) {  
  //   div.classList.add('circle')
  // }
  if(activeNumber == 5){
    activeNumber = 0;
    div.classList.add('circle')
  }
  document.body.appendChild(div);
  number++
  activeNumber++
}

btn.addEventListener('click', addElement)