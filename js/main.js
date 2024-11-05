window.addEventListener('DOMContentLoaded', () => {
    const header = document.querySelector('.nav');
    const hamburgerBtn = document.querySelector('.header__btn');

    hamburgerBtn.addEventListener('click', () => {
        header.classList.toggle('nav--open');
    });
});