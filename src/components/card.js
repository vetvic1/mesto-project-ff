import {deleteCardServer, deleteLike, addLike} from "./api.js";

const cardTemplate = document.querySelector('#card-template').content;


// Функция создания карточки
function createCard(card, ownerId, deleteFunction, likeFunction, popupFunction) {
  // Клонируем шаблон
  const newCard = cardTemplate.querySelector('.places__item').cloneNode(true);
  const cardImage = newCard.querySelector('.card__image');
  const cardId = card._id;
  
  // Устанавливаем значения
  cardImage.src = card.link;
  cardImage.alt = card.name;
  newCard.querySelector('.card__title').textContent = card.name;

  // Добавляем обработчик клика для кнопки просмотра изображения
  cardImage.addEventListener('click', () => popupFunction(card));
  console.log(popupFunction)
  
  // Добавляем обработчик клика для кнопки удаления
  const buttonDelete = newCard.querySelector('.card__delete-button');
    if (card.owner._id !== ownerId) {
        buttonDelete.remove();
    } else {
        buttonDelete.addEventListener('click', () => deleteFunction(newCard, cardId));
    }
  
  // Добавляем обработчик клика для кнопки лайка
  const likeButton = newCard.querySelector('.card__like-button');
  likeButton.addEventListener('click', (event) => likeFunction(event, cardId));
  // Отображаем количество лайков с сервера
  const likesCounter = newCard.querySelector('.card__like-counter');
  likesCounter.textContent = card.likes.length === 0 ? '' : card.likes.length;
    if (card.likes.some(like => like._id === ownerId)) {
        likeButton.classList.add('card__like-button_is-active');
    }
  
  return newCard;
}

// Функция удаления карточки 
function deleteCard (event, cardId) { 
  const iconDelete = event.target.closest('.card');
  deleteCardServer(cardId);
  iconDelete.remove(); 
}; 

// Функция лайка карточки
function likeCard (event, cardId) {
  const likeButton = event.target.closest('.card');
  const likes = likeButton.querySelector('.card__like-counter');

    if (likeButton.classList.contains('card__like-button_is-active')) {
        deleteLike(cardId)
            .then(data => {
                likeButton.classList.toggle('card__like-button_is-active');
                likes.textContent = data.likes.length === 0 ? '' : data.likes.length;
            })
            .catch(error => console.log(error));
    } else {
        addLike(cardId)
            .then(data => {
                likeButton.classList.toggle('card__like-button_is-active');
                likes.textContent = data.likes.length === 0 ? '' : data.likes.length;
            })
            .catch(error => console.log(error));
    }
};


export {createCard, deleteCard, likeCard};
