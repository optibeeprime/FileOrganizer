let slideIndex = 1;
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

function automaticSlideshow() {
    slideIndex++;
    let slides = document.querySelectorAll('.slide');
    if (slideIndex > slides.length) { slideIndex = 1; }
    slides.forEach(slide => slide.style.display = 'none');
    slides[slideIndex - 1].style.display = 'block';
    setTimeout(automaticSlideshow, 3000);
}

automaticSlideshow();
