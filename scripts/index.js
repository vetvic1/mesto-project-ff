const placesList = document.querySelector(".places__list");

// Функция создания карточки
function createCard(data, deleteCard) {
  // Клонируем шаблон
  const cardTemplate = document.querySelector("#card-template").content;
  const newCard = cardTemplate.querySelector(".card").cloneNode(true);

  const cardImage = newCard.querySelector(".card__image");
  // Устанавливаем значения
  cardImage.src = data.link;
  cardImage.alt = data.name;
  newCard.querySelector(".card__title").textContent = data.name;

  // Добавляем обработчик клика для кнопки удаления
  const deleteButton = newCard.querySelector(".card__delete-button");
  deleteButton.addEventListener("click", () => deleteCard(newCard));

  return newCard;
}
// Функция удаления карточки
function deleteCard(card) {
  card.remove();
}

// Выводим карточку на страницу
initialCards.forEach((cardData) => {
  const cardElement = createCard(cardData, deleteCard);
  placesList.appendChild(cardElement);
});
