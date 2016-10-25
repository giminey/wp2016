    var countc;
    countc='1';
    $('.cov_c_r').click(function(){
        document.getElementById("cov_img").src="images/department.jpg";
    });  
    $('.cov_c_l').click(function(){
        alert(countc);
        $('#cov_img').attr('src', 'images/department.jpg');
    });    
