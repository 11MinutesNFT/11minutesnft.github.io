$(function() {
    var FINAL_DATE = new Date("10-30-2021 00:32:30");

    $(document).on('click', '.extensible .question', function () {
        $(this).parent().toggleClass('opened');
    });

    $(document).on('click', '[scroll-to-target]', function (event) {
        event.preventDefault();
        var target = $(this).attr('href');
        scrollToTarget(target);
    });

    $(document).on('click', '[close-menu]', function (event) {
        $('.mobile-menu').hide();
    });

    $(document).on('click', '[open-menu]', function (event) {
        $('.mobile-menu').show();
    });

    function scrollToTarget (target) {
        console.log($(target).offset().top);
        $('html').animate({
            'scrollTop':  $(target).offset().top
        }, 800);
    }

    startCountdown();
    function startCountdown() {
        var interval = setInterval(function() {
            var now = new Date();
            var diff = FINAL_DATE - now;

            if (diff < 0)
            {
                clearInterval(interval);
                destroyCountdown();
                return;
            }

            var days = addZeros(getDays(diff));
            var hours = addZeros(getHours(diff));
            var minutes = addZeros(getMinutes(diff));
            var seconds = addZeros(getSeconds(diff));

            renderCountdown({
                days: days,
                hours: hours,
                minutes: minutes,
                seconds: seconds
            })
        }, 1000);
    }

    function getDays(diff) {
        return Math.floor(diff / (1000 * 60 * 60 * 24));
    }

    function getHours(diff) {
        return Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    }

    function getMinutes(diff) {
        return Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
    }

    function getSeconds(diff) {
        return Math.floor((diff % (1000 * 60)) / 1000);
    }

    function addZeros(time) {
        return ("00" + time).slice(-2);
    }

    function renderCountdown(time) {
        $('.time.days').text(time.days);
        $('.time.hours').text(time.hours);
        $('.time.minutes').text(time.minutes);
        $('.time.seconds').text(time.seconds);
    }

    function destroyCountdown() {
        $('.countdown').hide();
    }

    function showCountdown() {
        $('.countdown').show();
    }

});