$(function() {

    $(document).on('click', '.extensible .question', function () {
        $(this).parent().toggleClass('opened');
    });

    $(document).on('click', '[scroll-to-target]', function (event) {
        event.preventDefault();
        var target = $(this).attr('href');
        scrollToTarget(target);
    });

    function scrollToTarget (target) {
        console.log($(target).offset().top);
        $('html').animate({
            'scrollTop':  $(target).offset().top
        }, 800);
    }

});