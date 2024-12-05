class TextScramble {
    constructor(el) {
        this.el = el;
        this.pytorchElements = [
            'torch.nn',
            'nn.Linear',
            'nn.Conv2d',
            'nn.ReLU()',
            'optimizer',
            'criterion',
            'backward()',
            'forward()',
            'tensor()',
            'cuda()',
            'model(x)',
            'train()',
            'eval()',
            'Dataset',
            'DataLoader',
            'requires_grad',
            'zero_grad()',
            'state_dict',
            'load_state',
            'Sequential'
        ];
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
        const element = this.pytorchElements[Math.floor(Math.random() * this.pytorchElements.length)];
        const validChars = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ._()0123456789';
        return element[Math.floor(Math.random() * element.length)].match(/[a-zA-Z._()0-9]/) ? 
               element[Math.floor(Math.random() * element.length)] : 
               validChars[Math.floor(Math.random() * validChars.length)];
    }
}

// Initialize the animation for all elements with scramble-text class
document.addEventListener('DOMContentLoaded', () => {
    const elements = document.querySelectorAll('.scramble-text');
    
    elements.forEach(el => {
        const fx = new TextScramble(el);
        const originalText = el.innerText;
        
        let initialText = '';
        let elementIndex = 0;
        
        for (let i = 0; i < originalText.length; i++) {
            if (originalText[i] === ' ') {
                initialText += ' ';
                continue;
            }
            
            const element = fx.pytorchElements[elementIndex % fx.pytorchElements.length];
            initialText += element[i % element.length];
            
            if (i % element.length === element.length - 1) {
                elementIndex++;
            }
        }
        
        el.innerText = initialText;
        
        setTimeout(() => {
            fx.setText(originalText);
        }, 600 + Math.random() * 1500);
    });

    const copyButton = document.querySelector('.copy-button');
    if (copyButton) {
        copyButton.addEventListener('click', function() {
            const email = document.querySelector('.email').textContent;
            navigator.clipboard.writeText(email).then(() => {
                const notification = document.getElementById('notification');
                notification.classList.add('show');
                
                // Hide notification after 2 seconds
                setTimeout(() => {
                    notification.classList.remove('show');
                }, 2000);
            });
        });
    }
}); 