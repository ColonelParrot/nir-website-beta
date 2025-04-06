import { CountUp } from './assets/countUp.min.js'


const div = document.getElementById('why');
const divHeight = div.offsetHeight - window.innerHeight;
const divTop = div.offsetTop;

let activeIndex = 0;
let prevTimeout;

window.addEventListener('scroll', function () {
    const scrollPosition = window.scrollY;

    if (scrollPosition >= divTop) {
        const relativeScrollPosition = scrollPosition - divTop;
        const percentageScrolled = relativeScrollPosition / divHeight;

        let itemIndex = 0;
        let scrollPercentage = 0;

        if (percentageScrolled > 0.8) {
            itemIndex = 4;
            scrollPercentage = (percentageScrolled - 0.8) / 0.2;
        } else if (percentageScrolled > 0.6) {
            itemIndex = 3;
            scrollPercentage = (percentageScrolled - 0.6) / 0.2;
        } else if (percentageScrolled > 0.4) {
            itemIndex = 2;
            scrollPercentage = (percentageScrolled - 0.4) / 0.2;
        } else if (percentageScrolled > 0.2) {
            itemIndex = 1;
            scrollPercentage = (percentageScrolled - 0.2) / 0.2;
        } else {
            itemIndex = 0;
            scrollPercentage = percentageScrolled / 0.2;
        }

        $('#why .reason').find('.inner').css('width', `${scrollPercentage * 100}%`);
        if (activeIndex != itemIndex) {
            activeIndex = itemIndex;
            $('#why .reason').removeClass('active').find('p').slideUp()
            $('#why .reason').eq(itemIndex).addClass('active').find('p').slideDown();
        }
    }
});

AOS.init({
    startEvent: 'load',
    once: true
})

document.addEventListener('aos:in:downloads', ({ detail }) => {
    new CountUp('stat-downloads', 300000).start();
});

document.addEventListener('aos:in:citations', ({ detail }) => {
    new CountUp('stat-citations', 30).start();
});