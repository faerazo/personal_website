// Configuration constants
const CONFIG = {
    ANIMATION: {
        CHARS: '10',  // Binary digits for scramble effect
        CHAR_CHANGE_PROBABILITY: 0.15,
        MIN_START_DELAY: 600,
        MAX_RANDOM_DELAY: 1000,
        FRAME_START_RANDOM: 60,
        FRAME_DURATION_RANDOM: 80,
        FADE_IN_DELAY: 500
    },
    COPY: {
        DEBOUNCE_DELAY: 300,
        NOTIFICATION_DURATION: 2000
    },
    SELECTORS: {
        FADE_IN_ELEMENTS: 'p, .links, .social-links, .projects, .about-me, .number, .email-container',
        HEADINGS: 'h1, h2',
        COPY_BUTTON: '.copy-button',
        EMAIL: '.email',
        NOTIFICATION: '#notification'
    },
    CLASSES: {
        SHOW: 'show'
    }
};

class TextScramble {
    constructor(el) {
        this.el = el;
        this.chars = CONFIG.ANIMATION.CHARS;
        this.update = this.update.bind(this);
        this.frameRequest = null;
    }

    // Cleanup method to prevent memory leaks
    destroy() {
        if (this.frameRequest) {
            cancelAnimationFrame(this.frameRequest);
            this.frameRequest = null;
        }
    }

    setText(newText) {
        const oldText = this.el.innerText;
        const length = Math.max(oldText.length, newText.length);
        const promise = new Promise(resolve => this.resolve = resolve);
        this.queue = [];

        for (let i = 0; i < length; i++) {
            const from = oldText[i] || '';
            const to = newText[i] || '';
            const start = Math.floor(Math.random() * CONFIG.ANIMATION.FRAME_START_RANDOM);
            const end = start + Math.floor(Math.random() * CONFIG.ANIMATION.FRAME_DURATION_RANDOM);
            this.queue.push({ from, to, start, end });
        }

        if (this.frameRequest) {
            cancelAnimationFrame(this.frameRequest);
        }
        this.frame = 0;
        this.update();
        return promise;
    }

    update() {
        let output = '';
        let complete = 0;

        for (let i = 0, n = this.queue.length; i < n; i++) {
            let { from, to, start, end, char } = this.queue[i];

            if (this.frame >= end) {
                complete++;
                output += to;
            } else if (this.frame >= start) {
                if (!char || Math.random() < CONFIG.ANIMATION.CHAR_CHANGE_PROBABILITY) {
                    char = this.randomChar();
                    this.queue[i].char = char;
                }
                output += char;
            } else {
                output += from;
            }
        }

        this.el.innerText = output;

        if (complete === this.queue.length) {
            this.resolve();
            this.frameRequest = null;
        } else {
            this.frameRequest = requestAnimationFrame(this.update);
            this.frame++;
        }
    }

    randomChar() {
        return this.chars[Math.floor(Math.random() * this.chars.length)];
    }
}

// Debounce function for performance optimization
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

document.addEventListener('DOMContentLoaded', () => {
    // Store references to avoid repeated DOM queries
    const contentToFadeIn = document.querySelectorAll(CONFIG.SELECTORS.FADE_IN_ELEMENTS);
    const headings = document.querySelectorAll(CONFIG.SELECTORS.HEADINGS);
    const animations = [];
    const scrambleInstances = new Map();
    
    // Initialize fade-in elements
    contentToFadeIn.forEach(el => {
        el.style.opacity = '0';
        el.style.transition = 'opacity 1s ease-in';
    });

    // Initialize scramble animations
    headings.forEach(el => {
        const fx = new TextScramble(el);
        scrambleInstances.set(el, fx);
        const originalText = el.innerText;
        
        let initialText = '';
        for (let i = 0; i < originalText.length; i++) {
            initialText += originalText[i] === ' ' ? ' ' : Math.random() < 0.5 ? '1' : '0';
        }
        
        el.innerText = initialText;
        
        const animationPromise = new Promise(resolve => {
            setTimeout(() => {
                fx.setText(originalText).then(() => {
                    resolve();
                });
            }, CONFIG.ANIMATION.MIN_START_DELAY + Math.random() * CONFIG.ANIMATION.MAX_RANDOM_DELAY);
        });
        
        animations.push(animationPromise);
    });

    // After all animations complete
    Promise.all(animations).then(() => {
        setTimeout(() => {
            contentToFadeIn.forEach(el => {
                el.style.opacity = '1';
            });
            
            // Cleanup scramble instances
            scrambleInstances.forEach(instance => {
                instance.destroy();
            });
            scrambleInstances.clear();
        }, CONFIG.ANIMATION.FADE_IN_DELAY);
    });

    // Email copy functionality with debouncing
    const copyButton = document.querySelector(CONFIG.SELECTORS.COPY_BUTTON);
    if (copyButton) {
        const handleCopy = debounce(() => {
            const email = document.querySelector(CONFIG.SELECTORS.EMAIL).textContent;
            navigator.clipboard.writeText(email).then(() => {
                const notification = document.querySelector(CONFIG.SELECTORS.NOTIFICATION);
                notification.classList.add(CONFIG.CLASSES.SHOW);
                
                setTimeout(() => {
                    notification.classList.remove(CONFIG.CLASSES.SHOW);
                }, CONFIG.COPY.NOTIFICATION_DURATION);
            }).catch(err => {
                console.error('Failed to copy email:', err);
            });
        }, CONFIG.COPY.DEBOUNCE_DELAY);

        copyButton.addEventListener('click', handleCopy);
    }

    // Cleanup on page unload
    window.addEventListener('unload', () => {
        scrambleInstances.forEach(instance => {
            instance.destroy();
        });
        scrambleInstances.clear();
    });
}); 