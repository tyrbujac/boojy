/**
 * Boojy Suite Website - Main JavaScript
 * Handles navigation, form submission, and interactive elements
 */

// ===================================
// Navigation Menu Toggle (Mobile)
// ===================================
const navToggle = document.querySelector('.nav-toggle');
const navMenu = document.querySelector('.nav-menu');
const navLinks = document.querySelectorAll('.nav-menu a');

// Toggle mobile menu
navToggle.addEventListener('click', () => {
    navMenu.classList.toggle('active');

    // Animate hamburger icon
    const spans = navToggle.querySelectorAll('span');
    if (navMenu.classList.contains('active')) {
        spans[0].style.transform = 'rotate(45deg) translateY(10px)';
        spans[1].style.opacity = '0';
        spans[2].style.transform = 'rotate(-45deg) translateY(-10px)';
    } else {
        spans[0].style.transform = 'none';
        spans[1].style.opacity = '1';
        spans[2].style.transform = 'none';
    }
});

// Close menu when clicking a link
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        navMenu.classList.remove('active');
        const spans = navToggle.querySelectorAll('span');
        spans[0].style.transform = 'none';
        spans[1].style.opacity = '1';
        spans[2].style.transform = 'none';
    });
});

// ===================================
// Smooth Scrolling
// ===================================
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        const href = this.getAttribute('href');

        // Skip if href is just "#"
        if (href === '#') return;

        e.preventDefault();
        const target = document.querySelector(href);

        if (target) {
            const navHeight = document.querySelector('.navbar').offsetHeight;
            const targetPosition = target.offsetTop - navHeight - 20;

            window.scrollTo({
                top: targetPosition,
                behavior: 'smooth'
            });
        }
    });
});

// ===================================
// Navbar Background on Scroll
// ===================================
const navbar = document.querySelector('.navbar');
let lastScroll = 0;

window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;

    // Add shadow when scrolled
    if (currentScroll > 50) {
        navbar.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.1)';
    } else {
        navbar.style.boxShadow = 'none';
    }

    lastScroll = currentScroll;
});

// ===================================
// Email Notification Form
// ===================================
const notifyForm = document.getElementById('notifyForm');
const emailInput = document.getElementById('emailInput');

notifyForm.addEventListener('submit', async (e) => {
    e.preventDefault();

    const email = emailInput.value.trim();

    // Basic email validation
    if (!isValidEmail(email)) {
        showFormMessage('Please enter a valid email address.', 'error');
        return;
    }

    // Get the submit button
    const submitBtn = notifyForm.querySelector('.btn-primary');
    const originalText = submitBtn.textContent;

    // Show loading state
    submitBtn.textContent = 'Submitting...';
    submitBtn.disabled = true;

    // Simulate form submission (replace with actual API call)
    // For now, we'll just show a success message
    setTimeout(() => {
        // TODO: Replace with actual API endpoint
        // Example: await fetch('/api/subscribe', { method: 'POST', body: JSON.stringify({ email }) });

        showFormMessage('🎉 Success! You\'ll be notified when preview apps launch.', 'success');
        emailInput.value = '';
        submitBtn.textContent = originalText;
        submitBtn.disabled = false;

        // Log to console for now (remove in production)
        console.log('Email submitted:', email);
    }, 1000);
});

// Email validation helper
function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

// Form message display
function showFormMessage(message, type) {
    // Remove existing message if any
    const existingMessage = document.querySelector('.form-message');
    if (existingMessage) {
        existingMessage.remove();
    }

    // Create message element
    const messageEl = document.createElement('div');
    messageEl.className = `form-message form-message-${type}`;
    messageEl.textContent = message;
    messageEl.style.cssText = `
        margin-top: 1rem;
        padding: 1rem;
        border-radius: 8px;
        text-align: center;
        font-weight: 500;
        animation: slideIn 0.3s ease;
    `;

    if (type === 'success') {
        messageEl.style.background = '#D1FAE5';
        messageEl.style.color = '#065F46';
    } else {
        messageEl.style.background = '#FEE2E2';
        messageEl.style.color = '#991B1B';
    }

    // Insert after form
    notifyForm.parentNode.insertBefore(messageEl, notifyForm.nextSibling);

    // Auto-remove after 5 seconds
    setTimeout(() => {
        messageEl.style.animation = 'slideOut 0.3s ease';
        setTimeout(() => messageEl.remove(), 300);
    }, 5000);
}

// Add CSS animations
const style = document.createElement('style');
style.textContent = `
    @keyframes slideIn {
        from {
            opacity: 0;
            transform: translateY(-10px);
        }
        to {
            opacity: 1;
            transform: translateY(0);
        }
    }

    @keyframes slideOut {
        from {
            opacity: 1;
            transform: translateY(0);
        }
        to {
            opacity: 0;
            transform: translateY(-10px);
        }
    }
`;
document.head.appendChild(style);

// ===================================
// Intersection Observer for Animations
// ===================================
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe app cards, value cards, and timeline items
const animatedElements = document.querySelectorAll('.app-card, .value-card, .timeline-item');
animatedElements.forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(20px)';
    el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(el);
});

// ===================================
// Planet Hover Effects
// ===================================
const appCards = document.querySelectorAll('.app-card');

appCards.forEach(card => {
    const planet = card.querySelector('.planet-icon');

    card.addEventListener('mouseenter', () => {
        planet.style.animationPlayState = 'paused';
        planet.style.transform = 'scale(1.1)';
    });

    card.addEventListener('mouseleave', () => {
        planet.style.animationPlayState = 'running';
        planet.style.transform = 'scale(1)';
    });
});

// ===================================
// Scroll-based Parallax for Hero Planets
// ===================================
const heroPlanets = document.querySelectorAll('.hero-planets .planet');

window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;

    heroPlanets.forEach((planet, index) => {
        const speed = 0.5 + (index * 0.1);
        const yPos = -(scrolled * speed);
        planet.style.transform = `translateY(${yPos}px)`;
    });
});

// ===================================
// Add Sparkle Effect to Cursor (Optional Enhancement)
// ===================================
function createSparkle(x, y) {
    const sparkle = document.createElement('div');
    sparkle.className = 'cursor-sparkle';
    sparkle.style.cssText = `
        position: fixed;
        left: ${x}px;
        top: ${y}px;
        width: 4px;
        height: 4px;
        background: #F59E0B;
        border-radius: 50%;
        pointer-events: none;
        z-index: 9999;
        animation: sparkleFloat 1s ease-out forwards;
    `;

    document.body.appendChild(sparkle);

    setTimeout(() => sparkle.remove(), 1000);
}

// Add sparkle animation CSS
const sparkleStyle = document.createElement('style');
sparkleStyle.textContent = `
    @keyframes sparkleFloat {
        from {
            opacity: 1;
            transform: translateY(0) scale(1);
        }
        to {
            opacity: 0;
            transform: translateY(-30px) scale(0);
        }
    }
`;
document.head.appendChild(sparkleStyle);

// Optional: Add sparkles on mouse move over hero section (can be disabled if too much)
let lastSparkleTime = 0;
const sparkleInterval = 100; // milliseconds between sparkles

document.querySelector('.hero').addEventListener('mousemove', (e) => {
    const now = Date.now();
    if (now - lastSparkleTime > sparkleInterval) {
        createSparkle(e.clientX, e.clientY);
        lastSparkleTime = now;
    }
});

// ===================================
// Console Easter Egg
// ===================================
console.log('%c✨ Boojy Suite ✨', 'color: #5B21B6; font-size: 24px; font-weight: bold;');
console.log('%cCreativity Without Limits', 'color: #7C3AED; font-size: 16px;');
console.log('%cInterested in contributing? Check out our GitHub: https://github.com/boojyorg', 'color: #6B7280; font-size: 12px;');

// ===================================
// Performance: Debounce Scroll Events
// ===================================
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// Apply debounce to scroll handlers if needed
// (Current implementation is lightweight enough, but keep this for future optimization)
