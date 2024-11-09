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
            window.location.href ='Card.html';
        } else {
            alert('Error: No subscription selected');
        }
    });
document.querySelector('.section1-container1-buttons__btn2').addEventListener('click', function() {
    const cards = document.querySelectorAll('.section1-container2-block1-card1, .section1-container2-block1-card2, .section1-container2-block2-card1, .section1-container2-block2-card2');
    let selectedCard = null;

    cards.forEach(card => {
        const currentBorderColor = window.getComputedStyle(card).borderColor;
        if (currentBorderColor === 'rgb(241, 65, 65)') {
            selectedCard = card;
        }
    });

    if (selectedCard) {
        const price = selectedCard.querySelector('.section1-container2-block1-card1__price, .section1-container2-block2-card1__price,.section1-container2-block1-card2__price, .section1-container2-block2-card2__price').textContent;
        const period = selectedCard.querySelector('.section1-container2-block1-card1-label__title, .section1-container2-block2-card1-label__title, .section1-container2-block1-card2-label__title, .section1-container2-block2-card2-label__title').textContent;

        showModal(price, period);
    } else {
        alert('Error: No subscription selected');
    }
});

function showModal(price, period) {
    const html = `
        <div id="modal" class="modal" style="display: flex; align-items: center; justify-content: center; position: fixed; top: 0; left: 0; width: 100%; height: 100%; background-color: rgba(0, 0, 0, 0.5);">
            <div class="modal-content" style="background-color: rgba(17,17,17,0.5); padding: 25px; border-radius: 5px;width: 90%; position: relative;">
                <span class="close-btn" onclick="closeModal()" style="position: absolute; top: 10px; right: 10px; cursor: pointer; font-size: 50px;">&times;</span>
                <p class="modal-content__title">Explore Our Tailored Subscription Plans</p>
                <p class="modal-content__text">Welcome to Mostream, where your cinematic journey is about to reach new heights.</p>
                <p class="modal-content__subtitle">Basic Subscription - ${period}</p>
                <p class="modal-content__subtitle"><strong>Price:</strong> ${price}</p>
                <p class="modal-content__text">For the casual viewer who appreciates quality entertainment without breaking the bank. The Basic Plan offers:</p>
                <ul class="modal-content-list">
                    <li class="modal-content-list__item">Watch original series and other sports content</li>
                    <li class="modal-content-list__item">Enjoy watching sports shows such as: UCL, UEL, Bein (1 & 3), WTA, etc.</li>
                    <li class="modal-content-list__item">Vidio Original Series, such as: Pertaruhan, Merajut Dendam, Bestie, My Nerd Girl, Turn On, 96 Hours, etc.</li>
                    <li class="modal-content-list__item">Korean dramas, such as: Delightfully Deceitful, The Real Has Come!, Decibel, Home School (Thailand Series), All That We Loved, etc.</li>
                    <li class="modal-content-list__item">Hollywood and local films, such as: Seisai, Argantara, Criminal, S.W.A.T Series, Mechanic Resurrection, Aftermath, Black Clover, Tokyo Ghoul, Girl from Nowhere, etc.</li>
                    <li class="modal-content-list__item">International TV channels, such as: tvN, Zee Bioskop, Rock Action, Rock Entertainment, Zoomoo, Hip Hip Horee, Fashion TV - Global, etc.</li>
                </ul>
                <p class="modal-content__subtitle">Terms & Conditions:</p>
                <ul class="modal-content-list">
                    <li class="modal-content-list__item">Can only be viewed on 1 device at a time.</li>
                    <li class="modal-content-list__item">Excludes EPL.</li>
                    <li class="modal-content-list__item">Excludes live match broadcasting rights.</li>
                    <li class="modal-content-list__item">Excludes access to watch the FIFA World Cup U-17 Indonesia 2023.</li>
                    <li class="modal-content-list__item">Vidio Premier service cannot be shared or resold to other users.</li>
                    <li class="modal-content-list__item">Subscriptions will be automatically renewed via credit card, ShopeePay, OVO, GoPay, Google, and Apple in-app (specifically for 1-year and 30-day packages).</li>
                    <li class="modal-content-list__item">The application can still be accessed without an active subscription.</li>
                    <li class="modal-content-list__item">Automatic subscription renewal can be canceled at any time through the 'My Package' menu in the application.</li>
                </ul>
            </div>
        </div>
        <style>
        .modal {
  display: none; }
  .modal-content {
  max-width: 600px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    gap: 5px; }
    .modal-content .close-btn {
    padding-right: 25px;
      color: white; }
    .modal-content__title {
      font-family: 'Inter', sans-serif;
      font-size: 26px;
      font-weight: 600;
      line-height: 40px;
      margin-top: 0;
      color: white; }
    .modal-content__subtitle {
      color: #ffffff;
      font-family: 'Inter', sans-serif;
      font-size: 24px;
      font-weight: 600;
      line-height: 32px; }
    .modal-content__text {
      font-family: 'Inter', sans-serif;
      font-size: 12px;
      font-weight: 500;
      line-height: 26px;
      color: #636363; }
    .modal-content-list {
      list-style: none;
      padding-left: 20px; }
      .modal-content-list__item {
        font-family: 'Inter', sans-serif;
        font-size: 12px;
        font-weight: 500;
        line-height: 26px;
        color: #636363; }
      .modal-content-list__item::before {
        content: "•";
        margin-right: 8px; }
      
        @media screen and (max-width: 1000px) and (min-width: 375px) {
        .modal-content {
        max-width: max-content;
        width: 70%;
        gap: 55px;
        }
    .modal-content__title {
      font-family: 'Inter', sans-serif;
      font-size: 38px;
      font-weight: 600;
      line-height: 50px;}
    .modal-content__subtitle {
      font-family: 'Inter', sans-serif;
      font-size: 37px;
      font-weight: 600;
      line-height: 42px; }
    .modal-content__text {
      font-family: 'Inter', sans-serif;
      font-size: 29px;
      font-weight: 500;
      line-height: 36px; }
    .modal-content-list {
      list-style: none;
      padding-left: 20px; }
      .modal-content-list__item {
        font-family: 'Inter', sans-serif;
        font-size: 29px;
        font-weight: 500;
        line-height: 36px;
</style>
    `;

    document.body.insertAdjacentHTML('beforeend', html);
}

// Function to close the modal
function closeModal() {
    const modal = document.getElementById("modal");
    if (modal) {
        modal.remove();
    }
}

// Optional: Close modal when clicking outside of the modal content
window.onclick = function(event) {
    const modal = document.getElementById("modal");
    if (event.target === modal) {
        closeModal();
    }
};

