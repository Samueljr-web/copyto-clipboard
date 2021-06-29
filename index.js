
const input = document.querySelector('.input');
const click = document.querySelector("button");

click.addEventListener('click', button)
function button(){
  var Input = document.querySelector('.myInput');
  Input.select();
  document.execCommand("copy");
  input.classList.add('active')
  
  setTimeout(function() {
    input.classList.remove('active')
  }, 2500);
}