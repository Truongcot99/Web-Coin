$(document).ready(function () {

    $('.header-toggle').click(function () {
        $('.header-menu').toggleClass('active')
        $('body').toggleClass('noscroll')
    })

})