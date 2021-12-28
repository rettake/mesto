let popup = document.querySelector('.popup');
let formElement = popup.querySelector('.popup__input');
let nameInput = popup.querySelector('input[name="userName"]');
let jobInput = popup.querySelector('input[name="userJob"]');
let editButton = document.querySelector('.profile__edit');
let closeButton = popup.querySelector('.popup__close');
let profileName = document.querySelector('.profile__name');
let profileJob = document.querySelector('.profile__job');

console.log(nameInput);

function popupOpen() {
   popup.classList.add('popup_opened');
}

function popupClose() {
   popup.classList.remove('popup_opened');
}

function formSubmitHandler(evt) {
   evt.preventDefault();
   
   profileName.textContent = nameInput.value; 
   profileJob.textContent = jobInput.value; 

   popupClose();
}

// Прикрепляем обработчик к форме:
// он будет следить за событием “submit” - «отправка»
closeButton.addEventListener('click', popupClose);
editButton.addEventListener('click', popupOpen);
formElement.addEventListener('submit', formSubmitHandler);
