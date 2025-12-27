// Theme toggle removed, always dark mode

// Initialize iframes to ensure they load properly
function initIframes() {
    const iframes = document.querySelectorAll('.project-iframe');
    
    iframes.forEach((iframe, index) => {
        // Add a small delay to ensure proper loading
        setTimeout(() => {
            // Force reload the iframe
            const src = iframe.src;
            iframe.src = '';
            iframe.src = src;
            
            // Add load event listener
            iframe.addEventListener('load', function() {
                console.log(`Iframe ${index + 1} loaded successfully`);
            });
            
            // Add error event listener
            iframe.addEventListener('error', function() {
                console.log(`Iframe ${index + 1} failed to load`);
                // Retry loading after 2 seconds
                setTimeout(() => {
                    iframe.src = src;
                }, 2000);
            });
        }, index * 100); // Stagger the loading
    });
}

// Smooth scrolling for navigation links
document.addEventListener('DOMContentLoaded', function() {
    // Initialize theme
    initTheme();
    
    // Initialize iframes
    initIframes();
    // Navigation smooth scrolling
    const navLinks = document.querySelectorAll('.nav-link');
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            
            if (targetSection) {
                // Account for fixed nav - different heights on mobile
                const navHeight = window.innerWidth <= 480 ? 55 : (window.innerWidth <= 768 ? 60 : 70);
                const offsetTop = targetSection.offsetTop - navHeight;
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
                // Account for fixed nav - different heights on mobile
                const navHeight = window.innerWidth <= 480 ? 55 : (window.innerWidth <= 768 ? 60 : 70);
                const offsetTop = targetSection.offsetTop - navHeight;
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

    // Modern project card interactions
    const modernCards = document.querySelectorAll('.modern-card');
    
    modernCards.forEach(card => {
        // For iframe projects, add click event to the card (not iframe area)
        if (card.classList.contains('iframe-project')) {
            card.addEventListener('click', function(e) {
                // Don't trigger if clicking on iframe or iframe container
                if (e.target.closest('.project-iframe-container') || e.target.closest('.project-iframe')) {
                    return;
                }
                
                // Find the project content link and click it
                const projectLink = card.querySelector('.project-content');
                if (projectLink) {
                    projectLink.click();
                }
            });
        }
    });

    // Legacy project cards (if any remain)
    const legacyCards = document.querySelectorAll('.project-card:not(.modern-card):not(.iframe-project)');
    legacyCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'scale(1.05)';
            this.style.borderColor = 'var(--accent-primary)';
        });
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'scale(1)';
            this.style.borderColor = 'var(--border-color)';
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
