let slideIndex = 1;  // 初期スライドを1にセット
showSlides(slideIndex);

function plusSlides(n) {
    showSlides(slideIndex += n);
}

function showSlides(n) {
    let slides = document.querySelectorAll('.slide');
    if (n > slides.length) {
        slideIndex = 1;
    }
    if (n < 1) {
        slideIndex = slides.length;
    }
    slides.forEach(slide => slide.style.display = 'none');
    slides[slideIndex - 1].style.display = 'block';
}

// 自動スライド切り替えを維持したい場合
function automaticSlideshow() {
    slideIndex++;
    if (slideIndex > slides.length) { slideIndex = 1; }
    slides.forEach(slide => slide.style.display = 'none');
    slides[slideIndex - 1].style.display = 'block';
    setTimeout(automaticSlideshow, 3000); // 3秒ごとに
}

automaticSlideshow(); // 自動スライドショー開始
