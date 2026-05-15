const btn = document.querySelector('.menu-btn');
const menu = document.querySelector('nav');

btn.addEventListener('click', function() {
    btn.classList.toggle('change');
    menu.classList.toggle('hide');
});