class TextScramble {
    constructor(el) {
        this.el = el;
        this.chars = '10';  // Only binary digits
        this.update = this.update.bind(this);
    }

    setText(newText) {
        const oldText = this.el.innerText;
        const length = Math.max(oldText.length, newText.length);
        const promise = new Promise(resolve => this.resolve = resolve);
        this.queue = [];

        for (let i = 0; i < length; i++) {
            const from = oldText[i] || '';
            const to = newText[i] || '';
            const start = Math.floor(Math.random() * 60);
            const end = start + Math.floor(Math.random() * 80);
            this.queue.push({ from, to, start, end });
        }

        cancelAnimationFrame(this.frameRequest);
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
                if (!char || Math.random() < 0.15) {
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
        } else {
            this.frameRequest = requestAnimationFrame(this.update);
            this.frame++;
        }
    }

    randomChar() {
        return this.chars[Math.floor(Math.random() * this.chars.length)];
    }
}

// Initialize the animation for all elements with scramble-text class
document.addEventListener('DOMContentLoaded', () => {
    // Add a class to elements we want to fade in later
    const contentToFadeIn = document.querySelectorAll('p, .links, .social-links, .projects, .about-me, .number, .email-container');
    
    contentToFadeIn.forEach(el => {
        el.style.opacity = '0';
        el.style.transition = 'opacity 1s ease-in';
    });

    // Get only h1 and h2 elements
    const headings = document.querySelectorAll('h1, h2');
    const animations = [];
    
    headings.forEach(el => {
        const fx = new TextScramble(el);
        const originalText = el.innerText;
        
        let initialText = '';
        for (let i = 0; i < originalText.length; i++) {
            initialText += originalText[i] === ' ' ? ' ' : Math.random() < 0.5 ? '1' : '0';
        }
        
        el.innerText = initialText;
        
        // Store each animation promise
        const animationPromise = new Promise(resolve => {
            setTimeout(() => {
                fx.setText(originalText).then(resolve);
            }, 600 + Math.random() * 1000);
        });
        
        animations.push(animationPromise);
    });

    // After all heading animations complete, show the rest of the content
    Promise.all(animations).then(() => {
        setTimeout(() => {
            contentToFadeIn.forEach(el => {
                el.style.opacity = '1';
            });
        }, 500); // Small delay before starting fade-in
    });

    // Email copy functionality
    const copyButton = document.querySelector('.copy-button');
    if (copyButton) {
        copyButton.addEventListener('click', function() {
            const email = document.querySelector('.email').textContent;
            navigator.clipboard.writeText(email).then(() => {
                const notification = document.getElementById('notification');
                notification.classList.add('show');
                
                setTimeout(() => {
                    notification.classList.remove('show');
                }, 2000);
            });
        });
    }
}); 