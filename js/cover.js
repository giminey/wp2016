alert();
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
        keyboard: false,
        animationTime: 700,

    });
    var countc;
    countc='1';

    $('.cov_li').click(function(){
        var tar=$(this);
           // alert($('.cov_li').index(tar));
        switch ($('.cov_li').index(ta
                $('.main-r').html('<div id="show"><img id="cov_img" src="images/head.jpg" height="400" width="500"><button class="cov_c_l">Pre</button><button class="cov_c_r">Next</button></div>');
                break;
            case 1:
                $('.main-r').html('test12');
                break;
            case 2:
                $('.main-r').html('<h3>太誇張!今日收工!</h3>');
                break;
            case 3:
                break;
            default:
                alert($('.cov_li').index(tar));
        }
        $('.cov_c_r').click(function(){
        document.getElementById("cov_img").src="images/department.jpg";
    });  
    $('.cov_c_l').click(function(){
        alert(countc);
        $('#cov_img').attr('src', 'images/department.jpg');
    });
    });
});
  


