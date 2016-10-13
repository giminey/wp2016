
$(document).ready(function(){
	$('h1').css("display","none");
	$('h1').fadeIn(1000);
    $(".aaa").click(function(){
    	var listItem = $(this);
       	$(".main").moveTo($( ".aaa" ).index( listItem )%6+1);
    });

    $(".main").onepage_scroll({
        sectionContainer: "section",
        responsiveFallback: 600,
        loop: false,
        easing: "ease", 
        keyboard: true,
        animationTime: 700,

    });

$('#sb-slider').slicebox();
});

