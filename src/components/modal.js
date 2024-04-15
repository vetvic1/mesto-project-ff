function openModal(target) {
    target.classList.add('popup_is-opened');
    addEscapeListener();
}

function closeModal(target) {
    target.classList.remove('popup_is-opened');
    removeEscapeListener();
}

function addEscapeListener() {
    document.addEventListener('keydown', escapeListener);
}

function removeEscapeListener() {
    document.removeEventListener('keydown', escapeListener);
}

function escapeListener(evt) {
    if (evt.key === 'Escape') {
        closeModal(document.querySelector('.popup_is-opened'));
    }
}

function overlayClose(evt) {
    const target = evt.target;
    if (target.classList.contains('popup_is-opened')) {
        closeModal(target);
    }
}

function crossButtonClose(evt) {
    const target = evt.target;
    if (target.classList.contains('popup__close')) {
        closeModal(target.closest('.popup'));
    }
}

export {closeModal, openModal, overlayClose, crossButtonClose};
