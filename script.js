let slideIndex = 0;
let autoSlideTimeout;

function showSlides(n, userTriggered = false) {
    let slides = document.querySelectorAll('.slide');

    if (n !== undefined) {
        slideIndex = n;
    } else {
        slideIndex++;
    }

    if (slideIndex >= slides.length) {
        slideIndex = 0;
    }

    if (slideIndex < 0) {
        slideIndex = slides.length - 1;
    }

    slides.forEach(slide => slide.style.display = 'none');
    slides[slideIndex].style.display = 'block';

    if (userTriggered) {
        clearTimeout(autoSlideTimeout);
    }

    autoSlideTimeout = setTimeout(() => showSlides(undefined, false), 3000); // 3秒ごとに次の画像へ
}

function plusSlides(n) {
    showSlides(slideIndex + n, true);
}

// 初期化処理を追加
document.addEventListener('DOMContentLoaded', () => {
    showSlides(slideIndex, false);
});
