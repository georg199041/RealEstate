$(document).ready(function(){   
	$('.form-1').jqTransform();              
    $('.slider')._TMS({
        show:0,
        pauseOnHover:true,
        prevBu:'.prev',
        nextBu:'.next',
        playBu:false,
        duration:1000,
        preset:'fade',
        pagination:true,
        pagNums:false,
        slideshow:7000,
        numStatus:false,
        banners:false,
        waitBannerAnimation:false,
        progressBar:false
    })
    $('.menu a').each(function(){
        if ($(this).attr('href') == window.location.pathname) {
            $(this).parent('li').addClass('current');
        }

    });
    
});