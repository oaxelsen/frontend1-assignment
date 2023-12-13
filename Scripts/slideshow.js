let slideIndex = 0;

showSlides();

function showSlides() {
    const slides = document.querySelectorAll('.slide'); // Sparar ner alla .slide-klasser i en const variabel

    // Gömmer alla bilder
    slides.forEach(slide => {
        slide.classList.remove('active');
    });

    // Byter till nästa bild och startar om när slideIndex når max antalet bilder i bildspelet
    slideIndex++;
    if (slideIndex > slides.length) {
        slideIndex = 1;
    }

    // Visar nuvarande bild
    slides[slideIndex - 1].classList.add('active');

    // Kallar funktionen varje 5 sek
    setTimeout(showSlides, 5000);
}