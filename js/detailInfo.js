function Url(url) {
    document.querySelectorAll('.section1-buttons__btn1').forEach(button => {
        button.addEventListener('click', () => {
            window.location.href = url;
        });
    })
}
function applySelectedBanner() {
    const selectedBannerClass = localStorage.getItem('selectedBannerClass');

    if (selectedBannerClass) {
        const banners = document.querySelectorAll('.baner, .baner1, .baner2, .baner3, .baner4');
        banners.forEach(banner => {
            banner.classList.remove('baner', 'baner1', 'baner2', 'baner3', 'baner4');
            banner.classList.add(selectedBannerClass);
        });
        if(selectedBannerClass === 'baner'){
            const titles=document.querySelectorAll('.section1__title');
            const texts=document.querySelectorAll('.section1__text');
            const texts1=document.querySelectorAll('.section2__text1');
            const texts2=document.querySelectorAll('.section2__text2');
            const texts3=document.querySelectorAll('.section2__text3');

            titles.forEach(title =>{
                title.textContent='The Celestial Cipher: Unlocking the Universe’s Secrets'
                title.classList.add('updated-style');
            })
            texts.forEach(text=>{
                text.textContent='Set amidst distant planets and cosmic wonders, a team of explorers decodes an ancient cipher, facing perilous challenges as they seek the answers to the universe’s mysteries.'
                text.classList.add('updated-text');
            })
            texts1.forEach(text=>{
                text.textContent='Their audacious mission: to forge a symbiotic connection between the collective consciousness of humanity and a burgeoning solar system on the precipice of creation. As the last glimmers of hope flicker against the backdrop of a dying Earth, the \'Solaris Synchrony\' becomes an epic saga of sacrifice, courage, and the indomitable spirit of exploration.'
                text.classList.add('updated-text2');
            })
            texts2.forEach(text=>{
                text.textContent='Amidst the cosmic grandeur of distant planets, The Celestial Cipher follows a team of explorers on a mission to decipher an ancient riddle that could alter the fate of humanity. Their journey takes them through star-strewn vistas and into the heart of the unknown, where each clue brings them closer to the universe’s deepest mysteries.'
                text.classList.add('updated-text2');
            })
            texts3.forEach(text=>{
                text.textContent='Journey with us through the cosmic tapestry, where the interplay of science and the human spirit takes center stage. Encounter the characters who dare to defy the boundaries of existence, confronting the existential questions that echo through the vastness of the universe.'
                text.classList.add('updated-text2');
            })
            Url('https://www.youtube.com/watch?v=q2rlaaRvKEo');
        }
        else if(selectedBannerClass === 'baner1'){
            const titles=document.querySelectorAll('.section1__title');
            const texts=document.querySelectorAll('.section1__text');
            const texts1=document.querySelectorAll('.section2__text1');
            const texts2=document.querySelectorAll('.section2__text2');
            const texts3=document.querySelectorAll('.section2__text3');

            titles.forEach(title =>{
                title.textContent='Crimson Serendipity: The Dance of Destiny'
                title.classList.add('updated-style');
            })
            texts.forEach(text=>{
                text.textContent='In an enchanted castle under a crimson sky, two souls meet by chance, embarking on a journey that intertwines love, loss, and the power of fate.\n'
                text.classList.add('updated-text');
            })
            texts1.forEach(text=>{
                text.textContent='Beneath the glow of a crimson sky, two souls are bound by fate in an enchanted castle where magic and destiny intertwine. Crimson Serendipity tells a story of chance encounters and timeless connections, unfolding in a world where each moment is steeped in mystery and romance.'
                text.classList.add('updated-text2');
            })
            texts2.forEach(text=>{
                text.textContent='As these protagonists uncover ancient secrets hidden within the castle walls, they must decide whether to embrace their fate or forge a new path together. With every revelation, they find themselves drawn deeper into a dance that challenges the very fabric of destiny.'
                text.classList.add('updated-text2');
            })
            texts3.forEach(text=>{
                text.textContent='This mystical journey is a tale of love, choice, and the forces that shape our lives, inviting audiences to ponder the balance between fate and free will.'
                text.classList.add('updated-text2');
            })
            Url('https://www.youtube.com/watch?v=O8WVLkr49CU');
        }
        else if(selectedBannerClass === 'baner2'){
            const titles = document.querySelectorAll('.section1__title');
            const texts = document.querySelectorAll('.section1__text');
            const texts1=document.querySelectorAll('.section2__text1');
            const texts2=document.querySelectorAll('.section2__text2');
            const texts3=document.querySelectorAll('.section2__text3');

            titles.forEach(title => {
                title.textContent = 'Quantum Mirage: A Journey Through Realities';
                title.classList.add('updated-style');
            });

            texts.forEach(text => {
                text.textContent = 'In a world where the lines between illusion and reality blur, a lone traveler ventures into parallel dimensions, each revealing new mysteries and dangers beyond imagination.';
                text.classList.add('updated-text');
            })
            texts1.forEach(text=>{
                text.textContent='In a society on the brink of technological transcendence, Quantum Mirage explores the thin line between illusion and reality. A lone traveler steps into parallel dimensions, each more mysterious than the last, encountering breathtaking landscapes and unimaginable dangers that test their grasp on reality.'
                text.classList.add('updated-text2');
            })
            texts2.forEach(text=>{
                text.textContent='As they journey deeper, each new reality reveals clues to the true nature of consciousness and existence itself. These encounters push them to confront their innermost fears, their identity, and the question of what it means to be real in a world built on shifting truths.'
                text.classList.add('updated-text2');
            })
            texts3.forEach(text=>{
                text.textContent='Quantum Mirage takes audiences on a mind-bending adventure through realms where reality and illusion blur, challenging perceptions and stretching the boundaries of the possible.'
                text.classList.add('updated-text2');
            })
            Url('https://www.youtube.com/watch?v=PDxtjIFfB1M');
        }
        else  if(selectedBannerClass === 'baner3'){
            const titles=document.querySelectorAll('.section1__title');
            const texts=document.querySelectorAll('.section1__text');
            const texts1=document.querySelectorAll('.section2__text1');
            const texts2=document.querySelectorAll('.section2__text2');
            const texts3=document.querySelectorAll('.section2__text3');
            titles.forEach(title =>{
                title.textContent='Solaris Synchrony: A Celestial Odyssey of Hope and Harmony'
                title.classList.add('updated-style');
            })
            texts.forEach(text=>{
                text.textContent='Against the backdrop of a dying Earth, a team of scientists embarks on an ambitious mission to unite humanity with a new solar system, syncing consciousness in a last bid for survival.'
                text.classList.add('updated-text');
            })
            texts1.forEach(text=>{
                text.textContent='In the not-so-distant future, as Earth teeters on the brink of collapse, Solaris Synchrony unveils a riveting narrative that transcends the boundaries of time and space. Amidst the shadows of a fading world, a consortium of brilliant scientists embarks on a race against impending doom.'
                text.classList.add('updated-text2');
            })
            texts2.forEach(text=>{
                text.textContent='Their audacious mission: to forge a symbiotic connection between the collective consciousness of humanity and a burgeoning solar system on the precipice of creation. As the last glimmers of hope flicker against the backdrop of a dying Earth, the Solaris Synchrony becomes an epic saga of sacrifice, courage, and the indomitable spirit of exploration.'
                text.classList.add('updated-text2');
            })
            texts3.forEach(text=>{
                text.textContent='Journey with us through the cosmic tapestry, where the interplay of science and the human spirit takes center stage. Encounter the characters who dare to defy the boundaries of existence, confronting the existential questions that echo through the vastness of the universe.'
                text.classList.add('updated-text2');
            })
            Url('https://www.youtube.com/watch?v=wIQE7rBdr1c');
        }
        else {
            const titles=document.querySelectorAll('.section1__title');
            const texts=document.querySelectorAll('.section1__text');
            const texts1=document.querySelectorAll('.section2__text1');
            const texts2=document.querySelectorAll('.section2__text2');
            const texts3=document.querySelectorAll('.section2__text3');

            titles.forEach(title =>{
                title.textContent='Ephemeral Echo: The Call Across Time'
                title.classList.add('updated-style');
            })
            texts.forEach(text=>{
                text.textContent='Spanning lifetimes and dimensions, characters connect across the bounds of time, revealing secrets that could reshape the future and unravel the fabric of existence.'
                text.classList.add('updated-text');
            })
            texts1.forEach(text=>{
                text.textContent='Spanning lifetimes and dimensions, Ephemeral Echo explores the deep connections that transcend time itself. As characters from different eras connect across the ages, they uncover secrets that could reshape the future and alter the course of history.'
                text.classList.add('updated-text2');
            })
            texts2.forEach(text=>{
                text.textContent='Through shared memories and mysterious echoes of the past, they embark on a journey that blurs the lines between past and present, revealing how each lifetime is but one chapter in an interconnected story. This journey forces them to confront timeless questions about love, sacrifice, and legacy.'
                text.classList.add('updated-text2');
            })
            texts3.forEach(text=>{
                text.textContent='Ephemeral Echo captures the essence of human connection across generations, inviting audiences to experience the haunting beauty of a love that defies the boundaries of time.'
                text.classList.add('updated-text2');
            })
            Url('https://www.youtube.com/watch?v=7pZ_jQFnJ2g');
        }
    }
}
function lightText(activeTextSelector){
    const texts= document.querySelectorAll('.section4-images-image1-label__text,.section4-images-image2-label__text,.section4-images-image3-label__text')
    texts.forEach(text => {
        text.classList.remove('light');
    })
    const activeText = document.querySelector(activeTextSelector);
    activeText.classList.add('light');
}
function lightExport(activeExportSelector){
    const images = document.querySelectorAll('.section4-images-image1-label__img,.section4-images-image2-label__img,.section4-images-image3-label__img')
    images.forEach(image =>{
        image.classList.remove('light');
        const activeExport = document.querySelector(activeExportSelector);
        activeExport.classList.add('light');
    })
}
function scoupCard(activeImageSelector){
    const cards = document.querySelectorAll('.section4-images-image1,.section4-images-image2,.section4-images-image3')
    cards.forEach(card => {
        card.classList.remove('scoup');
    })

    const activeCard = document.querySelector(activeImageSelector);
    activeCard.classList.add('scoup');
}
function lightCard(activeCardSelector,activeExportSelector){
    const cards = document.querySelectorAll('.section4-images-image1-back,.section4-images-image2-back,.section4-images-image3-back')
    cards.forEach(card => {
                card.classList.remove('light');
            })

            const activeCard = document.querySelector(activeCardSelector);
            activeCard.classList.add('light');
            lightExport(activeExportSelector)
}
document.querySelector('.section4-images-image1')
    .addEventListener('click', function (){
        scoupCard('.section4-images-image1')
        lightCard('.section4-images-image1-back' ,'.section4-images-image1-label__img')
        lightText('.section4-images-image1-label__text')
    })
document.querySelector('.section4-images-image2')
    .addEventListener('click', function (){
        scoupCard('.section4-images-image2')
        lightCard('.section4-images-image2-back','.section4-images-image2-label__img')
        lightText('.section4-images-image2-label__text')
    })
document.querySelector('.section4-images-image3')
    .addEventListener('click', function (){
        scoupCard('.section4-images-image3')
        lightText('.section4-images-image3-label__text')
        lightCard('.section4-images-image3-back','.section4-images-image3-label__img')
    })

window.addEventListener('load', applySelectedBanner);
