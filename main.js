(()=>{"use strict";var e={baseUrl:"https://nomoreparties.co/v1/wff-cohort-12",headers:{authorization:"3e7f1ddd-d9bd-4f89-89f9-39ccd7f0243e","Content-Type":"application/json"}},t=function(e){return e.ok?e.json():Promise.reject("Ошибка: ".concat(e.status))},n=document.querySelector("#card-template").content;function o(e,t,o,r,c){var a=n.querySelector(".places__item").cloneNode(!0),i=a.querySelector(".card__image"),u=e._id;i.src=e.link,i.alt=e.name,a.querySelector(".card__title").textContent=e.name,i.addEventListener("click",(function(){return c(e)})),console.log(c);var s=a.querySelector(".card__delete-button");e.owner._id!==t?s.remove():s.addEventListener("click",(function(){return o(a,u)}));var l=a.querySelector(".card__like-button");return l.addEventListener("click",(function(e){return r(e,u)})),a.querySelector(".card__like-counter").textContent=0===e.likes.length?"":e.likes.length,e.likes.some((function(e){return e._id===t}))&&l.classList.add("card__like-button_is-active"),a}function r(n,o){var r,c=n.target.closest(".places__item");r=o,fetch("".concat(e.baseUrl,"/cards/").concat(r),{method:"DELETE",headers:e.headers}).then(t),c.remove()}var c=function(n,o){var r,c=n.target.closest(".places__item"),a=c.querySelector(".card__like-counter");c.classList.contains("card__like-button_is-active")?(r=o,fetch("".concat(e.baseUrl,"/cards/likes/").concat(r),{method:"DELETE",headers:e.headers}).then(t)).then((function(e){c.classList.toggle("card__like-button_is-active"),a.textContent=0===e.likes.length?"":e.likes.length})).catch((function(e){return console.log(e)})):function(n){return fetch("".concat(e.baseUrl,"/cards/likes/").concat(n),{method:"PUT",headers:e.headers}).then(t)}(o).then((function(e){c.classList.toggle("card__like-button_is-active"),a.textContent=0===e.likes.length?"":e.likes.length})).catch((function(e){return console.log(e)}))};function a(e){e.classList.add("popup_is-opened"),document.addEventListener("keydown",u)}function i(e){e.classList.remove("popup_is-opened"),document.removeEventListener("keydown",u)}function u(e){"Escape"===e.key&&i(document.querySelector(".popup_is-opened"))}var s=function(e,t,n){var o=e.querySelector(".".concat(t.id,"-error"));t.classList.remove(n.inputErrorClass),t.setCustomValidity(""),o.classList.remove(n.errorClass),o.textContent=""};function l(e,t){var n=Array.from(e.querySelectorAll(t.inputSelector)),o=e.querySelector(t.submitButtonSelector);n.forEach((function(n){return s(e,n,t)})),d(n,o,t)}function d(e,t,n){!function(e){return e.some((function(e){return!e.validity.valid}))}(e)?t.classList.remove(n.inactiveButtonClass):t.classList.add(n.inactiveButtonClass)}const p={formSelector:".popup__form",inputSelector:".popup__input",submitButtonSelector:".popup__button",inactiveButtonClass:"popup__button_disabled",inputErrorClass:"popup__input_type_error",errorClass:"popup__error_visible"};var f,m=document.querySelector(".places__list");f=p,Array.from(document.querySelectorAll(f.formSelector)).forEach((function(e){!function(e,t){var n=Array.from(e.querySelectorAll(t.inputSelector)),o=e.querySelector(t.submitButtonSelector);n.forEach((function(r){r.addEventListener("input",(function(){!function(e,t,n){t.validity.patternMismatch?t.setCustomValidity(t.dataset.errorMessage):t.setCustomValidity(""),t.validity.valid?s(e,t,n):function(e,t,n,o){var r=e.querySelector(".".concat(t.id,"-error"));t.classList.add(o.inputErrorClass),r.textContent=n,r.classList.add(o.errorClass)}(e,t,t.validationMessage,n)}(e,r,t),d(n,o,t)}))}))}(e,f)})),document.querySelectorAll(".popup").forEach((function(e){e.addEventListener("mousedown",(function(t){t.target.classList.contains("popup_is-opened")&&i(e),t.target.classList.contains("popup__close")&&i(e)}))}));var _=document.querySelector(".profile__image"),v=document.querySelector(".popup_type_update_avatar"),h=document.forms["update-avatar"],y=h.elements.link;_.addEventListener("click",(function(){_.classList.add("clicked"),y.value="",a(v),l(h,p)})),_.addEventListener("mouseout",(function(){return _.classList.remove("clicked")})),h.addEventListener("submit",(function(n){return function(n,o){n.preventDefault(),n.submitter.textContent="Сохранение...",function(n){return fetch("".concat(e.baseUrl,"/users/me/avatar"),{method:"PATCH",body:JSON.stringify({avatar:n}),headers:e.headers}).then(t)}(o).then((function(e){_.style.backgroundImage="url(".concat(e.avatar,")"),i(v)})).catch((function(e){return console.log(e)})).finally((function(){n.submitter.textContent="Сохранить"}))}(n,y.value)}));var b=document.forms["edit-profile"],S=b.elements.name,g=b.elements.description,k=document.querySelector(".profile__title"),C=document.querySelector(".profile__description"),L=document.querySelector(".profile__edit-button"),q=document.querySelector(".popup_type_edit");function E(e){k.textContent=e.name,C.textContent=e.about.replace(/[^а-яА-ЯёЁa-zA-Z \-]+/g,""),_.style.backgroundImage="url(".concat(e.avatar,")")}L.addEventListener("click",(function(){S.value=k.textContent,g.value=C.textContent,a(q),l(b,p)})),b.addEventListener("submit",(function(n){return function(n,o,r){n.preventDefault(),n.submitter.textContent="Сохранение...",function(n,o){return fetch("".concat(e.baseUrl,"/users/me"),{method:"PATCH",body:JSON.stringify({name:n,about:o}),headers:e.headers}).then(t)}(o,r).then((function(e){E(e),i(q)})).catch((function(e){return console.log(e)})).finally((function(){n.submitter.textContent="Сохранить"}))}(n,S.value,g.value)})),Promise.all([fetch("".concat(e.baseUrl,"/users/me"),{headers:e.headers}).then(t),fetch("".concat(e.baseUrl,"/cards"),{headers:e.headers}).then(t)]).then((function(e){var t,n;E(e[0]),t=e[1],n=e[0]._id,t.forEach((function(e){m.append(o(e,n,c,N,r))}))})).catch((function(e){return console.log(e)}));var x=document.forms["new-place"],A=x.elements["place-name"],U=x.elements.link,w=document.querySelector(".profile__add-button"),T=document.querySelector(".popup_type_new-card");w.addEventListener("click",(function(){x.reset(),l(x,p),a(T)})),x.addEventListener("submit",(function(n){n.preventDefault(),n.submitter.textContent="Сохранение...",function(n){return fetch("".concat(e.baseUrl,"/cards"),{method:"POST",body:JSON.stringify(n),headers:e.headers}).then(t)}({name:A.value,link:U.value}).then((function(e){m.prepend(o(e,e.owner._id,c,N,r)),i(T)})).catch((function(e){return console.log(e)})).finally((function(){n.submitter.textContent="Создать"}))}));var B=document.querySelector(".popup__image"),P=document.querySelector(".popup__caption"),D=document.querySelector(".popup_type_image");function N(e){!function(e){B.src=e.link,B.alt=e.name,P.textContent=e.name}(e),a(D)}})();
//# sourceMappingURL=main.js.map