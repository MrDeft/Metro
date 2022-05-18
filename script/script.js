const toggleBtn = document.getElementById('toggle-btn');
const toggleMenu = document.getElementById('nav-menu');
const navRight = document.getElementById('nav__right');
toggleBtn.addEventListener('click', () => {
    toggleMenu.classList.toggle('show__menu');
    toggleMenu.classList.toggle('hide__menu');
    navRight.classList.toggle('nav__right__show');
    navRight.classList.toggle('nav__right__hide');
});

ScrollReveal().reveal('.slide__text, .slide__img, .section__comp, .sect__grid__item, .signup__comp, .posts__item, .insta__item, .footer', { duration: 1000, reset: true, origin: 'bottom', distance: '50px', interval: 20 });
