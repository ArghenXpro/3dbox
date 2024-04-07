let btnRight = document.querySelector(".right");
let btnLeft = document.querySelector(".left");
let slides = document.querySelectorAll("img");
let i = 0;
let intervalId;

function startSlideShow() {
    intervalId = setInterval(() => {
        slides[i].classList.remove('block')
        i = (i + 1) % slides.length;
        slides[i].classList.add('block')
    }, 2000)
}

function showNextSlide() {
    slides[i].classList.remove('block')
    i = (i + 1) % slides.length;
    slides[i].classList.add('block')
}

function showPreviousSlide() {
    slides[i].classList.remove('block')
    i = (i - 1 + slides.length) % slides.length;
    slides[i].classList.add('block')
}

btnRight.onclick = function() {
    clearInterval(intervalId);
    showNextSlide();
    setTimeout(startSlideShow, 2000);
};

btnLeft.onclick = function() {
    clearInterval(intervalId);
    showPreviousSlide();
    setTimeout(startSlideShow, 2000);
};

startSlideShow();
