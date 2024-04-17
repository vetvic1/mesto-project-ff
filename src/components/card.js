const cardTemplate = document.querySelector('#card-template').content;


// Функция создания карточки
function createCard(card, deleteFunction, likeFunction, popupFunction) {
  // Клонируем шаблон
  const newCard = cardTemplate.querySelector('.card').cloneNode(true);
  const cardImage = newCard.querySelector('.card__image');
  
  // Устанавливаем значения
  cardImage.src = card.link;
  cardImage.alt = card.name;
  newCard.querySelector('.card__title').textContent = card.name;
  
  // Добавляем обработчик клика для кнопки удаления
  newCard.querySelector('.card__delete-button').addEventListener('click', deleteFunction);
  
  // Добавляем обработчик клика для кнопки лайка
  newCard.querySelector('.card__like-button').addEventListener('click', likeFunction);
  
  // Добавляем обработчик клика для кнопки просмотра изображения
  cardImage.addEventListener('click', popupFunction);
  
  return newCard;
}

// Функция удаления карточки
const deleteCard = function (event) {
  event.target.closest('.card').remove();
};

// Функция лайка карточки
const likeCard = function (event) {
  event.target.classList.toggle('card__like-button_is-active');
};

export { createCard, deleteCard, likeCard };
