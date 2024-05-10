import {createCard, deleteCard, likeCard} from "./card.js";
import {closeModal, openModal} from "./modal.js";
import {enableValidation, clearValidation} from "./validation.js";
import validationConfig from "./config/validationConfig";
import {getInitialCards, getUserProfile, updateProfile, updateAvatar, uploadCard} from "./api.js";

// Выводим карточки на страницу
const placesList = document.querySelector(".places__list");

function renderCards(res, ownerId) {
    res.forEach(card => {
        placesList.append(createCard(card, ownerId, likeCard, openImagePopup, deleteCard));
    });
}

enableValidation(validationConfig);
// Закрытие попапа
const popups = document.querySelectorAll('.popup')

popups.forEach((popup) => {
    popup.addEventListener('mousedown', (evt) => {
        if (evt.target.classList.contains('popup_is-opened')) {
            closeModal(popup)
        }
        if (evt.target.classList.contains('popup__close')) {
            closeModal(popup)
        }
    })
});

//Изменение аватара
const profileImage = document.querySelector('.profile__image');
const popupUpdateAvatar = document.querySelector('.popup_type_update_avatar');
const formUpdateAvatar = document.forms['update-avatar'];
const inputUpdateAvatar = formUpdateAvatar.elements['link'];

profileImage.addEventListener('click', () => {
    profileImage.classList.add('clicked');
    inputUpdateAvatar.value = '';
    openModal(popupUpdateAvatar);
    clearValidation(formUpdateAvatar, validationConfig);
});

profileImage.addEventListener('mouseout', () => profileImage.classList.remove('clicked'));

formUpdateAvatar.addEventListener('submit', (evt) => submitUpdateAvatar(evt, inputUpdateAvatar.value));

function submitUpdateAvatar(evt, avatar) {
    evt.preventDefault();
    evt.submitter.textContent = 'Сохранение...';
    updateAvatar(avatar)
        .then((data) => {
            profileImage.style.backgroundImage = `url(${data.avatar})`;
            closeModal(popupUpdateAvatar);
        })
        .catch(error => console.log(error))
        .finally(() => {
            evt.submitter.textContent = 'Сохранить';
        });
}

// Редактирование профиля
const profileForm = document.forms['edit-profile'];
const nameInput = profileForm.elements['name'];
const jobInput = profileForm.elements['description'];
const profileTitle = document.querySelector('.profile__title');
const profileDescription = document.querySelector('.profile__description');
const profileCloseButton = document.querySelector('.profile__edit-button');
const popupEditProfile = document.querySelector('.popup_type_edit');

profileCloseButton.addEventListener('click', () => {
    fillEditProfilePopup();
    openModal(popupEditProfile);
    clearValidation(profileForm, validationConfig);
});

function fillEditProfilePopup() {
  nameInput.value = profileTitle.textContent;
  jobInput.value = profileDescription.textContent;
}

profileForm.addEventListener('submit', (evt) => handleProfileFormSubmit(evt, nameInput.value, jobInput.value));

function handleProfileFormSubmit(evt, name, description) {
    evt.preventDefault();
    evt.submitter.textContent = 'Сохранение...';
    updateProfile(name, description)
    .then((data) => {
        renderProfile(data);
        closeModal(popupEditProfile);
    })
    .catch(error => console.log(error))
    .finally(() => {
        evt.submitter.textContent = 'Сохранить';
    });    
}

function renderProfile(res) {
    profileTitle.textContent = res.name;
    profileDescription.textContent = res.about.replace(/[^а-яА-ЯёЁa-zA-Z \-]+/g, '');
    profileImage.style.backgroundImage = `url(${res.avatar})`;
}

// Загружаем данные с сервера
Promise.all([getUserProfile(), getInitialCards()])
    .then(data => {
        renderProfile(data[0]);
        renderCards(data[1], data[0]._id);
    })
    .catch(error => console.log(error));

// Добавление новой карточки
const formAddNewCard = document.forms['new-place'];
const inputNewCardName = formAddNewCard.elements['place-name'];
const inputNewCardUrl = formAddNewCard.elements['link'];
const buttonAddNewCard = document.querySelector('.profile__add-button');
const popupAddNewCard = document.querySelector('.popup_type_new-card');

buttonAddNewCard.addEventListener('click', () => {
  formAddNewCard.reset();
  clearValidation(formAddNewCard, validationConfig);
  openModal(popupAddNewCard);
});

formAddNewCard.addEventListener('submit', submitAddNewCard);

function submitAddNewCard(evt) {
    evt.preventDefault();
    evt.submitter.textContent = 'Сохранение...';
    const card = {
        name: inputNewCardName.value,
        link: inputNewCardUrl.value
    }
    uploadCard(card)
        .then(data => {
            placesList.prepend(createCard(data, data.owner._id, likeCard, openImagePopup, deleteCard));
            closeModal(popupAddNewCard);
        })
        .catch(error => console.log(error))
        .finally(() => {
            evt.submitter.textContent = 'Создать';
        });
} 

//Отображение полноэкранной картинки
const popupCardImage = document.querySelector('.popup__image');
const popupCardCaption = document.querySelector('.popup__caption');
const popupCardWindow = document.querySelector('.popup_type_image');

function openImagePopup(card) {
    fillCardImagePopup(card);
    openModal(popupCardWindow);
}

function fillCardImagePopup(card) {
    popupCardImage.src = card.link;
    popupCardImage.alt = card.name;
    popupCardCaption.textContent = card.name;
}