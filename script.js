// Smooth scrolling for navigation links
document.querySelectorAll('nav ul li a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        const href = this.getAttribute('href');

        // Only smooth-scroll for in-page links
        if (href.startsWith('#')) {
            e.preventDefault();
            const targetElement = document.getElementById(href.slice(1));
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop,
                    behavior: 'smooth'
                });
            }
        }
    });
});

// Lightbox effect for carousel images
document.addEventListener('click', (e) => {
    const image = e.target.closest('.carousel-images img');
    if (!image) return;

    const lightbox = document.createElement('div');
    lightbox.id = 'lightbox';
    lightbox.style.position = 'fixed';
    lightbox.style.top = '0';
    lightbox.style.left = '0';
    lightbox.style.width = '100%';
    lightbox.style.height = '100%';
    lightbox.style.backgroundColor = 'rgba(0, 0, 0, 0.8)';
    lightbox.style.display = 'flex';
    lightbox.style.alignItems = 'center';
    lightbox.style.justifyContent = 'center';
    lightbox.style.zIndex = '1000';

    const img = document.createElement('img');
    img.src = image.src;
    img.style.maxWidth = '90%';
    img.style.maxHeight = '90%';
    img.style.borderRadius = '8px';

    lightbox.appendChild(img);

    lightbox.addEventListener('click', () => {
        lightbox.remove();
    });

    document.body.appendChild(lightbox);
});

// Mobile-friendly navigation toggle
const navToggle = document.createElement('button');
navToggle.textContent = 'Menu';
navToggle.style.position = 'fixed';
navToggle.style.top = '10px';
navToggle.style.left = '10px';
navToggle.style.zIndex = '1001';
navToggle.style.background = '#444';
navToggle.style.color = '#fff';
navToggle.style.border = 'none';
navToggle.style.padding = '0.5rem 1rem';
navToggle.style.cursor = 'pointer';

document.body.appendChild(navToggle);

const nav = document.querySelector('nav ul');
nav.style.display = 'none';

navToggle.addEventListener('click', () => {
    nav.style.display = nav.style.display === 'none' ? 'flex' : 'none';
    nav.style.flexDirection = 'column';
    nav.style.position = 'absolute';
    nav.style.top = '50px';
    nav.style.background = '#333';
    nav.style.width = '100%';
    nav.style.padding = '1rem';
});

// =======================
// Carousel functionality
// =======================

function updateCarousel(carousel) {
    const images = carousel.querySelector('.carousel-images');
    const index = parseInt(carousel.dataset.index, 10);
    const width = carousel.clientWidth;

    images.style.transform = `translateX(-${index * width}px)`;
}

function nextSlide(button) {
    const carousel = button.closest('.carousel');
    const images = carousel.querySelectorAll('img');
    let index = parseInt(carousel.dataset.index, 10);

    index = (index + 1) % images.length;
    carousel.dataset.index = index;

    updateCarousel(carousel);
}

function prevSlide(button) {
    const carousel = button.closest('.carousel');
    const images = carousel.querySelectorAll('img');
    let index = parseInt(carousel.dataset.index, 10);

    index = (index - 1 + images.length) % images.length;
    carousel.dataset.index = index;

    updateCarousel(carousel);
}

// Keep carousels aligned on resize
window.addEventListener('resize', () => {
    document.querySelectorAll('.carousel').forEach(updateCarousel);
});
