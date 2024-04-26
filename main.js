(()=>{"use strict";var e=document.querySelector("#card-template").content;function t(t,n,r,o){var c=e.querySelector(".card").cloneNode(!0),a=c.querySelector(".card__image");return a.src=t.link,a.alt=t.name,c.querySelector(".card__title").textContent=t.name,c.querySelector(".card__delete-button").addEventListener("click",n),c.querySelector(".card__like-button").addEventListener("click",r),a.addEventListener("click",o),c}var n=function(e){e.target.closest(".card").remove()},r=function(e){e.target.classList.toggle("card__like-button_is-active")};function o(e){e.classList.add("popup_is-opened"),document.addEventListener("keydown",a)}function c(e){e.classList.remove("popup_is-opened"),document.removeEventListener("keydown",a)}function a(e){"Escape"===e.key&&c(document.querySelector(".popup_is-opened"))}!function(e){Array.from(document.querySelectorAll(e.formSelector)).forEach((function(e){e.addEventListener("submit",(function(e){e.preventDefault()})),function(e,t){var n=Array.from(e.querySelectorAll(t.inputSelector)),r=e.querySelector(t.submitButtonSelector);n.forEach((function(o){o.addEventListener("input",(function(){!function(e,t,n){t.validity.valid?function(e,t,n){var r=e.querySelector(".".concat(t.id,"-error"));t.classList.remove(n.inputErrorClass),r.classList.remove(n.errorClass),r.textContent=""}(e,t,n):function(e,t,n,r){var o=e.querySelector(".".concat(t.id,"-error"));t.classList.add(r.inputErrorClass),o.textContent=n,o.classList.add(r.errorClass)}(e,t,t.validationMessage,n)}(e,o,t),toggleButtonState(n,r,t)}))}))}(e)}))}(validationConfig);var s=document.querySelector(".places__list");[{name:"Архыз",link:"https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg"},{name:"Челябинская область",link:"https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg"},{name:"Иваново",link:"https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg"},{name:"Камчатка",link:"https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg"},{name:"Холмогорский район",link:"https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg"},{name:"Байкал",link:"https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg"}].forEach((function(e){var o=t(e,n,r,E);s.append(o)})),document.querySelectorAll(".popup").forEach((function(e){e.addEventListener("mousedown",(function(t){t.target.classList.contains("popup_is-opened")&&c(e),t.target.classList.contains("popup__close")&&c(e)}))}));var i=document.forms["edit-profile"],l=i.elements.name,d=i.elements.description,u=document.querySelector(".profile__title"),p=document.querySelector(".profile__description"),m=document.querySelector(".profile__edit-button"),v=document.querySelector(".popup_type_edit");m.addEventListener("click",(function(){l.value=u.textContent,d.value=p.textContent,o(v)})),i.addEventListener("submit",(function(e){e.preventDefault(),u.textContent=l.value,p.textContent=d.value,c(v)}));var f=document.forms["new-place"],y=f.elements["place-name"],_=f.elements.link,S=document.querySelector(".profile__add-button"),k=document.querySelector(".popup_type_new-card");S.addEventListener("click",(function(){o(k)})),f.addEventListener("submit",(function(e){e.preventDefault();var o,a,i,l={name:y.value,link:_.value};o=s,a=t(l,n,r,E),(i=o.firstChild)?o.insertBefore(a,i):o.append(a),f.reset(),c(k)}));var q=document.querySelector(".popup__image"),g=document.querySelector(".popup__caption"),L=document.querySelector(".popup_type_image");function E(e){var t;t=e.target,q.src=t.src,q.alt=t.alt,g.textContent=t.closest(".card").querySelector(".card__title").textContent,o(L)}})();
//# sourceMappingURL=main.js.map