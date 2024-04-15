import {initialCards} from "./cards.js";
import {createCard, deleteCard, likeCard} from "./card.js";
import {closeModal, openModal, overlayClose, crossButtonClose} from "./modal.js";

const placesList = document.querySelector(".places__list");

// Выводим карточки на страницу
initialCards.forEach((cardData) => {
  const cardElement = createCard(cardData, deleteCard, likeCard, popupCard);
  placesList.append(cardElement);
});

// Закрытие попапа
document.addEventListener('click', crossButtonClose);
document.addEventListener('click', overlayClose);

// Редактирование профиля
const formElement = document.forms['edit-profile'];
const nameInput = formElement.elements['name'];
const jobInput = formElement.elements['description'];
const profileTitle = document.querySelector('.profile__title');
const profileDescription = document.querySelector('.profile__description');
const buttonEditProfile = document.querySelector('.profile__edit-button');
const popupEditProfile = document.querySelector('.popup_type_edit');

buttonEditProfile.addEventListener('click', () => {
    fillEditProfilePopup();
    openModal(popupEditProfile);
});

formElement.addEventListener('submit', handleFormSubmit);

function fillEditProfilePopup() {
  nameInput.value = profileTitle.textContent;
  jobInput.value = profileDescription.textContent;
}

function handleFormSubmit(evt) {
    evt.preventDefault();

    profileTitle.textContent = nameInput.value;
    profileDescription.textContent = jobInput.value;
    closeModal(formElement.closest('.popup'));
}

// Добавление новой карточки
const formAddNewCard = document.forms['new-place'];
const inputNewCardName = formAddNewCard.elements['place-name'];
const inputNewCardUrl = formAddNewCard.elements['link'];
const buttonAddNewCard = document.querySelector('.profile__add-button');
const popupAddNewCard = document.querySelector('.popup_type_new-card');

buttonAddNewCard.addEventListener('click', () => {
  openModal(popupAddNewCard);
});

formAddNewCard.addEventListener('submit', submitAddNewCard);

function submitAddNewCard(evt) {
    evt.preventDefault();

    const card = {
        name: inputNewCardName.value,
        link: inputNewCardUrl.value
    }
    addFirstChild(placesList, createCard(card, deleteCard, likeCard, popupCard));
    formAddNewCard.reset();
    closeModal(formAddNewCard.closest('.popup'));
}

function addFirstChild(parent, newElement) {
    const firstChild = parent.firstChild;
    if (firstChild) {
        parent.insertBefore(newElement, firstChild);
    } else {
        parent.append(newElement);
    }
}

//Отображение полноэкранной картинки
const popupCardImage = document.querySelector('.popup__image');
const popupCardCaption = document.querySelector('.popup__caption');
const popupCardWindow = document.querySelector('.popup_type_image');

function popupCard(event) {
    const target = event.target;

    fillCardImagePopup(target);
    openModal(popupCardWindow);
}

function fillCardImagePopup(target) {
    popupCardImage['src'] = target['src'];
    popupCardImage['alt'] = target['alt'];
    popupCardCaption.textContent = target.closest('.card').querySelector('.card__title').textContent;
}