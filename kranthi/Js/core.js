$(".training").on('click',function() {
	console.log($("#training").position().top+ 200)
    $('html, body').animate({
        'scrollTop' : $("#training").position().top - 80
    });
});
$(".services").on('click',function() {
    $('html, body').animate({
        'scrollTop' : $("#services").position().top - 80
    });
});
$(".courses").on('click',function() {
    $('html, body').animate({
        'scrollTop' : $("#courses").position().top - 80
    });
});