document.body.onload = function (){
    toggleLightCard('.section1-trend-slider-card3__text', 'baner');
    Url('https://www.youtube.com/watch?v=PDxtjIFfB1M');
    UrlMore('https://planetakino.ua/movies/elio/#today')
}

document.querySelectorAll('.section5-list-item__img').forEach(img => {
    img.addEventListener('click', function () {
        const text1 = this.previousElementSibling.querySelector('.section5-list-item-texts__text')
        text1.classList.toggle('open');
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

function Url(url) {
    document.querySelectorAll('.section1-buttons__btn1').forEach(button => {
        button.addEventListener('click', () => {
            window.location.href = url;
        });
    })
}
function UrlMore(url) {
    document.querySelectorAll('.section1-buttons__btn2').forEach(button => {
        button.addEventListener('click', () => {
            window.location.href = url;
        });
    })
}
function filterCards(selectedCategory) {
    const cards = document.querySelectorAll('.section2-listcatalog-card, .section2-listcatalog-card2, .section2-listcatalog-card3, .section2-listcatalog-card4');

    cards.forEach(card => {
        const cardCategories = card.getAttribute('data-category').split(' , ').map(category => category.trim());

        const matches = selectedCategory === 'all' || cardCategories.includes(selectedCategory);

        card.style.display = matches ? 'block' : 'none';
        card.style.alignContent = 'flex-end';
    });
    const titles = document.querySelectorAll('.section2-listcatalog-card__title');
    const texts = document.querySelectorAll('.section2-listcatalog-card__text');
    titles.forEach(title=>{
        title.style.alignSelf = 'flex-start';
    })
    texts.forEach(text=>{
        text.style.alignSelf = 'flex-end';
        text.style.overflowY = 'hidden';
    })
}


document.querySelector('.section1-trend-slider-card1')
    .addEventListener('click', function () {
            const titles = document.querySelectorAll('.section1__title');
            const texts = document.querySelectorAll('.section1__text');

            titles.forEach(title => {
                    title.textContent = 'Quantum Mirage: A Journey Through Realities';
                    title.classList.add('updated-style');
            });

            texts.forEach(text => {
                    text.textContent = 'In a world where the lines between illusion and reality blur, a lone traveler ventures into parallel dimensions, each revealing new mysteries and dangers beyond imagination.';
                    text.classList.add('updated-text');
            });

            toggleLightCard('.section1-trend-slider-card1__text', 'baner2');
            Url('https://www.youtube.com/watch?v=q2rlaaRvKEo');
            UrlMore('https://planetakino.ua/movies/arctic-justice/#today');

    });

document.querySelector('.section1-trend-slider-card2')
    .addEventListener('click', function () {
            const titles=document.querySelectorAll('.section1__title');
            const texts=document.querySelectorAll('.section1__text');

            titles.forEach(title =>{
                    title.textContent='Crimson Serendipity: The Dance of Destiny'
                    title.classList.add('updated-style');
            })
            texts.forEach(text=>{
                    text.textContent='In an enchanted castle under a crimson sky, two souls meet by chance, embarking on a journey that intertwines love, loss, and the power of fate.\n'
                    text.classList.add('updated-text');
            })
            toggleLightCard('.section1-trend-slider-card2__text', 'baner1');
            Url('https://www.youtube.com/watch?v=O8WVLkr49CU');
            UrlMore('https://planetakino.ua/movies/the-garfield-movie/#today');
    });

document.querySelector('.section1-trend-slider-card3')
    .addEventListener('click', function () {
            const titles=document.querySelectorAll('.section1__title');
            const texts=document.querySelectorAll('.section1__text');

            titles.forEach(title =>{
                    title.textContent='The Celestial Cipher: Unlocking the Universe’s Secrets'
                    title.classList.add('updated-style');
            })
            texts.forEach(text=>{
                    text.textContent='Set amidst distant planets and cosmic wonders, a team of explorers decodes an ancient cipher, facing perilous challenges as they seek the answers to the universe’s mysteries.'
                    text.classList.add('updated-text');
            })

            toggleLightCard('.section1-trend-slider-card3__text', 'baner');
            Url('https://www.youtube.com/watch?v=PDxtjIFfB1M');
            UrlMore('https://planetakino.ua/movies/elio/#today')
    });

document.querySelector('.section1-trend-slider-card4')
    .addEventListener('click', function () {
            const titles=document.querySelectorAll('.section1__title');
            const texts=document.querySelectorAll('.section1__text');

            titles.forEach(title =>{
                    title.textContent='Solaris Synchrony: A Celestial Odyssey of Hope and Harmony'
                    title.classList.add('updated-style');
            })
            texts.forEach(text=>{
                    text.textContent='Against the backdrop of a dying Earth, a team of scientists embarks on an ambitious mission to unite humanity with a new solar system, syncing consciousness in a last bid for survival.'
                    text.classList.add('updated-text');
            })

            toggleLightCard('.section1-trend-slider-card4__text', 'baner3');
            Url('https://www.youtube.com/watch?v=wIQE7rBdr1c');
            UrlMore('https://planetakino.ua/movies/10-lives/#today');
    });

document.querySelector('.section1-trend-slider-card5')
    .addEventListener('click', function () {
            const titles=document.querySelectorAll('.section1__title');
            const texts=document.querySelectorAll('.section1__text');

            titles.forEach(title =>{
                    title.textContent='Ephemeral Echo: The Call Across Time'
                    title.classList.add('updated-style');
            })
            texts.forEach(text=>{
                    text.textContent='Spanning lifetimes and dimensions, characters connect across the bounds of time, revealing secrets that could reshape the future and unravel the fabric of existence.'
                    text.classList.add('updated-text');
            })

            toggleLightCard('.section1-trend-slider-card5__text', 'baner4');
            Url('https://www.youtube.com/watch?v=7pZ_jQFnJ2g');
            UrlMore('https://planetakino.ua/movies/despicable-me-4/#today');
    });
document.querySelector('.buttons-svg__img')
    .addEventListener('click', function () {
        const searchInput = document.querySelector('.search');


        if( searchInput.style.display ==='block'){
            searchInput.style.display ='none';
        }
        else {
            searchInput.style.display ='block';
        }
    });

