let slideIndex = 0;
showSlides();

function showSlides() {
    let slides = document.querySelectorAll('.slide');
    slides.forEach(slide => slide.style.display = 'none');

    slideIndex++;
    if (slideIndex > slides.length) {
        slideIndex = 1;
    }
    slides[slideIndex - 1].style.display = 'block';
    setTimeout(showSlides, 3000); // 3秒ごとに次の画像へ
}
function plusSlides(n) {
    showSlides(slideIndex += n, true);
}

function showSlides(n, userTriggered = false) {
    let slides = document.querySelectorAll('.slide');
    if (n === undefined) { 
        slideIndex++;
    } else {
        slideIndex = n;
    }

    if (slideIndex >= slides.length) { 
        slideIndex = 0 
    }
    if (slideIndex < 0) { 
        slideIndex = slides.length - 1 
    }

    slides.forEach(slide => slide.style.display = 'none');
    slides[slideIndex].style.display = 'block';

    if (!userTriggered) {
        setTimeout(() => showSlides(undefined, false), 3000); // 3秒ごとに次の画像へ
    }
}
