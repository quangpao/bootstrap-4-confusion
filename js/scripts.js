$(document).ready(() => {
    $('#carouselButton').click(() => {
        if($('#carouselButton').children("span").hasClass('fa-pause')) {
            $('#mycarousel').carousel('pause');
            $('#carouselButton').children("span").removeClass('fa-pause');
            $('#carouselButton').children("span").addClass('fa-play');
        } else if ($('#carouselButton').children("span").hasClass('fa-play')) {
            $('#mycarousel').carousel('cycle');
            $('#carouselButton').children("span").removeClass('fa-play');
            $('#carouselButton').children("span").addClass('fa-pause');
        }
    })
});

$(document).ready(() => {
    $('#login-btn').click(() => {
        $('#loginModal').modal('show');
    });
    $('#reserve-btn').click(() => {
        $('#reserveTableModal').modal('show');
    });
});