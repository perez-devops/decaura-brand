// Custom Cursor
const cursor = document.querySelector('.cursor');
const hoverElements = document.querySelectorAll('a, button, input, select, textarea, .showcase-item, .cta-button, .morph-button, .team-member, .portfolio-item, .service-card');

document.addEventListener('mousemove', (e) => {
    if (cursor) {
        cursor.style.left = e.clientX + 'px';
        cursor.style.top = e.clientY + 'px';
    }
});

if (cursor) {
    hoverElements.forEach(el => {
        el.addEventListener('mouseenter', () => {
            cursor.classList.add('hover');
        });
        el.addEventListener('mouseleave', () => {
            cursor.classList.remove('hover');
        });
    });
}

// Parallax Effect on Hero Background (index.html)
const heroBackground = document.querySelector('.hero-background');
if (heroBackground) {
    window.addEventListener('scroll', () => {
        const scrolled = window.pageYOffset;
        if (scrolled < window.innerHeight) {
            heroBackground.style.transform = `translate(-50%, -50%) translateY(${scrolled * 0.5}px)`;
        }
    });
}

// Contact Form Handling (contact.html)
const form = document.querySelector('.contact-form');
if (form) {
    form.addEventListener('submit', (e) => {
        e.preventDefault();
        alert('Thank you for your message! We will get back to you soon.');
        form.reset();
    });
}

// Prevent cursor on mobile
if (window.innerWidth <= 768) {
    if (cursor) {
        cursor.style.display = 'none';
    }
    document.body.style.cursor = 'auto';
}
