(() => {

    console.log('video popup function is linked!');
    // FOR VIDEO POP UP
    const videoButton = document.querySelector(".videoButton");
    const videoClose = document.querySelector(".videoClose");
    const videoLightBox = document.querySelector(".videoLightBox");
    const video = document.querySelector("video");

    const playButton = document.querySelector(".playButton");
    const pauseButton = document.querySelector(".pauseButton");
    const rewindButton = document.querySelector(".rewindButton");
    let volume = document.querySelector("#volume-control");

    // function popLightBox

    videoButton.addEventListener('click', () => {
        videoLightBox.style.visibility = "visible";
        videoLightBox.style.opacity = 1;
    });

    videoClose.addEventListener('click', () => {
        videoLightBox.style.visibility = "hidden";
        videoLightBox.style.opacity = 0;

        video.pause();
        video.currentTime = 0;
    });


    function playVideo() {

        video.play();
        console.log('You play the video!');

    }

    function stopVideo() {
        video.pause();
        console.log('You pause the video!');
    }

    function rewindVideo() {

        video.pause();
        video.currentTime = 0;
        console.log('You rewind the video!');

    }

    volume.addEventListener("change", function(e) {
        video.volume = e.currentTarget.value / 100;
    })


    playButton.addEventListener("click", playVideo);
    pauseButton.addEventListener("click", stopVideo);
    rewindButton.addEventListener("click", rewindVideo);









})();