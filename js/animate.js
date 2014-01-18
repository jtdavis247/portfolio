$(function(){
$('.whole_box').click(function(){
	
	$('li').slideToggle();
});
$('.hello').animate({width:'toggle', duration: 'slow'});
$('.welcome').delay(800).animate({width:'toggle', duration: 'slow'});


$('.char-1').click(function(){
		$('.char-2').hide();
		$('.hello').hide();
		$('.welcome').hide();


});
function pulsate(element) {
    $(element || this).animate({ opacity: 0 }, 1000, function() {
        $(this).animate({ opacity: 1 }, 1000,  pulsate);
    });
}

pulsate('h4');
});