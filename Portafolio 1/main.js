window.addEventListener('scroll', function() {
    const scrollDown = document.querySelector('.arrow');
    if (window.scrollY > 100) {
        scrollDown.classList.add('hidden');
    } else {
        scrollDown.classList.remove('hidden');
    }
});