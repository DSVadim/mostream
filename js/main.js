document.querySelector('.header-burger').
addEventListener('click',function () {
    const menu = document.querySelector('.nav');
    menu.classList.toggle('open');
});
document.querySelectorAll('.section5-list-item__img').forEach(img => {
    img.addEventListener('click', function () {
        const text = this.previousElementSibling.querySelector('.section5-list-item-texts__text');
        text.classList.toggle('open');
        this.classList.toggle('minus');
    });
});

