// Smooth scrolling for navigation links
document.querySelectorAll('nav ul li a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const targetId = this.getAttribute('href').slice(1);
        const targetElement = document.getElementById(targetId);

        window.scrollTo({
            top: targetElement.offsetTop,
            behavior: 'smooth'
        });
    });
});

// Lightbox effect for images
document.querySelectorAll('.gallery img').forEach(image => {
    image.addEventListener('click', () => {
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
        lightbox.appendChild(img);

        lightbox.addEventListener('click', () => {
            lightbox.remove();
        });

        document.body.appendChild(lightbox);
    });
});

// Mobile-friendly navigation toggle (optional)
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
