window.onscroll = debounce(function() {
    if (window.scrollY < 700) {
        document.body.classList.remove('scrolled-2')
    } else if (window.scrollY > 700) {
        document.body.classList.add('scrolled-2')
    }
}, 10, true);

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