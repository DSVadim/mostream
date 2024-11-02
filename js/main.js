document.querySelector('.header-burger').
addEventListener('click',function () {
    const menu = document.querySelector('.nav');
    menu.classList.toggle('open');
});