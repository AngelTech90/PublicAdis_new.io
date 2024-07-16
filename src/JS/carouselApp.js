
document.addEventListener('DOMContentLoaded', () => {

    const slider = document.querySelector('#appSlider');

    setTimeout(
        
        function moveSlide() {

            const max = slider.scrollWidth - slider.clientWidth;
            
            const left = slider.clientWidth;

            if (max === slider.scrollLeft) {

                slider.scrollTo({left: 0, behavior: 'smooth'});

            } else {

                slider.scrollBy({left, behavior: 'smooth'});

            }

            setTimeout(moveSlide, 6500);

    }, 2000)

})