(()=>{"use strict";var e=document.querySelector("#card-template").content;function t(t,n,r,o){var c=e.querySelector(".card").cloneNode(!0),a=c.querySelector(".card__image");return a.src=t.link,a.alt=t.name,c.querySelector(".card__title").textContent=t.name,c.querySelector(".card__delete-button").addEventListener("click",n),c.querySelector(".card__like-button").addEventListener("click",r),a.addEventListener("click",o),c}var n=function(e){e.target.closest(".card").remove()},r=function(e){e.target.classList.toggle("card__like-button_is-active")};function o(e){e.classList.add("popup_is-opened"),document.addEventListener("keydown",a)}function c(e){e.classList.remove("popup_is-opened"),document.removeEventListener("keydown",a)}function a(e){"Escape"===e.key&&c(document.querySelector(".popup_is-opened"))}var s=function(e,t,n){var r=e.querySelector(".".concat(t.id,"-error"));t.classList.remove(n.inputErrorClass),r.classList.remove(n.errorClass),t.setCustomValidity(""),r.textContent=""};function i(e,t,n){!function(e){return e.some((function(e){return!e.validity.valid}))}(e)?t.classList.remove(n.inactiveButtonClass):t.classList.add(n.inactiveButtonClass)}const u={formSelector:".popup__form",inputSelector:".popup__input",submitButtonSelector:".popup__button",inactiveButtonClass:"popup__button_disabled",inputErrorClass:"popup__input_type_error",errorClass:"popup__error_visible"};var l;l=u,Array.from(document.querySelectorAll(l.formSelector)).forEach((function(e){!function(e,t){var n=Array.from(e.querySelectorAll(t.inputSelector)),r=e.querySelector(t.submitButtonSelector);n.forEach((function(o){o.addEventListener("input",(function(){!function(e,t,n){t.validity.patternMismatch?t.setCustomValidity(t.dataset.errorMessage):t.setCustomValidity(""),t.validity.valid?s(e,t,n):function(e,t,n,r){var o=e.querySelector(".".concat(t.id,"-error"));t.classList.add(r.inputErrorClass),o.textContent=n,o.classList.add(r.errorClass)}(e,t,t.validationMessage,n)}(e,o,t),i(n,r,t)}))}))}(e,l)}));var d=document.querySelector(".places__list");[{name:"Архыз",link:"https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg"},{name:"Челябинская область",link:"https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg"},{name:"Иваново",link:"https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg"},{name:"Камчатка",link:"https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg"},{name:"Холмогорский район",link:"https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg"},{name:"Байкал",link:"https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg"}].forEach((function(e){var o=t(e,n,r,x);d.append(o)})),document.querySelectorAll(".popup").forEach((function(e){e.addEventListener("mousedown",(function(t){t.target.classList.contains("popup_is-opened")&&c(e),t.target.classList.contains("popup__close")&&c(e)}))}));var p=document.forms["edit-profile"],m=p.elements.name,v=p.elements.description,f=document.querySelector(".profile__title"),_=document.querySelector(".profile__description"),y=document.querySelector(".profile__edit-button"),S=document.querySelector(".popup_type_edit");y.addEventListener("click",(function(){m.value=f.textContent,v.value=_.textContent,o(S),function(e,t){var n=Array.from(e.querySelectorAll(t.inputSelector)),r=e.querySelector(t.submitButtonSelector);n.forEach((function(n){return s(e,n,t)})),i(n,r,t)}(p,u)})),p.addEventListener("submit",(function(e){return function(e,t,n){e.preventDefault(),e.submitter.textContent="Сохранение...",updateProfile(t,n).then((function(e){var t;t=e,f.textContent=t.name,_.textContent=t.about.replace(/[^а-яА-ЯёЁa-zA-Z \-]+/g,""),c(S)})).catch((function(e){return console.log(e)})).finally((function(){e.submitter.textContent="Сохранить"}))}(e,m.value,v.value)}));var k=document.forms["new-place"],q=k.elements["place-name"],C=k.elements.link,L=document.querySelector(".profile__add-button"),g=document.querySelector(".popup_type_new-card");L.addEventListener("click",(function(){o(g)})),k.addEventListener("submit",(function(e){e.preventDefault();var o,a,s,i={name:q.value,link:C.value};o=d,a=t(i,n,r,x),(s=o.firstChild)?o.insertBefore(a,s):o.append(a),k.reset(),c(g)}));var b=document.querySelector(".popup__image"),E=document.querySelector(".popup__caption"),h=document.querySelector(".popup_type_image");function x(e){var t;t=e.target,b.src=t.src,b.alt=t.alt,E.textContent=t.closest(".card").querySelector(".card__title").textContent,o(h)}})();
//# sourceMappingURL=main.js.map