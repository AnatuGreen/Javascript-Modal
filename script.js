'use strict';

const modalButton = document.querySelectorAll('.show-modal'); //querySelectorAll used to select the three buttons with same class. If querySelector was just used, it will be that we are selecting only the first button.
const modalMessage = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const closeModal = document.querySelector('.close-modal');

//Note that when we retrieve a class that refers to multiple elements on our html using JS, we can perform functions that we perform on arrays on them since they are sort of arrays

console.log(modalButton);

//Thisis to be called when closing of modal click is done. DRY purposes
function closeModalActions() {
  modalMessage.classList.add('hidden');
  overlay.classList.add('hidden'); //add the class hidden
}

function openModalActions() {
  modalMessage.className = 'modal';
  overlay.className = 'overlay';
}

//Now let us loop over the list f 3 elements that share the show-modal class and add click event handlers to the buttons

for (let i = 0; i < modalButton.length; i++) {
  modalButton[i].addEventListener('click', function () {
    //Open the modals by removing 'hidden' from the class name. First method
    modalMessage.className = 'modal';
    overlay.className = 'overlay';
  });

  //The above can also be achieved by declaring(not calling) the openModalActionsfunction since we have a function to open the modals
  //  modalButton[i].addEventListener('click', openModalActions);

  //Close the modal by adding 'hidden' to the class name
  closeModal.addEventListener('click', function () {
    closeModalActions();
  });
  //OR we can do this. The closeModalActions will not be called as a function with ()
  overlay.addEventListener('click', closeModalActions);
}

//NOTE: We can also add or remove classes from our html elemt by using 'classlist' method instead of the className.
//Eg: modal.classList.remove('hidden', 'etc..')

//This project shows that we can use javascript to change the appearances and visibility of web page elements simply by adding or removing pre-defined classes to them using javascript. This is powerful!

//There is a third way to close our modal. That is by responding to keypress events using JS. eg, close an open modal when the esc or backspace key is pressed.

//The keypress events are global events so the whole documents has to listen and anytime the key is pressed while the document is open, it works

//We have three keypress event handlers: keydown (for when a key is pressed down), keypress (for when a key is continually pressed down), keyup (for when a key is released)

//We can put in a parameter in the function that is called by our keypress. That event when logged to console shows us an object that contains the key pressed. This is a keyboard event

// document.addEventListener('keydown', function (event) {
//   console.log(event);
// });

//Since event has now become an object, we can say event.key to get just the key we are pressing instead of the whole keyboard event object. Then we can use the if statement to call the function to close the modal when a particular key is pressed

document.addEventListener('keydown', function (event) {
  // console.log(event.key);
  if (event.key === 'Escape' && !modalMessage.classList.contains('hidden')) {
    closeModalActions();
    //We could have gone on and just closed modal or we can check if the modal is currently open before we close using the Esc key
    // The above reads, if the key pressed is escape and modal does not contain hidden class name in it's class list, then close modal. Means if the modal is open.
  }
});
