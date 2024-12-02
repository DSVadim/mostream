document.querySelector('.section2__btn').addEventListener('click', function () {
    const cards = document.querySelectorAll('.section2-block2-card1');
    const button = document.querySelector('.section2__btn');
    const image = button.querySelector('.section2__btn__img');

    cards.forEach(card => {
        card.style.display = card.style.display === 'none' ? 'flex' : 'none';
    });
    const isHidden = cards[0].style.display === 'none';
    button.textContent = isHidden ? 'Load More Movie ' : 'Don’t show! ';
    button.appendChild(image);
    image.style.transform = isHidden ? 'rotate(0deg)' : 'rotate(180deg)';
});
document.querySelectorAll('.section1-block2-buttons__btn').forEach(button => {
    const input = document.querySelector('.section1-block1__input');
    button.addEventListener('click', function () {
        const buttonText = button.textContent.trim();
        const validTexts = ['Billing', 'Device', 'Download', 'Sharing', 'Genres'];

        if (validTexts.includes(buttonText)) {
            input.value = buttonText;
        }
    });
});

