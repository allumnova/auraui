// Subtle mouse move effect for blobs
document.addEventListener('mousemove', (e) => {
    const blobs = document.querySelectorAll('.blob');
    const x = e.clientX / window.innerWidth;
    const y = e.clientY / window.innerHeight;

    blobs.forEach((blob, index) => {
        const speed = (index + 1) * 20;
        blob.style.transform = `translate(${x * speed}px, ${y * speed}px)`;
    });
});

// Reveal Animation on Scroll
const cards = document.querySelectorAll('.glass-card');
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, { threshold: 0.1 });

cards.forEach(card => {
    card.style.opacity = '0';
    card.style.transform = 'translateY(50px)';
    card.style.transition = 'all 0.8s cubic-bezier(0.165, 0.84, 0.44, 1)';
    observer.observe(card);
});

// Copy to Clipboard logic
const toast = document.getElementById('toast');
const copyButtons = document.querySelectorAll('.copy-btn');

const showToast = () => {
    toast.classList.remove('hidden');
    setTimeout(() => {
        toast.classList.add('hidden');
    }, 2000);
};

copyButtons.forEach(btn => {
    btn.addEventListener('click', () => {
        const targetId = btn.getAttribute('data-target');
        const dummyCode = `/* AuraUI ${targetId.toUpperCase()} */\n.glass-element {\n  background: rgba(255, 255, 255, 0.03);\n  backdrop-filter: blur(12px);\n  border: 1px solid rgba(255, 255, 255, 0.08);\n  border-radius: 24px;\n  transition: all 0.4s ease;\n}`;

        navigator.clipboard.writeText(dummyCode).then(() => {
            showToast();
        });
    });
});
