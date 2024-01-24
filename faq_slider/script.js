$(document).ready(function () {
    $('.Questions').on('click', function () {
        $(this).next()
            .slideToggle()
            .siblings('.Asked')
            .slideUp();

        var img = $(this).children('img');
        $('img').not(img).removeClass('rotate');
        //當img被點時,有rotate的話,就移除.沒有就新增
        img.toggleClass('rotate');
    });
});