document.querySelector('.section2__btn').addEventListener('click', function () {
    const cards = document.querySelectorAll('.section2-block2-card1');
    const button = document.querySelector('.section2__btn');
    const image = document.querySelector('.section2__img');

    cards.forEach(card => {
        card.style.display = card.style.display === 'none' ? 'flex' : 'none';
    });

    const isHidden = cards[0].style.display === 'none';
    button.textContent = isHidden ? 'Load More Movie' : 'Don’t show!';

    image.classList.toggle('down');
});
