// Enhance interactivity or effects
document.querySelector('.glow').addEventListener('mouseenter', function() {
    this.style.animationPlayState = 'paused';
});

document.querySelector('.glow').addEventListener('mouseleave', function() {
    this.style.animationPlayState = 'running';
});
