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
function changeBannerClass(newClass) {
        const banners = document.querySelectorAll('.baner, .baner1, .baner2, .baner3, .baner4');

        banners.forEach(banner => {
                banner.classList.remove('baner', 'baner1', 'baner2', 'baner3', 'baner4');
                banner.classList.add(newClass);
        });
}
function toggleLightCard(activeCardSelector, bannerClass) {
        const cards = document.querySelectorAll('.section1-trend-slider-card1__text, .section1-trend-slider-card2__text, .section1-trend-slider-card3__text, .section1-trend-slider-card4__text, .section1-trend-slider-card5__text');

        cards.forEach(card => {
                card.classList.remove('light');
        });

        const activeCard = document.querySelector(activeCardSelector);
        activeCard.classList.add('light');

        changeBannerClass(bannerClass);
}

document.querySelector('.section1-trend-slider-card1')
    .addEventListener('click', function () {
            toggleLightCard('.section1-trend-slider-card1__text', 'baner2');
    });

document.querySelector('.section1-trend-slider-card2')
    .addEventListener('click', function () {
            toggleLightCard('.section1-trend-slider-card2__text', 'baner1');
    });

document.querySelector('.section1-trend-slider-card3')
    .addEventListener('click', function () {
            toggleLightCard('.section1-trend-slider-card3__text', 'baner');
    });

document.querySelector('.section1-trend-slider-card4')
    .addEventListener('click', function () {
            toggleLightCard('.section1-trend-slider-card4__text', 'baner3');
    });

document.querySelector('.section1-trend-slider-card5')
    .addEventListener('click', function () {
            toggleLightCard('.section1-trend-slider-card5__text', 'baner4');
    });


