function toggleSingleCardStyle(activeCardSelector, activeImgSelector) {
    const allCards = document.querySelectorAll('.section1-container1-cards-card,.section1-container1-cards-card1');
    const allImages = document.querySelectorAll('.section1-container1-cards-card-label__img,.section1-container1-cards-card1-label__img');

    const activeImage = document.querySelector(activeImgSelector);
    const activeCard = document.querySelector(activeCardSelector);

    activeCard.addEventListener('click', function() {
        allCards.forEach(card => {
            card.style.borderColor = '#242323';
            card.style.backgroundImage = 'none';
        });

        allImages.forEach(img => img.classList.remove('red'));

        activeCard.style.borderColor = '#F14141';
        activeImage.classList.add('red');
    });
}

toggleSingleCardStyle('.section1-container1-cards-card', '.section1-container1-cards-card-label__img')
toggleSingleCardStyle('.section1-container1-cards-card1', '.section1-container1-cards-card1-label__img')

function ifShow() {
    const inputs = document.querySelectorAll('.section1-container1-label__input');
    const cards = document.querySelectorAll('.section1-container1-cards-card,.section1-container1-cards-card1');
    let allFilled = true;
    let isSubscriptionMade = false;

    inputs.forEach(input => {
        if (input.value.trim() === "" ) {

                allFilled = false;
        }
    });
    cards.forEach(card =>{
        const currentBorderColor = window.getComputedStyle(card).borderColor;
        if (currentBorderColor === 'rgb(241, 65, 65)') {
            isSubscriptionMade = true;
        }
    })

    if (!allFilled ) {
        alert('Please fill in all required fields.');
    }
    else if(isSubscriptionMade === false) {
        alert('Please select card.');
    }
    else
    {
        showModal();
    }
}
function showModal() {
    const html = `
        <div id="modal" class="modal" style="display: flex; align-items: center; justify-content: center; position: fixed; top: 0; left: 0; width: 100%; height: 100%; background-color: rgba(0, 0, 0, 0.5);">
            <div class="modal-content" style="background-color: rgba(17,17,17,0.5); padding: 25px; border-radius: 5px;width: 90%; position: relative;">
                <span class="close-btn" onclick="closeModal()" style="position: absolute; top: 10px; right: 10px; cursor: pointer; font-size: 50px;">&times;</span>
                <p class="modal-content__title">Payment Success</p>
                <p class="modal-content__text">Thank You for Choosing MOSTREAM - Get Ready for Uninterrupted Cinematic Bliss</p>
                <img class="modal-content__img" alt="img">
                <button class="modal-content__btn" onclick="closeModal()">Back to Home</button>
            </div>
        </div>
        <style>
        .modal {
  display: none; }
  .modal-content {
  max-width: 400px;
    display: flex;
    flex-direction: column;
    align-items: center;
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
    .modal-content__text {
    text-align: center;
      font-family: 'Inter', sans-serif;
      font-size: 12px;
      font-weight: 500;
      line-height: 26px;
      color: #636363;
    }
    .modal-content__img{
    content: url("../img/js.svg");
    width: 255px;
    height: 255px;
    }
      .modal-content__btn{
      padding: 15px 0;
      font-weight: 600;
      font-size: 16px;
      line-height: 24px;
      font-family: "Inter", sans-serif;
      color: #FFFFFF;
      background-color: #F14141;
      width: 100%;
      border-color: #F14141;
      }
 @media screen and (max-width: 1000px) and (min-width: 375px) {
        .modal-content {
        max-width: max-content;
        gap: 25px;
        }
    .modal-content__title {
      font-family: 'Inter', sans-serif;
      font-size: 32px;
      font-weight: 600;
      line-height: 48px;}
    .modal-content__text {
    text-align: center;
      font-family: 'Inter', sans-serif;
      font-size: 28px;
      font-weight: 500;
      line-height: 48px; }
      .modal-content__img{
    width: 455px;
    height: 455px;
    }
      .modal-content__btn{
      padding: 15px 0;
      font-weight: 600;
      font-size: 32px;
      line-height: 48px;
      font-family: "Inter", sans-serif;
      color: #FFFFFF;
      background-color: #F14141;
      width: 100%;
      }
 }
</style>
    `;

    document.body.insertAdjacentHTML('beforeend', html);
}

function closeModal() {
    const modal = document.getElementById("modal");
    if (modal) {
        modal.remove();
    }
}

window.onclick = function(event) {
    const modal = document.getElementById("modal");
    if (event.target === modal) {
        closeModal();
    }
};
