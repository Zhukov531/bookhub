let currentIndex = 0;

document.querySelector('.carousel-control-prev').addEventListener('click', () => {
    showSlide(currentIndex - 1);
});

document.querySelector('.carousel-control-next').addEventListener('click', () => {
    showSlide(currentIndex + 1);
});

function showSlide(index) {
    const slides = document.querySelectorAll('.carousel-item');
    if (index >= slides.length) {
        currentIndex = 0;
    } else if (index < 0) {
        currentIndex = slides.length - 1;
    } else {
        currentIndex = index;
    }

    document.querySelector('.carousel-inner').style.transform = `translateX(-${currentIndex * 100}%)`;
}