const showInputError = (formElement, inputElement, errorMessage) => {
   const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
   inputElement.classList.add('popup__text-area_error');
   errorElement.textContent = errorMessage;
   errorElement.classList.add('form__input-error_active');
};

const hideInputError = (formElement, inputElement) => {
   const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
   inputElement.classList.remove('popup__text-area_error');
   errorElement.classList.remove('form__input-error_active');
   errorElement.textContent = '';
};

const checkInputValidity = (formElement, inputElement) => {
   if (!inputElement.validity.valid) {
      showInputError(formElement, inputElement, inputElement.validationMessage);
   } else {
      hideInputError(formElement, inputElement);
   }
};

const setEventListeners = (formElement) => {
   const inputList = Array.from(formElement.querySelectorAll('.popup__text-area'));
   const buttonElement = formElement.querySelector('.popup__submit');

   toggleButtonState(inputList, buttonElement);
   inputList.forEach((inputElement) => {
      inputElement.addEventListener('input', function () {
         checkInputValidity(formElement, inputElement);

         toggleButtonState(inputList, buttonElement);
      });
   });
}; 

const enableValidation = () => {
   const formList = Array.from(document.querySelectorAll('.popup__form'));
   formList.forEach((formElement) => {
      const fieldsetList = Array.from(formElement.querySelectorAll('.popup__contact-info'));

      fieldsetList.forEach((fieldSet) => {
         setEventListeners(fieldSet);
      }); 

      formElement.addEventListener('submit', function (evt) {
         evt.preventDefault();
         setEventListeners(formElement);
      });
   });
};

const hasInvalidInput = (inputList) => {
   return inputList.some((inputElement) => {
      return !inputElement.validity.valid;
}); 
};

const toggleButtonState = (inputList, buttonElement) => {
   if (hasInvalidInput(inputList)) {
      buttonElement.classList.add('popup__submit_disabled');
   } else {
      buttonElement.classList.remove('popup__submit_disabled');
   }
};

enableValidation();