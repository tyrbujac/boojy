/**
 * Boojy Audio - Page JavaScript
 * Downloads, carousel, email signup, bug report
 */

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

    dots.forEach((dot, index) => {
        dot.addEventListener('click', () => {
            showSlide(index);
            resetAutoPlay();
        });
    });

    function startAutoPlay() {
        autoPlayInterval = setInterval(nextSlide, 4000);
    }

    function resetAutoPlay() {
        clearInterval(autoPlayInterval);
        startAutoPlay();
    }

    startAutoPlay();
}

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

    if (platform.includes('Mac') || userAgent.includes('Mac')) {
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

        if (navigator.userAgentData && navigator.userAgentData.platform === 'macOS') {
            return 'mac-arm64';
        }

        return 'mac-x64';
    }

    if (platform.includes('Win') || userAgent.includes('Windows')) {
        if (userAgent.includes('ARM') || userAgent.includes('Qualcomm')) {
            return 'windows-arm64';
        }
        return 'windows-x64';
    }

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
        const platform = DOWNLOAD_CONFIG.platforms[detectedPlatform];

        downloadBtn.href = DOWNLOAD_CONFIG.baseUrl + platform.file;
        downloadIcon.innerHTML = PLATFORM_ICONS[platform.icon];
        detectedIcon.innerHTML = PLATFORM_ICONS[platform.icon];
        platformName.textContent = platform.name;

        let otherOptions = '';
        for (const [key, value] of Object.entries(DOWNLOAD_CONFIG.platforms)) {
            if (key !== detectedPlatform) {
                const downloadUrl = DOWNLOAD_CONFIG.baseUrl + value.file;
                otherOptions += `<a href="${downloadUrl}" class="dropdown-item">${PLATFORM_ICONS[value.icon]} ${value.name}</a>`;
            }
        }
        otherDownloadsMenu.innerHTML = otherOptions;

        detectedState.style.display = 'block';
        selectState.style.display = 'none';
    } else {
        detectedState.style.display = 'none';
        selectState.style.display = 'block';
    }

    if (otherDownloadsToggle) {
        otherDownloadsToggle.addEventListener('click', (e) => {
            e.preventDefault();
            otherDownloadsMenu.classList.toggle('active');
            otherDownloadsToggle.classList.toggle('active');
        });

        document.addEventListener('click', (e) => {
            if (!otherDownloadsToggle.contains(e.target) && !otherDownloadsMenu.contains(e.target)) {
                otherDownloadsMenu.classList.remove('active');
                otherDownloadsToggle.classList.remove('active');
            }
        });
    }

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

        const originalText = submitBtn.textContent;
        submitBtn.textContent = 'Subscribing...';
        submitBtn.disabled = true;

        try {
            const url = `${MAILCHIMP_URL}&EMAIL=${encodeURIComponent(email)}&c=mailchimpCallback`;

            window.mailchimpCallback = (response) => {
                if (response.result === 'success' || response.result === 'error') {
                    form.style.display = 'none';
                    description.style.display = 'none';
                    submittedEmail.textContent = email;
                    successDiv.style.display = 'block';
                }
                delete window.mailchimpCallback;
            };

            const script = document.createElement('script');
            script.src = url;
            document.body.appendChild(script);

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

if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initEmailSignup);
} else {
    initEmailSignup();
}

// ===================================
// Sparkle Effect (Hero hover)
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

let lastSparkleTime = 0;
const sparkleInterval = 100;

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
console.log('%c🎵 Boojy Audio 🎵', 'color: #38BDF8; font-size: 24px; font-weight: bold;');
console.log('%cMusic production without the barriers.', 'color: #5CCBFA; font-size: 16px;');
console.log('%cContribute: https://github.com/boojyorg/boojy', 'color: #6B7280; font-size: 12px;');
