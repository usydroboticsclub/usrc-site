Array.from(document.querySelectorAll(".sponsorbtn")).forEach(i => i.addEventListener("click", () => {
    window.open("mailto:usydroboticsclub@gmail.com?subject=Propsective Sponsorship&body=Hi, I'd like to sponsor the robotics club! Let's get in touch.");
  }))
  
  Array.from(document.querySelectorAll(".involvebtn")).forEach(i => i.addEventListener("click", () => {
    window.open("mailto:usydroboticsclub@gmail.com?subject=Sign me up!&body=Hi, I'd like to be added to the USRC mailing list! Thanks!");
  }))

  
function scrollVideo() {
    var video = $('#v0').get(0),
        videoLength = video.duration,
        scrollPosition = $(document).scrollTop();
    var half_height = $(window).height() / 2;

    video.currentTime = (scrollPosition / ($(document).height() - $(window).height() / 2)) * videoLength;
}

$(window).scroll(function (e) {
    scrollVideo();
});



var frameNumber = 0, // start video at frame 0
    // lower numbers = faster playback
    playbackConst = 800,
    // get page height from video duration
    setHeight = document.getElementById("set-height"),
    // select video element         
    vid = document.getElementById('v0');
// var vid = $('#v0')[0]; // jquery option

// dynamically set the page height according to video length
vid.addEventListener('loadedmetadata', function () {
    setHeight.style.height = Math.floor(vid.duration) * playbackConst + "px";
});


// Use requestAnimationFrame for smooth playback
function scrollPlay() {
    var frameNumber = window.pageYOffset / playbackConst;
    vid.currentTime = frameNumber;
    window.requestAnimationFrame(scrollPlay);
}

window.requestAnimationFrame(scrollPlay);

console.log(window.pageYOffset);
    // console.log(setHeight.style.height);

