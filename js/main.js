(() => {
    // NAME VARIABLES //
    console.log('JS is linked!');
    (() => {

        const burger = document.querySelector(".burger");
        const nav = document.querySelector(".nav-links");
        const navLinks = document.querySelectorAll(".nav-links li");

        const slideImageBox = document.querySelectorAll(".portfolioShowing");
        const slideContainer = document.querySelector(".mySlides");
        const prevBtn = document.querySelector(".previous");
        const nextBtn = document.querySelector(".next");
        const navDots = document.querySelector(".navigation-dots");

        let numberOfImages = slideImageBox.length;
        let slideWidth = slideImageBox[0].clientWidth;
        let currentSlide = 0;
        


        // Burger Nav

        burger.addEventListener("click", () => {
            //Toggle Nav
            nav.classList.toggle("nav-active");

            //Animate Links
            navLinks.forEach((link, index) => {
                if (link.style.animation) {
                    link.style.animation = ""
                } else {
                    link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.5}s`;
                }
            });
            //Burger Animation
            burger.classList.toggle("toggle");
        });





        //Set Up The Slider

        /*
        
        slideImageBox[1] = 1380
        slideImageBox[2] = 2760
        
        */
        
        function init() {
            slideImageBox.forEach((img, i) => {
                img.style.left = i * 1380 + "px";
            });

            slideImageBox[0].classList.add("active");

            navigationDots();
        }

        init();

        // Navigation Dots

        function navigationDots() {
            for (let i = 0; i < numberOfImages; i++){
                const dot = document.createElement("div");
                dot.classList.add("single-dot");
                navDots.appendChild(dot);
            }

            navDots.children[0].classList.add("active");
        }

        // function animateBanner(event) {
        //     if (event.target.className.includes('portfolioShowing')) {
        //         let multiplier = event.target.dataset.offset,
        //             offsetWidth = 1380;
    
        //         // 0 ,600, 1200,1800px depending on the math
        //         slideImageBox.style.right = `${multiplier * offsetWidth}px`;
        //     }
        // }

        //Buttons

        nextBtn.addEventListener ("click", () => {
            currentSlide++;
            goToSlide(currentSlide);
        });

        function goToSlide(slideNumber) {
            slideContainer.style.transform = "translateX(-" + slideWidth * slideNumber + "px)";
        };

        // nextBtn.addEventListener("click", animateBanner);

    })();

    // FUNCTIONS //



    // EVENT LISTENERS //



})();