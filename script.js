const logo = $('#logo');
$('body').mousemove(function (e) {
    if (e.pageX > logo.position().left + (logo.width() / 2)) {
        logo.attr('src', './resources/right.png');
    } else {
        logo.attr('src', './resources/left.png');
    }
});