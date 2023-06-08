var pubElement = document.querySelector('.pub');

pubElement.addEventListener('mouseenter', function() {
  pubElement.style.animationPlayState = 'paused';
});

pubElement.addEventListener('mouseleave', function() {
  pubElement.style.animationPlayState = 'running';
});
