const popup = document.querySelectorAll('.popup');
const profile = document.querySelector('.profile');
const popupProfile = document.querySelector('.popup-profile');
const popupProfileClose = popupProfile.querySelector('.popup__close');
const popupAdd = document.querySelector('.popup-add');
const popupAddClose = popupAdd.querySelector('.popup__close');
const popupPreview = document.querySelector('.popup-preview');
const profilePopupForm = popupProfile.querySelector('form[name="contact"]');
const formElementAdd = popupAdd.querySelector('form[name="addimage"]');
const nameInput = popupProfile.querySelector('input[name="userName"]');
const jobInput = popupProfile.querySelector('input[name="userJob"]');
const imageInput = popupAdd.querySelector('input[name="imageUrl"]');
const placeInput = popupAdd.querySelector('input[name="imageName"]');
const editButton = profile.querySelector('.profile__edit');
const addButton = profile.querySelector('.profile__addbutton');
const deleteButtonAdd = document.querySelector('.element__remove-button');
const profileName = profile.querySelector('.profile__name');
const profileJob = profile.querySelector('.profile__job');
const elementsItems = document.querySelector('.elements');

/* Карточки и их рендер */

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


function createCard(name, link) {
   const itemElement = elementTemplate.cloneNode(true);
   const currentElement = itemElement.querySelector('.element');

   itemElement.querySelector('.element__image').src = link;
   itemElement.querySelector('.element__place').textContent = name;

   itemElement.querySelector('.element__like').addEventListener('click', function (evt) {
      evt.target.classList.toggle('element__like_like-active')
   });

   itemElement.querySelector('.element__remove-button').addEventListener('click', function () {
      currentElement.remove();
   });

   itemElement.querySelector('.element__image').addEventListener('click', function () {
      popupPreview.querySelector('.popup-preview__image').src = link;
      popupPreview.querySelector('.popup-preview__title').textContent = name;

      openPopup(popupPreview);

      popupPreview.querySelector('.popup__close').addEventListener('click', function() {
         popupClose(popupPreview);
      });
   });

   return itemElement;
};

initialCards.forEach((initialCard) => {
   elementsItems.append(createCard(initialCard.name, initialCard.link));
});

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

   const lastElement = initialCards[initialCards.length - 1]
   elementsItems.append(createCard(lastElement.name, lastElement.link));
}

/* Функции открытия/закрытия модальных окон */

popup.forEach((popup) => {
   popup.addEventListener('click', (evt) => {
      if (evt.target.classList.contains('popup_opened')) {
         popupClose();
      }
   });
   popup.addEventListener('keydown', (evt) => {
      if (evt.key === 'Escape') {
         popupClose();
      }
   });
});

function openPopup(popup) {
   popup.classList.add('popup_opened');
}

function openProfilePopup() {
   openPopup(popupProfile);
   nameInput.value = profileName.textContent;
   jobInput.value = profileJob.textContent;
}

function openAddPopup() {
   openPopup(popupAdd);
} 

function popupClose() {
   popupPreview.classList.remove('popup_opened');
   popupProfile.classList.remove('popup_opened');
   popupAdd.classList.remove('popup_opened');
}

/* Функция, которая меняет имя пользователя и род деятельности */

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
addButton.addEventListener('click', openAddPopup);
editButton.addEventListener('click', openProfilePopup);
profilePopupForm.addEventListener('submit', formSubmitHandler);
formElementAdd.addEventListener('submit', formSubmitAddImage);

