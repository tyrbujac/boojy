/**
 * Boojy Suite Website - Main JavaScript
 * Handles navigation, form submission, and interactive elements
 */

// ===================================
// Navigation Menu Toggle (Mobile)
// ===================================
const navToggle = document.querySelector('.nav-toggle');
const navMobileMenu = document.querySelector('.nav-mobile-menu');
const navMobileLinks = document.querySelectorAll('.nav-mobile-link');

// Toggle mobile menu
if (navToggle && navMobileMenu) {
    navToggle.addEventListener('click', () => {
        navMobileMenu.classList.toggle('active');

        // Animate hamburger icon
        const spans = navToggle.querySelectorAll('span');
        if (navMobileMenu.classList.contains('active')) {
            spans[0].style.transform = 'rotate(45deg) translateY(7px)';
            spans[1].style.opacity = '0';
            spans[2].style.transform = 'rotate(-45deg) translateY(-7px)';
        } else {
            spans[0].style.transform = 'none';
            spans[1].style.opacity = '1';
            spans[2].style.transform = 'none';
        }
    });

    // Close menu when clicking a link
    navMobileLinks.forEach(link => {
        link.addEventListener('click', () => {
            navMobileMenu.classList.remove('active');
            const spans = navToggle.querySelectorAll('span');
            spans[0].style.transform = 'none';
            spans[1].style.opacity = '1';
            spans[2].style.transform = 'none';
        });
    });
}

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

// Only add listener if form exists on page
if (notifyForm && emailInput) {
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
} else {
    console.log('Email form not found on this page - skipping');
}

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
        planet.style.transform = 'scale(1.1)';
    });

    card.addEventListener('mouseleave', () => {
        planet.style.transform = 'scale(1)';
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

const heroSection = document.querySelector('.hero') || document.querySelector('.hero-compact');
if (heroSection) {
    heroSection.addEventListener('mousemove', (e) => {
        const now = Date.now();
        if (now - lastSparkleTime > sparkleInterval) {
            createSparkle(e.clientX, e.clientY);
            lastSparkleTime = now;
        }
    });
}

// ===================================
// Console Easter Egg
// ===================================
console.log('%c🎵 Boojy Audio 🎵', 'color: #5B21B6; font-size: 24px; font-weight: bold;');
console.log('%cCreativity Without Limits', 'color: #7C3AED; font-size: 16px;');
console.log('%cInterested in contributing? Check out our GitHub: https://github.com/tsbujacncl/boojy', 'color: #6B7280; font-size: 12px;');

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

// ===================================
// FAQ Accordion
// ===================================
function initFAQ() {
    const faqItems = document.querySelectorAll('.faq-item');

    // Check if FAQ items exist on the page
    if (faqItems.length === 0) {
        return; // No FAQ on this page, exit early
    }

    faqItems.forEach((item) => {
        const question = item.querySelector('.faq-question');

        // Safety check
        if (!question) return;

        question.addEventListener('click', () => {
            // Close other open FAQ items
            const isActive = item.classList.contains('active');
            faqItems.forEach(otherItem => {
                otherItem.classList.remove('active');
            });

            // Toggle current item
            if (!isActive) {
                item.classList.add('active');
            }
        });
    });
}

// Initialize FAQ when DOM is ready
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initFAQ);
} else {
    initFAQ();
}

// ===================================
// Screenshot Carousel
// ===================================
function initCarousel() {
    const carousel = document.querySelector('.carousel');
    const dots = document.querySelectorAll('.carousel-dot');
    const slides = document.querySelectorAll('.carousel-slide');

    if (!carousel || slides.length === 0) return;

    let currentSlide = 0;
    let autoPlayInterval;

    function showSlide(index) {
        slides.forEach(slide => slide.classList.remove('active'));
        dots.forEach(dot => dot.classList.remove('active'));

        slides[index].classList.add('active');
        dots[index].classList.add('active');
        currentSlide = index;
    }

    function nextSlide() {
        const next = (currentSlide + 1) % slides.length;
        showSlide(next);
    }

    // Click on dots
    dots.forEach((dot, index) => {
        dot.addEventListener('click', () => {
            showSlide(index);
            resetAutoPlay();
        });
    });

    // Auto-play
    function startAutoPlay() {
        autoPlayInterval = setInterval(nextSlide, 4000);
    }

    function resetAutoPlay() {
        clearInterval(autoPlayInterval);
        startAutoPlay();
    }

    startAutoPlay();
}

// Initialize carousel
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initCarousel);
} else {
    initCarousel();
}

// ===================================
// Collapsible Bug Report Section
// ===================================
function initBugReportToggle() {
    const toggle = document.getElementById('bug-report-toggle');
    const section = document.querySelector('.bug-report-section-collapsible');

    if (!toggle || !section) return;

    toggle.addEventListener('click', () => {
        section.classList.toggle('open');
    });
}

// Initialize bug report toggle
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initBugReportToggle);
} else {
    initBugReportToggle();
}

// ===================================
// Smart Download Section
// ===================================
const DOWNLOAD_CONFIG = {
    version: '0.1.0',
    versionDisplay: 'v0.1.0',
    releaseDate: 'Jan 2026',
    baseUrl: 'https://github.com/tyrbujac/boojy-audio/releases/latest/download/',
    platforms: {
        'mac-arm64': {
            name: 'Mac',
            file: 'Boojy-Audio-mac.dmg',
            icon: 'apple'
        },
        'mac-x64': {
            name: 'Mac',
            file: 'Boojy-Audio-mac.dmg',
            icon: 'apple'
        },
        'windows-x64': {
            name: 'Windows',
            file: 'Boojy-Audio-win.exe',
            icon: 'windows'
        },
        'windows-arm64': {
            name: 'Windows',
            file: 'Boojy-Audio-win.exe',
            icon: 'windows'
        }
    }
};

const PLATFORM_ICONS = {
    apple: `<svg viewBox="0 0 24 24" fill="currentColor" width="20" height="20"><path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/></svg>`,
    windows: `<svg viewBox="0 0 24 24" fill="currentColor" width="20" height="20"><path d="M0 3.449L9.75 2.1v9.451H0m10.949-9.602L24 0v11.4H10.949M0 12.6h9.75v9.451L0 20.699M10.949 12.6H24V24l-12.9-1.801"/></svg>`
};

function detectPlatform() {
    const userAgent = navigator.userAgent;
    const platform = navigator.platform || navigator.userAgentData?.platform || '';

    // macOS detection
    if (platform.includes('Mac') || userAgent.includes('Mac')) {
        // Try to detect Apple Silicon
        // Method 1: Check WebGL renderer
        try {
            const canvas = document.createElement('canvas');
            const gl = canvas.getContext('webgl') || canvas.getContext('experimental-webgl');
            if (gl) {
                const debugInfo = gl.getExtension('WEBGL_debug_renderer_info');
                if (debugInfo) {
                    const renderer = gl.getParameter(debugInfo.UNMASKED_RENDERER_WEBGL);
                    if (renderer.includes('Apple M') || renderer.includes('Apple GPU')) {
                        return 'mac-arm64';
                    }
                }
            }
        } catch (e) {}

        // Method 2: Check userAgentData (if available)
        if (navigator.userAgentData && navigator.userAgentData.platform === 'macOS') {
            // Modern browsers on Apple Silicon
            return 'mac-arm64';
        }

        // Default to Intel for older detection
        return 'mac-x64';
    }

    // Windows detection
    if (platform.includes('Win') || userAgent.includes('Windows')) {
        // Check for ARM
        if (userAgent.includes('ARM') || userAgent.includes('Qualcomm')) {
            return 'windows-arm64';
        }
        return 'windows-x64';
    }

    // Detection failed (Linux, mobile, etc.)
    return null;
}

function initDownloadSection() {
    const downloadSection = document.getElementById('download-section');
    if (!downloadSection) return;

    const detectedState = document.getElementById('download-detected');
    const selectState = document.getElementById('download-select');
    const downloadBtn = document.getElementById('download-btn');
    const downloadIcon = document.getElementById('download-icon');
    const detectedIcon = document.getElementById('detected-icon');
    const platformName = document.getElementById('platform-name');
    const otherDownloadsToggle = document.getElementById('other-downloads-toggle');
    const otherDownloadsMenu = document.getElementById('other-downloads-menu');
    const platformSelector = document.getElementById('platform-selector');

    const detectedPlatform = detectPlatform();

    if (detectedPlatform && DOWNLOAD_CONFIG.platforms[detectedPlatform]) {
        // Detection successful
        const platform = DOWNLOAD_CONFIG.platforms[detectedPlatform];

        // Set download button
        downloadBtn.href = DOWNLOAD_CONFIG.baseUrl + platform.file;
        downloadIcon.innerHTML = PLATFORM_ICONS[platform.icon];
        detectedIcon.innerHTML = PLATFORM_ICONS[platform.icon];
        platformName.textContent = platform.name;

        // Build other downloads menu
        let otherOptions = '';
        for (const [key, value] of Object.entries(DOWNLOAD_CONFIG.platforms)) {
            if (key !== detectedPlatform) {
                const downloadUrl = DOWNLOAD_CONFIG.baseUrl + value.file;
                otherOptions += `<a href="${downloadUrl}" class="dropdown-item">${PLATFORM_ICONS[value.icon]} ${value.name}</a>`;
            }
        }
        otherDownloadsMenu.innerHTML = otherOptions;

        // Show detected state
        detectedState.style.display = 'block';
        selectState.style.display = 'none';
    } else {
        // Detection failed - show select dropdown
        detectedState.style.display = 'none';
        selectState.style.display = 'block';
    }

    // Toggle dropdown
    if (otherDownloadsToggle) {
        otherDownloadsToggle.addEventListener('click', (e) => {
            e.preventDefault();
            otherDownloadsMenu.classList.toggle('active');
            otherDownloadsToggle.classList.toggle('active');
        });

        // Close dropdown when clicking outside
        document.addEventListener('click', (e) => {
            if (!otherDownloadsToggle.contains(e.target) && !otherDownloadsMenu.contains(e.target)) {
                otherDownloadsMenu.classList.remove('active');
                otherDownloadsToggle.classList.remove('active');
            }
        });
    }

    // Platform selector (for failed detection)
    if (platformSelector) {
        platformSelector.addEventListener('change', (e) => {
            const selected = e.target.value;
            if (selected && DOWNLOAD_CONFIG.platforms[selected]) {
                const platform = DOWNLOAD_CONFIG.platforms[selected];
                const downloadUrl = DOWNLOAD_CONFIG.baseUrl + platform.file;
                window.location.href = downloadUrl;
            }
        });
    }
}

// Initialize download section
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initDownloadSection);
} else {
    initDownloadSection();
}

// ===================================
// Mailchimp Email Signup
// ===================================
const MAILCHIMP_URL = 'https://boojy.us7.list-manage.com/subscribe/post-json?u=2cebb535b536483a415022089&id=e7ebb28e0a&f_id=00bbafe0f0';

function initEmailSignup() {
    const form = document.getElementById('signup-form');
    const emailInput = document.getElementById('signup-email');
    const submitBtn = document.getElementById('signup-btn');
    const successDiv = document.getElementById('signup-success');
    const submittedEmail = document.getElementById('submitted-email');
    const description = document.getElementById('signup-description');

    if (!form || !emailInput) return;

    form.addEventListener('submit', async (e) => {
        e.preventDefault();

        const email = emailInput.value.trim();
        if (!email) return;

        // Show loading state
        const originalText = submitBtn.textContent;
        submitBtn.textContent = 'Subscribing...';
        submitBtn.disabled = true;

        try {
            // Use JSONP for cross-origin Mailchimp request
            const url = `${MAILCHIMP_URL}&EMAIL=${encodeURIComponent(email)}&c=mailchimpCallback`;

            // Create callback function
            window.mailchimpCallback = (response) => {
                if (response.result === 'success' || response.result === 'error') {
                    // Hide form and description
                    form.style.display = 'none';
                    description.style.display = 'none';

                    // Show success message
                    submittedEmail.textContent = email;
                    successDiv.style.display = 'block';
                }

                // Clean up
                delete window.mailchimpCallback;
            };

            // Create script tag for JSONP
            const script = document.createElement('script');
            script.src = url;
            document.body.appendChild(script);

            // Fallback: show success after 2 seconds if callback doesn't fire
            setTimeout(() => {
                if (window.mailchimpCallback) {
                    form.style.display = 'none';
                    description.style.display = 'none';
                    submittedEmail.textContent = email;
                    successDiv.style.display = 'block';
                    delete window.mailchimpCallback;
                }
            }, 2000);

        } catch (error) {
            console.error('Signup error:', error);
            submitBtn.textContent = originalText;
            submitBtn.disabled = false;
        }
    });
}

// Initialize email signup
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initEmailSignup);
} else {
    initEmailSignup();
}

