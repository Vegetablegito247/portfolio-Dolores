let slides = document.querySelectorAll('.slides');
let nextBtn = document.querySelector('.fa-chevron-right');
let prevBtn = document.querySelector('.fa-chevron-left');

let currentSlide = 0;
let maxSlide = slides.length - 1;

slides.forEach((value, index) => {
    value.style.transform = `translateX(${index * 100}%)`;
});

nextBtn.addEventListener('click', () => {
    if (currentSlide === maxSlide) {
        currentSlide = 0;
    }
    else {
        currentSlide++;
    };
    slides.forEach((value, index) => {
        value.style.transform = `translateX(${100 * (index - currentSlide)}%)`;
    });
});

prevBtn.addEventListener('click', () => {
    if (currentSlide === 0) {
        currentSlide = maxSlide;
    }
    else {
        currentSlide--;
    };

    slides.forEach((value, index) => {
        value.style.transform = `translateX(${100 * (index - currentSlide)}%)`;
    });
})