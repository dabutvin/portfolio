var nav = document.getElementsByTagName('nav')[0],
    navSection = document.getElementsByClassName('section-nav')[0]
    navHeight = nav.offsetHeight,
    navOffsetTop = 99999;

window.setTimeout(function() {
    navSection.style.height = navHeight + 'px';
    navOffsetTop = nav.offsetTop;
    runScroll();
}, 300);

window.onscroll = debounce(runScroll, 10, true);

function runScroll() {
    if(window.scrollY > navOffsetTop) {
        document.body.classList.add('nav-scrolled');
    } else {
       document.body.classList.remove('nav-scrolled');
    }

    if (window.scrollY < 700) {
        document.body.classList.remove('scrolled-2')
    } else if (window.scrollY > 700) {
        document.body.classList.add('scrolled-2')
    }
}

function debounce(func, wait, immediate) {
    var timeout;
    return function() {
        var context = this, args = arguments;
        var later = function() {
            timeout = null;
            if (!immediate) func.apply(context, args);
        };
        var callNow = immediate && !timeout;
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
        if (callNow) func.apply(context, args);
    };
};