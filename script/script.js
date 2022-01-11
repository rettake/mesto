const popup = document.querySelectorAll('.popup');
const popupProfile = document.querySelector('.popup-profile');
const popupProfileClose = popupProfile.querySelector('.popup__close');
const popupAdd = document.querySelector('.popup-add');
const popupAddClose = popupAdd.querySelector('.popup__close');
const popupPreview = document.querySelector('.popup-preview');
const formElement = document.querySelector('form[name="contact"]');
const formElementAdd = document.querySelector('form[name="addimage"]');
const nameInput = document.querySelector('input[name="userName"]');
const jobInput = document.querySelector('input[name="userJob"]');
const imageInput = document.querySelector('input[name="imageUrl"]');
const placeInput = document.querySelector('input[name="imageName"]');
const editButton = document.querySelector('.profile__edit');
const addButton = document.querySelector('.profile__addbutton');
const deleteButtonAdd = document.querySelector('.element__remove-button');
const profileName = document.querySelector('.profile__name');
const profileJob = document.querySelector('.profile__job');
const elementsItems = document.querySelector('.elements');

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
   const currentElement = itemElement.querySelector('.element');

   itemElement.querySelector('.element__image').src = initialCard.link;
   itemElement.querySelector('.element__place').textContent = initialCard.name;

   itemElement.querySelector('.element__like').addEventListener('click', function (evt) {
      evt.target.classList.toggle('element__like_like-active')
   });

   itemElement.querySelector('.element__remove-button').addEventListener('click', function () {
      currentElement.remove();
   });

   itemElement.querySelector('.element__image').addEventListener('click', function () {
      popupPreview.querySelector('.popup-preview__image').src = initialCard.link;
      popupPreview.querySelector('.popup-preview__title').textContent = initialCard.name;

      popupPreview.classList.add('popup_opened');

      popupPreview.querySelector('.popup__close').addEventListener('click', function() {
         popupPreview.classList.remove('popup_opened');
      });
   });

   elementsItems.append(itemElement);
})

function popupOpen() {
   popupProfile.classList.add('popup_opened');
   nameInput.value = profileName.textContent;
   jobInput.value = profileJob.textContent;
}

function popupClose() {
   popupPreview.classList.remove('popup_opened');
   popupProfile.classList.remove('popup_opened');
   popupAdd.classList.remove('popup_opened');
}

function popupAddOpen() {
   popupAdd.classList.add('popup_opened');
}

function formSubmitAddImage(evt) {
   evt.preventDefault();
   initialCards.push(
      {
         name: placeInput.value,
         link: imageInput.value
      }
   );
   placeInput.value = "";
   imageInput.value = "";

   popupClose();

   const itemElement = elementTemplate.cloneNode(true);
   const currentElement = itemElement.querySelector('.element');

   itemElement.querySelector('.element__image').src = initialCards[initialCards.length - 1].link;
   itemElement.querySelector('.element__place').textContent = initialCards[initialCards.length - 1].name;

   itemElement.querySelector('.element__like').addEventListener('click', function (evt) {
      evt.target.classList.toggle('element__like_like-active')
   });

   itemElement.querySelector('.element__remove-button').addEventListener('click', function () {
      currentElement.remove();
   });

   itemElement.querySelector('.element__image').addEventListener('click', function () {
      popupPreview.querySelector('.popup-preview__image').src = initialCards[initialCards.length - 1].link;
      popupPreview.querySelector('.popup-preview__title').textContent = initialCards[initialCards.length - 1].name;

      popupPreview.classList.add('popup_opened');

      popupPreview.querySelector('.popup__close').addEventListener('click', function() {
         popupPreview.classList.remove('popup_opened');
      });
   });

   elementsItems.append(itemElement);
}

function formSubmitHandler(evt) {
   evt.preventDefault();

   profileName.textContent = nameInput.value;
   profileJob.textContent = jobInput.value;

   popupClose();
}


// Прикрепляем обработчик к форме:
// он будет следить за событием “submit” - «отправка»
popupProfileClose.addEventListener('click', popupClose);
popupAddClose.addEventListener('click', popupClose);
addButton.addEventListener('click', popupAddOpen);
editButton.addEventListener('click', popupOpen);
formElement.addEventListener('submit', formSubmitHandler);
formElementAdd.addEventListener('submit', formSubmitAddImage);

