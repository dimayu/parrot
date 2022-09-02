(function (document, window, undefined) {

    let tooltip = document.querySelectorAll('.products-items__item--link');

    [].forEach.call(tooltip, function (el) {
        let tooltipText = el.querySelector(".tooltip");
        el.addEventListener('mousemove', function (e) {
            tooltipText.style.top = e.layerY - 150 + 'px';
            tooltipText.style.left = e.layerX - 140 + 'px';
        }, false);
    });

})(document, window);