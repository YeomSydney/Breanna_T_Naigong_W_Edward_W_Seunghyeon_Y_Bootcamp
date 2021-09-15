(() => {

    console.log('lightbox function is linked!');

    const bioName = document.querySelector('.bio-name'),
        portraitContainer = document.querySelector('#portraitContainer'),
        bioEmail = document.querySelector('.bio-email'),
        bioPhone = document.querySelector('.bio-phone'),
        bioInfo = document.querySelector('.bio-Info'),
        buttonList = document.querySelector('#buttonList'),
        developer = document.querySelectorAll('.hoverText'),

        lightBox = document.querySelector(".lightBox");


    const bioInfoBox = [
        [`Naigong Wang`, `naigong@wwyt.ca`, ` 992-340-4938`, `Hi, I’m Naigong Wang, an Web Designer and Front- End Developer，also a co-founder of WWYT Agency. Design is my main passion in life. I always wanted to be burned out by passion. I love design, colours, typography and geometric patterns. l enjoy taking
        complex problems and turning them into simple and beautiful interface designs. I also love the logic and structure of coding and always strive to write elegant and efficient code, whether it be HTML, CSS or JS. In my free
        time, I enjoy photographing, painting, traveling, cooking and meeting new people. I love to noticing and observing the details of life and use it in my design projects. I’d like to build on my knowledge on the different
        area of design. You can find me in all social networks. I’m easy for work and collaborations. If you’d like to discuss and work for projects, please feel free to contact me. I’m happy to hear from you.
    `],
        [`Seunghyeon Yeom`, `hyeony@wwyt.ca`, ` 519-808-7147`, `Hi, it is Seunghyeon Yeom, Web developer as well as a Graphic designer. Also, I'm the one of co-founders of WWYT Agency.

I always enjoy sharing ideas and finding the best ways with my clients as well as our team members. Also, I'm absorbed into designing and all designing processes, such as deciding font types, photos or illustrations, and matching colours. In my opinion, designing is another way to communicate with people through virtual materials such as images or videos. As I mentioned, I like finding the most suitable methods to communicate with clients and team members. In addition, 3D designing is what I would like to do best. Also, I love realizing great designs by coding. It makes me feel fulfilled and accomplished, and it is always worthwhile even if it takes much time. I can deal with HTML, CSS, and JavaScript. I'm studying for other programming languages such as Python or Java for better works. When I'm free, I usually take pictures or videos and edit them. Also, I spend time looking around different design works, especially 3d designing works. I'm trying to create a short video with 3d designing works like a short anime. You can reach out to me easily through email or social media. I'm waiting for you all the time!
Thank you for reading.`],
        [`Edward Willems `, `edwardw@wwyt.ca`, ` 519-657-1465 ext. 4`, `Hello! My name is Edward Willems, and I am a web developer and artist, as well as a co-founder of WWYT.

My main focus when developing sites for our customers is providing an efficient and enjoyable user experience. I want to make websites that are easy to use and understand, that invite users to stay a while and explore! I use my artistic background to build engaging web designs with my team: integrating brand colours into the site to build recognition, using images to draw the viewer in, and arranging everything to lead the user from one important piece to another. I want viewers to spend as much time on your site as they need to, to learn all about your product or business, and to enjoy the time they spend there. I love using JavaScript and CSS to make every element of a site interactive and entertaining, to keep viewers engaged in the flow of your brand. If you want your site to move, dance, transform, and react, then I’m your developer!
I am ready and eager to hear about what you want to make your site fun and engaging, to make your site easy and inviting, and to bring all of it to life. We are all very excited to start working with you!
`],
        [`Breanna Trachsell`, `B_Trachsell@wwyt.ca`, `226-503-8653`, `Hi! I am Breanna Trachsell, graphic designer, front end web developer, and soon to be college drop out. I make up one fourth of the wonderful team of minds that founded WWYT.

I am passionate about design and am looking forward to taking your ideas and working with them to build something beautiful. Designing is almost like a puzzle, taking the themes and motifs that work for your brand and fitting them into a functional, accessible and unique website. Coding is also like a puzzle, finding the right lines of code that fit together to produce visuals on a screen.
Turns out I love puzzles.

If you're thinking you need  a website and you're thinking you need something sleek, professional, and functional, but still full of life and personality, I am what you're thinking. Reach out to me via email and we can start working together right away!`],
    ];

    function dynamicBio(event) {
      let targetDeveloper = this.className.split(" ")[1];

      portraitContainer.style.backgroundImage = `url(../Breanna_T_Naigong_W_Edward_W_Seunghyeon_Y_Bootcamp/images/about_page/portrait_${targetDeveloper}.jpg)`;
      bioName.textContent = bioInfoBox[this.dataset.offset][0];
      bioEmail.textContent = bioInfoBox[this.dataset.offset][1];
      bioPhone.textContent = bioInfoBox[this.dataset.offset][2];
      bioInfo.textContent = bioInfoBox[this.dataset.offset][3];
    }

    // function setMemberData(name, email, phone, img) {
    //     bioName.textContent = name;
    //     bioEmail.textContent = email;
    //     bioPhone.textContent = phone;
    //     document.querySelector("#portraitContainer").style.backgroundImage = url(img);
    // }

    //
    // function dynamicBio(event) {
    //     setMemberData(bioInfoBox[event.target.dataset.offset[0]],
    //             bioInfoBox[event.target.dataset.offset[1]],
    //             bioInfoBox[event.target.dataset.offset[2]]),
    //         bioInfoBox[event.target.dataset.offset[3]];
    //
    // }

    function popLightBox(event) {

        if (event.target.className.includes('hoverText')) {
            lightBox.classList.add('show-lightbox');
            lightBox.querySelector('.close').addEventListener('click', () => {
                lightBox.classList.remove('show-lightbox');
            })
        }

    }

    // buttonList.addEventListener("click", dynamicBio);
    developer.forEach(face => {
      face.addEventListener('click', popLightBox);
    });
    developer.forEach(face => {
      face.addEventListener('click', dynamicBio);
    });

})();
