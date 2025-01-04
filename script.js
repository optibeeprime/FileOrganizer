let slideIndex = 0;
showSlides();

function showSlides() {
    let slides = document.querySelectorAll('.slide');
    slides.forEach((slide, index) => {
        slide.style.display = 'none';
        slide.style.transform = 'translateX(0)';
    });

    slideIndex++;
    if (slideIndex > slides.length) {
        slideIndex = 1;
    }
    slides[slideIndex - 1].style.display = 'block';
    setTimeout(showSlides, 3000); // 3秒ごとに次の画像へ
}
function plusSlides(n) {
    let slides = document.querySelectorAll('.slide');
    slides.forEach((slide, index) => {
        slide.style.display = 'none';
        slide.style.transform = 'translateX(0)';
    });

    slideIndex += n;
    if (slideIndex > slides.length) {
        slideIndex = 1;
    }
    if (slideIndex < 1) {
        slideIndex = slides.length;
    }

    slides[slideIndex - 1].style.display = 'block';
    slides[slideIndex - 1].style.transform = n > 0 ? 'translateX(100%)' : 'translateX(-100%)';
    setTimeout(() => {
        slides[slideIndex - 1].style.transform = 'translateX(0)';
    }, 1); // アニメーション
}
