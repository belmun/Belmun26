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
    
    // Registration box click handlers
    // TO ADD YOUR GOOGLE FORM LINKS LATER:
    // 1. Get your Google Form link (looks like: https://forms.gle/xxxxx)
    // 2. Replace the empty '' with your link in quotes like: 'https://forms.gle/xxxxx'
    const registrationLinks = {
        'secretariat-box': '', // Add Secretariat form link here when ready
        'chair-box': '',       // Add Chair form link here when ready
        'delegate-box': '',    // Add Delegate form link here when ready
        'volunteer-box': ''    // Add Volunteer form link here when ready
    };
    
    Object.keys(registrationLinks).forEach(boxId => {
        const box = document.getElementById(boxId);
        if (box) {
            box.style.cursor = 'pointer';
            box.addEventListener('click', function(e) {
                const url = registrationLinks[boxId];
                
                if (url && url.trim() !== '') {
                    // If you've added a Google Form link, it will open here
                    window.open(url, '_blank');
                } else {
                    // Show "stay tuned" message until you add the links
                    alert('Registration opens soon! 🎉\n\nStay tuned and follow us on Instagram @belmun26 for updates!\n\nWe\'ll announce when registration is live!');
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
