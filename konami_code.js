const code = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65]
let index = 0;
     
const body = document.body.addEventListener('keydown', function(e) {
  onKeyDownHandler(e)
}) 

function init() {
  body
}
 
function onKeyDownHandler(e) {
  const key = parseInt(e.detail);
  if (key === code[index]) {
    index++;

    if (index === code.length) {
      alert('success')
      index = 0;
    }
  } else {
    index = 0;
  }
}