jQuery(function($){
    $('.menu_ico_wrap').on('click',function(){
        $(this).toggleClass('nav_btn_on');
        $('.gnb').toggleClass('nav_btn_on');
    });
  
      
   
   
    $('.slider').bxSlider({
    
        auto:true,
        speed:500,
        controls:true,
        next:true,
        Prev:true,
        nextText:'>',
        prevText:'<',
        pagerCustom:'#slide_btn_wrap'
                
    });
    
    
})