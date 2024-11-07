document.querySelectorAll('.section2-container2-item__img').forEach(img => {
    img.addEventListener('click', function () {
        const text = this.previousElementSibling.querySelector('.section2-container2-item-texts__text');
        text.classList.toggle('open');
        this.classList.toggle('minus');
    });
});
document.querySelector('.header-burger__img')
    .addEventListener('click', function () {
        const menuItems = document.querySelectorAll('.nav, .buttons');

        menuItems.forEach(menu => {
            menu.classList.toggle('open');
        });
        this.classList.toggle('krest');
    });
