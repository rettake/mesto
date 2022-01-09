let popup = document.querySelector('.popup');
let popupAdd = document.querySelector('.popup-add')
let formElement = popup.querySelector('form[name="contact"]');
let nameInput = popup.querySelector('input[name="userName"]');
let jobInput = popup.querySelector('input[name="userJob"]');
let editButton = document.querySelector('.profile__edit');
let addButton = document.querySelector('.profile__addbutton');
let closeButton = popup.querySelector('.popup__close');
let closeButtonAdd = popupAdd.querySelector('.popup__close');
let profileName = document.querySelector('.profile__name');
let profileJob = document.querySelector('.profile__job');
let elementsItems = document.querySelector('.elements');

const initialCards = [
   {
      name: 'Архыз',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
   },
   {
      name: 'Челябинская область',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'
   },
   {
      name: 'Иваново',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
   },
   {
      name: 'Камчатка',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
   },
   {
      name: 'Холмогорский район',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
   },
   {
      name: 'Байкал',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
   }
];

const elementTemplate = document.querySelector('#element').content;


initialCards.forEach((initialCard) => {
   const itemElement = elementTemplate.cloneNode(true);

   itemElement.querySelector('.element__image').src = initialCard.link;
   itemElement.querySelector('.element__place').textContent = initialCard.name;

   elementsItems.append(itemElement);
})

function popupOpen() {
   popup.classList.add('popup_opened');
   nameInput.value = profileName.textContent;
   jobInput.value = profileJob.textContent;
}

function popupClose() {
   popup.classList.remove('popup_opened');
}

function popupAddClose() {
   popupAdd.classList.remove('popup_opened');
}

function popupAddOpen() {
   popupAdd.classList.add('popup_opened');
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
closeButtonAdd.addEventListener('click', popupAddClose);
addButton.addEventListener('click', popupAddOpen);
editButton.addEventListener('click', popupOpen);
formElement.addEventListener('submit', formSubmitHandler);
