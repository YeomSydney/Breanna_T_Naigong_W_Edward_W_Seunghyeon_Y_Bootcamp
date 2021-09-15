(() => {

    console.log('lightbox function is linked!');

    const bioName = document.querySelector('.bio-name'),
        bioEmail = document.querySelector('.bio-email'),
        bioPhone = document.querySelector('.bio-phone'),
        bioInfo = document.querySelector('.bio-Info'),
        img = document.querySelector('#portraitContainer');


    buttonList = document.querySelector('#buttonList'),
        lightBox = document.querySelector(".lightBox");




    function popLightBox(event) {

        if (event.target.className.includes('hoverText')) {
            lightBox.classList.add('show-lightbox');



            lightBox.querySelector('.close').addEventListener('click', () => {

                lightBox.classList.remove('show-lightbox');

            })
        }

    }

    buttonList.addEventListener('click', popLightBox);


})();