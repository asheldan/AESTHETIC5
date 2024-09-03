document.addEventListener('DOMContentLoaded', function() {
    const textOverlay = document.querySelector('.text-overlay');
    const phrases = ["666 AESTHETIC", "Aesthetic Coin", "Aesthetic", "666 AESTHETIC"];
    phrases.forEach(phrase => {
        let span = document.createElement('span');
        span.textContent = phrase + ' ';
        span.style.animationDuration = `${Math.random() * 10 + 10}s`;
        span.style.animationName = 'fadeInOut';
        textOverlay.appendChild(span);
    });
});
