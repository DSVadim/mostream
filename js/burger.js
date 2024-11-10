document.querySelector('.header-burger__img')
    .addEventListener('click', function () {
        const menuItems = document.querySelectorAll('.nav, .buttons');

        menuItems.forEach(menu => {
            menu.classList.toggle('open');
        });
        this.classList.toggle('krest');
    });