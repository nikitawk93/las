$(document).ready(function(){
    $(function () {
        $('.issue-details').hide();

        $('.issuemenu').mouseenter(function () {
            $(this).css("color", "#8c9380");
        });

        $('.issuemenu').mouseleave(function () {
            $(this).css("color", "#bc8034");
        });     

        $('.issuemenu').click(function () {
            $(this).next().slideToggle();

            if ($(this).next().is(':visible')) {
                $('.issue-details').not($(this).next()).slideUp();
            }
        });
    });
});