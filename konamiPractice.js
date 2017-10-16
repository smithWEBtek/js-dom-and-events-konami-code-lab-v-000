// Key codes for A, B, and C keys.
const alphabet = [65, 66, 67];

// Keep track of index outside of the event handler.
let index = 0;

const asdf = document.getElementById('asdf')
asdf.addEventListener('keydown', function(e){
  onKeyDownHandler(e)
})    

// This is the function that would be invoked by the event listener.
function onKeyDownHandler(e) {
   
 const key = parseInt(e.detail || e.which);
  console.log("e.detail: " + e.detail)
  console.log("e.which: " + e.which)
  console.log("key: " + key)

 if (key === alphabet[index]) {
   index++;

   if (index === alphabet.length) {
     alert("Hurray!");

     index = 0;
   }
 } else {
   index = 0;
 }
}