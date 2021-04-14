const sliderLine = document.querySelector('.slider-line');
const nextButton = document.querySelector('.button-next');
const prevButton = document.querySelector('.button-prev');

let offset = 0;

nextButton.addEventListener('click', showNextSlide)
prevButton.addEventListener('click', showPrevSlide)

function showNextSlide() {
    offset += 920
    if(offset > 2760) {
        offset = 0
    }
    sliderLine.style.left = -offset + 'px'
}

function showPrevSlide() {
    offset -= 920
    if(offset < 0) {
        offset = 2760
    }
    sliderLine.style.left = -offset + 'px'
}