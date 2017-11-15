$(document).ready(function () {
    //For testing jQuery is working....
    // Set optoins
    var speed = 500;                // Fade speed
    var autoswitch = true;          // Auto slider options
    var autoswitch_speed = 2000;    // Auto slider speed

    // Add inital active class
    $('.slide').first().addClass('active');

    // Hide all slides
    $('.slide').hide();

    // Show active slide
    $('.active').show();

    // Next handler
    $('#next').click(nextSlide);
    // Prev handler
    $('#prev').click(prevSlide);

    if (autoswitch == true) {
        setInterval(nextSlide, autoswitch_speed);
    }

    // switch to next slide
    function nextSlide(){
        $('.active').removeClass('active').addClass('oldActive');
        if ($('.oldActive').is(':last-child')){
            $('.slide').first().addClass('active');
        }
        else {
            $('.oldActive').next().addClass('active');
        }
        $('.oldActive').removeClass('oldActive');
        $('.slide').fadeOut(speed);
        $('.active').fadeIn(speed);
    }

    // switch to prev slide
    function prevSlide() {
        $('.active').removeClass('active').addClass('oldActive');
        if ($('.oldActive').is(':first-child')){
            $('.slide').last().addClass('active');
        }
        else {
            $('.oldActive').prev().addClass('active');
        }
        $('.oldActive').removeClass('oldActive');
        $('.slide').fadeOut(speed);
        $('.active').fadeIn(speed);
    }

});