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

export {closeModal, openModal};
