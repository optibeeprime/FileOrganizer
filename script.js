let slideIndex = 0;
let autoSlideTimeout;

function showSlides(n, userTriggered = false) {
    const slides = document.querySelectorAll('.slide');

    if (n !== undefined) {
        slideIndex = n;
    } else {
        slideIndex++;
    if (slideIndex >= slides.length) {
        slideIndex = 0;
    }

    if (slideIndex < 0) {
        slideIndex = slides.length - 1;
    }

    slides.forEach(slide => slide.style.display = 'none');
    slides[slideIndex].style.display = 'block';

    if (!userTriggered) {
        autoSlideTimeout = setTimeout(() => showSlides(), 3000); // 3秒ごとに次の画像へ
    }
}

function plusSlides(n) {
    clearTimeout(autoSlideTimeout);
    showSlides(slideIndex + n, true);
}

// 初期化処理
document.addEventListener('DOMContentLoaded', () => {
    showSlides(slideIndex, false);
});
