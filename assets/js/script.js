// Theme toggle removed, always dark mode

// Smooth scrolling for navigation links
document.addEventListener('DOMContentLoaded', function() {
    // Initialize theme
    initTheme();
    // Navigation smooth scrolling
    const navLinks = document.querySelectorAll('.nav-link');
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            
            if (targetSection) {
                const offsetTop = targetSection.offsetTop - 70; // Account for fixed nav
                window.scrollTo({
                    top: offsetTop,
                    behavior: 'smooth'
                });
            }
        });
    });

    // Hero CTA smooth scrolling
    const heroCta = document.querySelectorAll('.hero-cta a');
    heroCta.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            
            if (targetSection) {
                const offsetTop = targetSection.offsetTop - 70;
                window.scrollTo({
                    top: offsetTop,
                    behavior: 'smooth'
                });
            }
        });
    });

    // Navbar background on scroll (pixel art style)
    const nav = document.querySelector('.nav');
    window.addEventListener('scroll', function() {
        if (window.scrollY > 50) {
            nav.style.boxShadow = '0 8px 16px rgba(0, 0, 0, 0.7)';
        } else {
            nav.style.boxShadow = '0 4px 8px rgba(0, 0, 0, 0.5)';
        }
    });

    // Intersection Observer for scroll animations
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate');
            }
        });
    }, observerOptions);

    // Observe elements for animation
    const animateElements = document.querySelectorAll('.project-card, .small-project, .contact-item');
    animateElements.forEach(el => {
        observer.observe(el);
    });

    // Pixel art style animations & project page navigation
    const projectCards = document.querySelectorAll('.project-card');
    // Only one declaration of projectPages
    const projectPages = [
        'ecostate.html',
        'solid-plane.html',
        'temporal-warfare.html',
        'car-of-cube.html',
        'developers-story.html',
        'random-key.html',
        'online-tank2d.html'
    ];
    projectCards.forEach((card, idx) => {
        // Animation
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'scale(1.05)';
            this.style.borderColor = 'var(--accent-primary)';
        });
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'scale(1)';
            this.style.borderColor = 'var(--border-color)';
        });
        // Page navigation
        card.style.cursor = 'pointer';
        card.addEventListener('click', function(e) {
            if (e.target.closest('.project-link')) return;
            if (projectPages[idx]) {
                window.location.href = projectPages[idx];
            }
        });
    });


    // Pixel art style button effects
    const buttons = document.querySelectorAll('.btn, .nav-link, .social-link');
    buttons.forEach(button => {
        button.addEventListener('click', function(e) {
            this.style.transform = 'scale(0.95)';
            setTimeout(() => {
                this.style.transform = 'scale(1)';
            }, 100);
        });
    });

    // (Duplicate block removed)
});

// Utility functions
function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}
