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
function toggleSingleCardStyle(activeCardSelector, activeImgSelector) {
    const allCards = document.querySelectorAll('.section1-container2-block1-card1, .section1-container2-block1-card2, .section1-container2-block2-card1, .section1-container2-block2-card2');
    const allImages = document.querySelectorAll('.section1-container2-block1-card1-label__img, .section1-container2-block1-card2-label__img, .section1-container2-block2-card1-label__img, .section1-container2-block2-card2-label__img');

    const activeImage = document.querySelector(activeImgSelector);
    const activeCard = document.querySelector(activeCardSelector);

    activeCard.addEventListener('click', function() {
        allCards.forEach(card => {
            card.style.borderColor = '#242323';
            card.style.backgroundImage = 'none';
        });
        allImages.forEach(img => img.classList.remove('red'));

        activeCard.style.borderColor = '#F14141';
        activeCard.style.backgroundImage = 'url("img/sub_back.png")';
        activeImage.classList.add('red');
    });
}

toggleSingleCardStyle('.section1-container2-block1-card1', '.section1-container2-block1-card1-label__img');
toggleSingleCardStyle('.section1-container2-block1-card2', '.section1-container2-block1-card2-label__img');
toggleSingleCardStyle('.section1-container2-block2-card1', '.section1-container2-block2-card1-label__img');
toggleSingleCardStyle('.section1-container2-block2-card2', '.section1-container2-block2-card2-label__img');

document.querySelector('.section1-container1-buttons__btn1')
    .addEventListener('click', function() {
        const cards = document.querySelectorAll('.section1-container2-block1-card1, .section1-container2-block1-card2, .section1-container2-block2-card1, .section1-container2-block2-card2');
        let isSubscriptionMade = false;

        cards.forEach(card => {
            const currentBorderColor = window.getComputedStyle(card).borderColor;
            if (currentBorderColor === 'rgb(241, 65, 65)') {
                isSubscriptionMade = true;
            }
        });
        if (isSubscriptionMade) {
        document.querySelector('.section1').style.display = 'none';
            document.querySelector('.section1_1').style.display = 'flex';
            document.querySelector('.section2').style.display = 'none';
        } else {
            alert('Error: No subscription selected');
        }
    });


