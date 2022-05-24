$(document).ready(function(){ 
    $(window).resize(function(){ 
        if($(window).width() > 2400){
            var main = $('.bxslider').bxSlider({ 
                mode: 'horizontal', 
                auto: false,	
                controls : true,	
                nextSelector: '.btn_next',
                prevSelector: '.btn_prev',
                nextText: 'arrow_forward_ios',
                prevText: 'arrow_back_ios_new',
                autoControls: true,
                pager:true,
                pause: 3000,
                autoDelay: 0,	
                speed: 750,
                stopAutoOnclick:true,
                minSlides: 3,
                maxSlides: 3,
                slideWidth: 360
            });
        }else{
            var main = $('.bxslider').bxSlider({ 
                mode: 'horizontal', 
                auto: false,	
                controls : true,	
                nextSelector: '.btn_next',
                prevSelector: '.btn_prev',
                nextText: 'arrow_forward_ios',
                prevText: 'arrow_back_ios_new',
                autoControls: true,
                pager:true,
                pause: 3000,
                autoDelay: 0,	
                speed: 750,
                stopAutoOnclick:true,
                minSlides: 2,
                maxSlides: 2,
                slideWidth: 384
            }); 
        }
    }).resize();
    
    $(".bx-stop").click(function(){	
        main.stopAuto(); 
        $(".bx-stop").hide(); 
        $(".bx-start").show(); 
        return false; 
    }); 

    $(".bx-start").click(function(){
        main.startAuto(); 
        $(".bx-start").hide(); 
        $(".bx-stop").show(); 
        return false; 
    }); 

    $(".bx-start").hide();
}); 