$(document).ready(function () {

    $('.header-toggle').click(function () {
        $('.header-menu').toggleClass('active')
        $('body').toggleClass('noscroll')
    })


    $('.tokenomics-container').mousemove(function (e) {
        const x = e.clientX;
        const y = e.clientY;

        $('.coin-1').css("right", (x / 20) + '%').css("top", (y / 60) + '%');
        $('.coin-2').css("left", (x / 32) + '%').css("top", (y / 54) + '%');
        $('.coin-3').css("left", (x / 25) + '%').css("bottom", (y / 42) + '%');
        $('.coin-4').css("right", (x / 42) + '%').css("bottom", (y / 22) + '%');
        $('.coin-5').css("left", (x / 47) + '%').css("top", (y / 18) + '%');
        $('.coin-6').css("right", (x / 17) + '%').css("top", (y / 6) + '%');
        $('.coin-7').css("right", (x / 9) + '%').css("top", (y / 13) + '%');
        $('.coin-8').css("right", (x / 65) + '%').css("top", (y / 3) + '%');
    })

    $('.total-container').mousemove(function (e) {
        const x = e.clientX;
        const y = e.clientY;

        $('.coin1').css("left", (x / 20) + '%').css("top", (y / 30) + '%');
        $('.coin2').css("left", (x / 32) + '%').css("bottom", (y / 54) + '%');
        $('.coin3').css("left", (x / 25) + '%').css("bottom", (y / 42) + '%');
        $('.coin4').css("right", (x / 42) + '%').css("top", (y / 42) + '%');
        $('.coin5').css("right", (x / 27) + '%').css("top", (y / 58) + '%');
        $('.coin6').css("right", (x / 17) + '%').css("bottom", (y / 36) + '%');
        $('.coin7').css("right", (x / 59) + '%').css("bottom", (y / 53) + '%');
    })

})