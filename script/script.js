let popup = document.querySelector('.popup');
let formElement = popup.querySelector('.popup__input');
let nameInput = popup.querySelector('.popup__name');
let jobInput = popup.querySelector('.popup__job');
let editButton = document.querySelector('.profile__edit');
let closeButton = popup.querySelector('.popup__close');
let inputs = popup.querySelectorAll('input');
let profileName = document.querySelector('.profile__name');
let profileJob = document.querySelector('.profile__job');

function formOpen() {
   popup.classList.add('popup_opened');
}

function formClose() {
   popup.classList.remove('popup_opened');
}

function formSubmitHandler(evt) {
   evt.preventDefault();

   let name = inputs[1].value;
   let job = inputs[2].value;
   console.log(name);
   console.log(job);

   profileName.textContent = name;
   profileJob.textContent = job;
   
   formClose();
}

// Прикрепляем обработчик к форме:
// он будет следить за событием “submit” - «отправка»
closeButton.addEventListener('click', formClose);
editButton.addEventListener('click', formOpen);
formElement.addEventListener('submit', formSubmitHandler);
