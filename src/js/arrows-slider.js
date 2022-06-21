const wrapper = document.querySelector('.app-opinion__boxes');
const prevBtn = document.querySelector('.app-opinion-arrow--prev');
const nextBtn = document.querySelector('.app-opinion-arrow--next');
const nextBtnBg = document.querySelector('.app-opinion-arrow-bg--right')
const prevBtnBg = document.querySelector('.app-opinion-arrow-bg--left')

const scrollNext = () => {
    wrapper.scrollBy(800, 0);
}

const scrollPrev = () => {
    wrapper.scrollBy(-800, 0);
};

nextBtn.addEventListener('click', scrollNext)
prevBtn.addEventListener('click', scrollPrev)

const arrowsStateHandler = () => {
    const toggleArrowState = () => {
        const maxScrollWidth = wrapper.scrollWidth - wrapper.clientWidth;

        if (wrapper.scrollLeft === maxScrollWidth && !nextBtn.classList.contains(
                'app-opinion-arrow--disabled')) {
            nextBtn.classList.add('app-opinion-arrow--disabled');
            nextBtnBg.classList.add('app-opinion-arrow-bg--disabled');
        } else if (wrapper.scrollLeft < maxScrollWidth && nextBtn.classList.contains(
                'app-opinion-arrow--disabled')) {
            nextBtn.classList.remove('app-opinion-arrow--disabled');
            nextBtnBg.classList.remove('app-opinion-arrow-bg--disabled');
        }

        if (wrapper.scrollLeft === 0 && !prevBtn.classList.contains(
                'app-opinion-arrow--disabled')) {
            prevBtn.classList.add('app-opinion-arrow--disabled');
            prevBtnBg.classList.add('app-opinion-arrow-bg--disabled');
        } else if (wrapper.scrollLeft > 0 && prevBtn.classList.contains(
                'app-opinion-arrow--disabled')) {
            prevBtn.classList.remove('app-opinion-arrow--disabled');
            prevBtnBg.classList.remove('app-opinion-arrow-bg--disabled');
        }
    }

    wrapper.addEventListener('scroll', toggleArrowState);
}

arrowsStateHandler()