document.querySelector('.ham-menu').addEventListener('click', () => {document.querySelector('.container').classList.toggle("change");
});

document.querySelector('.scroll').addEventListener('click', () => {
    const scrollOptions = {
        top: 0,
        behavior: 'smooth'
    };

    // Adjust the scroll duration
    const scrollDuration = 1000; // in milliseconds
    const startTime = performance.now();
    
    function scrollWithSpeed(timestamp) {
        const elapsed = timestamp - startTime;
        const progress = Math.min(elapsed / scrollDuration, 1);
        window.scrollTo(0, progress * scrollOptions.top);
        
        if (elapsed < scrollDuration) {
            window.requestAnimationFrame(scrollWithSpeed);
        }
    }
    
    window.requestAnimationFrame(scrollWithSpeed);
});
