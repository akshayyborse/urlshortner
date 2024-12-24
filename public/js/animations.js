// Initialize animation states when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    // Initial animations
    animateHeader();
    animateInputFields();
    
    // Add hover animations to buttons
    setupButtonAnimations();
});

function animateHeader() {
    const header = document.querySelector('.header');
    const h1 = header.querySelector('h1');
    const h2 = header.querySelector('h2');

    // Initial state
    h1.style.opacity = '0';
    h1.style.transform = 'translateY(-20px)';
    h2.style.opacity = '0';
    h2.style.transform = 'translateY(-20px)';

    // Animate in
    setTimeout(() => {
        h1.style.transition = 'all 0.6s ease-out';
        h1.style.opacity = '1';
        h1.style.transform = 'translateY(0)';
        
        setTimeout(() => {
            h2.style.transition = 'all 0.6s ease-out';
            h2.style.opacity = '1';
            h2.style.transform = 'translateY(0)';
        }, 200);
    }, 300);
}

function animateInputFields() {
    const fields = document.querySelectorAll('#first, #second');
    
    fields.forEach((field, index) => {
        field.style.opacity = '0';
        field.style.transform = 'translateY(20px)';
        
        setTimeout(() => {
            field.style.transition = 'all 0.5s ease-out';
            field.style.opacity = '1';
            field.style.transform = 'translateY(0)';
        }, 600 + (index * 200));
    });
}

function setupButtonAnimations() {
    const buttons = document.querySelectorAll('button');
    
    buttons.forEach(button => {
        button.addEventListener('mouseenter', () => {
            button.style.transform = 'scale(1.05)';
            button.style.transition = 'all 0.2s ease-out';
        });
        
        button.addEventListener('mouseleave', () => {
            button.style.transform = 'scale(1)';
        });
        
        button.addEventListener('mousedown', () => {
            button.style.transform = 'scale(0.95)';
        });
        
        button.addEventListener('mouseup', () => {
            button.style.transform = 'scale(1.05)';
        });
    });
} 