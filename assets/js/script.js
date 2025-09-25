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

    // Modern skill card animations
    const skillFills = document.querySelectorAll('.skill-fill');
    const skillCards = document.querySelectorAll('.skill-card');
    
    // Function to animate skill bars
    function animateSkillBars() {
        skillFills.forEach((fill, index) => {
            setTimeout(() => {
                fill.classList.add('animate');
            }, index * 200); // Stagger animations by 200ms
        });
    }
    
    // Function to add hover effects to skill cards
    function addSkillCardHoverEffects() {
        skillCards.forEach(card => {
            card.addEventListener('mouseenter', function() {
                this.style.transform = 'translateY(-8px) scale(1.02)';
                this.style.borderColor = '#10b981';
                this.style.boxShadow = '0 15px 40px rgba(16, 185, 129, 0.3)';
            });
            
            card.addEventListener('mouseleave', function() {
                this.style.transform = 'translateY(0) scale(1)';
                this.style.borderColor = '#3b82f6';
                this.style.boxShadow = '0 8px 25px rgba(59, 130, 246, 0.15)';
            });
        });
    }
    
    // Intersection Observer for skill bars
    const skillObserver = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                animateSkillBars();
                skillObserver.unobserve(entry.target); // Only animate once
            }
        });
    }, {
        threshold: 0.2,
        rootMargin: '0px 0px -50px 0px'
    });

    // Observe the skills section
    const skillsSection = document.querySelector('.skills-section');
    if (skillsSection) {
        skillObserver.observe(skillsSection);
        addSkillCardHoverEffects();
    }

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

    // Gaming atmosphere effects
    function createFloatingParticles() {
        const particles = [];
        const particleCount = 15;
        
        for (let i = 0; i < particleCount; i++) {
            const particle = document.createElement('div');
            const colors = ['rgba(59, 130, 246, 0.4)', 'rgba(16, 185, 129, 0.4)', 'rgba(245, 158, 11, 0.4)'];
            const randomColor = colors[Math.floor(Math.random() * colors.length)];
            
            particle.className = 'floating-particle';
            particle.style.cssText = `
                position: fixed;
                width: 2px;
                height: 2px;
                background: ${randomColor};
                border-radius: 50%;
                pointer-events: none;
                z-index: 1;
                left: ${Math.random() * 100}vw;
                top: ${Math.random() * 100}vh;
                animation: float ${10 + Math.random() * 15}s linear infinite;
                box-shadow: 0 0 5px ${randomColor};
            `;
            document.body.appendChild(particle);
            particles.push(particle);
        }
    }

    // Add floating particles CSS
    const style = document.createElement('style');
    style.textContent = `
        @keyframes float {
            0% {
                transform: translateY(100vh) rotate(0deg);
                opacity: 0;
            }
            10% {
                opacity: 1;
            }
            90% {
                opacity: 1;
            }
            100% {
                transform: translateY(-100vh) rotate(360deg);
                opacity: 0;
            }
        }
    `;
    document.head.appendChild(style);

    // Initialize floating particles
    createFloatingParticles();

    // (Duplicate block removed)
});

// Utility functions
function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}
