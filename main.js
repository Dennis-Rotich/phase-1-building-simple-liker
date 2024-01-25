// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// Your JavaScript code goes here!
//Capture HTML elements and remove error modal
const error = document.getElementById('modal');
const likeBtn = document.getElementsByClassName('like-glyph');
error.className = 'hidden';

//Changing like button to fully red
function updateLikes(btn){
  btn.textContent = FULL_HEART;
  btn.className = 'activated-heart';
  btn.onclick = ()=>{unlike(btn)};
}

//Changing the like button back to original
function unlike(btn){
  btn.textContent = EMPTY_HEART;
  btn.className = '';
}

//Displaying error on screen
function showError(err){
  error.className = '';
  error.innerHTML = `<h2>${err}</h2>
          <p id="modal-message"></p>`
  setTimeout(()=>{
    error.className = 'hidden';
  },3000)
}

//Add event listener to the like button
for(let btn of likeBtn){
  if(typeof btn === 'object'){
    btn.onclick = ()=>{
      mimicServerCall()
      .then(updateLikes(btn))
      .catch((err)=>{
        showError(err);
      })
    }
  }
}

//------------------------------------------------------------------------------
// Don't change the code below: this function mocks the server response
//------------------------------------------------------------------------------

function mimicServerCall(url="http://mimicServer.example.com", config={}) {
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      let isRandomFailure = Math.random() < .2
      if (isRandomFailure) {
        reject("Random server error. Try again.");
      } else {
        resolve("Pretend remote server notified of action!");
      }
    }, 300);
  });
}
