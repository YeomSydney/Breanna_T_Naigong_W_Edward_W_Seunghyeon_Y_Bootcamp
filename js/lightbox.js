(() => {

    console.log('lightbox function is linked!');

    const bioName = document.querySelector('.bio-name'),
        bioEmail = document.querySelector('.bio-email'),
        bioPhone = document.querySelector('.bio-phone'),
        bioInfo = document.querySelector('.bio-Info'),
        buttonList = document.querySelector('#buttonList'),

        lightBox = document.querySelector(".lightBox");


    // const name = [
    //     [`Naigong Wang`],
    //     [`Seunghyeon Yeom`],
    //     [`Edward Willems `],
    //     [`Breanna Trachsell`],
    // ]

    // const email = [
    //     [`Naigong Wang`],
    //     [`Seunghyeon Yeom`],
    //     [`Edward Willems `],
    //     [`Breanna Trachsell`],
    // ]


    // const bioInfoBox = [
    //     [`Naigong Wang`, `naigong@wwyt.ca`, ` 992-340-4938`, `url(images/about_page/001.jpg)`],
    //     [`Seunghyeon Yeom`, `hyeony@wwyt.ca`, ` 519-808-7147`, `url(images/about_page/002.jpg)`],
    //     [`Edward Willems `, `edwardw@wwyt.ca`, ` 519-657-1465 ext. 4`, `url(images/about_page/003.jpg)`],
    //     [`Breanna Trachsell`, `B_Trachsell@wwyt.ca`, `226-503-8653`, `url(images/about_page/004.jpg)`],
    // ];

    // function setMemberData(name, email, phone, img) {
    //     bioName.textContent = name;
    //     bioEmail.textContent = email;
    //     bioPhone.textContent = phone;
    //     document.querySelector("#portraitContainer").style.backgroundImage = url(img);
    // }


    function dynamicBio(event) {
        setMemberData(bioInfoBox[event.target.dataset.offset][0],
                bioInfoBox[event.target.dataset.offset][1],
                bioInfoBox[event.target.dataset.offset][2]),
            bioInfoBox[event.target.dataset.offset][3];

    }

    function popLightBox(event) {

        if (event.target.className.includes('hoverText')) {
            lightBox.classList.add('show-lightbox');
            lightBox.querySelector('.close').addEventListener('click', () => {

                lightBox.classList.remove('show-lightbox');

            })
        }

    }

    // buttonList.addEventListener("click", dynamicBio);
    buttonList.addEventListener('click', popLightBox);

})();