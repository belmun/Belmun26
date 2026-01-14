/* BELMUN 2026 - JavaScript */

document.addEventListener('DOMContentLoaded', function() {
    const mobileMenuToggle = document.getElementById('mobileMenuToggle');
    const navLinks = document.getElementById('navLinks');
    
    // Mobile menu toggle
    if (mobileMenuToggle) {
        mobileMenuToggle.addEventListener('click', function() {
            navLinks.classList.toggle('active');
            this.classList.toggle('active');
        });
    }
    
    // Close mobile menu when link clicked
    const navItems = navLinks.querySelectorAll('a');
    navItems.forEach(item => {
        item.addEventListener('click', function() {
            if (window.innerWidth <= 768) {
                navLinks.classList.remove('active');
                if (mobileMenuToggle) {
                    mobileMenuToggle.classList.remove('active');
                }
            }
        });
    });
    
    // Hero slideshow
    const slides = document.querySelectorAll('.hero-slide');
    if (slides.length > 0) {
        let currentSlide = 0;
        
        function nextSlide() {
            slides[currentSlide].classList.remove('active');
            currentSlide = (currentSlide + 1) % slides.length;
            slides[currentSlide].classList.add('active');
        }
        
        setInterval(nextSlide, 5000);
    }
    
    // Registration links - UPDATE THESE WITH YOUR GOOGLE FORMS
    const registrationLinks = {
        'secretariat-link': '', // Add your form URL here
        'chair-link': '',
        'volunteer-link': '',
        'delegate-link': ''
    };
    
    Object.keys(registrationLinks).forEach(linkId => {
        const element = document.getElementById(linkId);
        if (element) {
            element.addEventListener('click', function(e) {
                const url = registrationLinks[linkId];
                
                if (url && url.trim() !== '') {
                    window.open(url, '_blank');
                } else {
                    e.preventDefault();
                    alert('Registration form coming soon! Please check back later or contact us at belmun26@gmail.com');
                }
            });
        }
    });
    
    // Logo error handling
    const logoImage = document.getElementById('logoImage');
    if (logoImage) {
        logoImage.addEventListener('error', function() {
            this.style.display = 'none';
        });
    }
});

// Smooth scrolling
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Navbar scroll effect
window.addEventListener('scroll', function() {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        navbar.style.boxShadow = '0 4px 20px rgba(0, 0, 0, 0.5)';
    } else {
        navbar.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.3)';
    }
});

console.log('BELMUN 2026 - Website loaded successfully!');
