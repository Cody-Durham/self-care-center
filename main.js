
//targets here 👇🏽
var meditateIcon = document.querySelector('.meditate-icon');


//buttons here 👇🏽
var getNewMessage = document.querySelector('.receive-message-button');


//event listeners here 👇🏽
getNewMessage.addEventListener('click', getMessage);



//functions here 👇🏽
function getMessage() {
  // console.log(event.target);
  event.preventDefault();
  meditateIcon.classList.add('hidden');

  //need to show message after 'hidden class' is created here.
}
