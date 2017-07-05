window.onload = function () {
    // forward when click title
    document.querySelector('.title').addEventListener('click', function() {
        window.location.href = 'index.html';
    });

    // toggle display
    document.querySelectorAll('.outline-2').forEach(function(outline) {
        var head = outline.querySelector('h2');
        var divs = outline.querySelectorAll('div');
        
        var toggledisplay = function(w) { w.style.display = (w.style.display == 'none') ? 'block' : 'none'; };

        head.addEventListener('click', function () {
            divs.forEach(toggledisplay);
        });
        outline.addEventListener('dblclick', function () {
            divs.forEach(toggledisplay);
        });
    });
    

    if(/Android/i.test(navigator.userAgent)) {
    }

};
