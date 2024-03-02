document.addEventListener('DOMContentLoaded', function () {
    const arrowContainers = document.querySelectorAll('.sliderz__card-arrows');
    const slides = document.querySelectorAll('.sliderz__card');

    let currentSlide = 0;

    function showSlide(index) {
        slides.forEach(slide => {
            slide.style.display = 'none';
        });
        slides[index].style.display = 'block';

        const counter = document.querySelector('.sliderz__card-counter');
        counter.textContent = `${index + 1 < 10 ? '0' : ''}${index + 1}/0${slides.length}`;
    }

    showSlide(currentSlide);

    arrowContainers.forEach(container => {
        const leftArrow = container.querySelector('#arr-left');
        const rightArrow = container.querySelector('#arr-right');

        leftArrow.addEventListener('click', function () {
            currentSlide = (currentSlide - 1 + slides.length) % slides.length;
            showSlide(currentSlide);
        });

        rightArrow.addEventListener('click', function () {
            currentSlide = (currentSlide + 1) % slides.length;
            showSlide(currentSlide);
        });
    });

    setInterval(function () {
        currentSlide = (currentSlide + 1) % slides.length;
        showSlide(currentSlide);
    }, 5000);
});