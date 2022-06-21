const downloadSection = document.querySelector('.app-download');

const showSection =  _.throttle(() => {
    if (window.scrollY > 700 && window.scrollY < 2800 && window.innerWidth >= 950 || window.scrollY > 700 && window.scrollY < 4760 && window.innerWidth < 950) {
        downloadSection.classList.add('section-visible')
    } else {
        downloadSection.classList.remove('section-visible')
    }
}, 100)

document.addEventListener('scroll', showSection)