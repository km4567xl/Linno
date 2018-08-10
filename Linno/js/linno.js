jQuery(function($){
    $('.menu_ico_wrap').on('click',function(){
        $(this).toggleClass('nav_btn_on');
        $('.gnb').toggleClass('nav_btn_on');
    });
  
      $('.com_mind_btn').hover(function(){
          $(this).toggleClass('mind_btn_action');
      });
    
    $('.quality_sm_img li:last').hover(function(){
          $('.tech2').css('opacity','0');
         $('.tech1').css('opacity','1');
      });
    
     $('.quality_sm_img li:first').hover(function(){
          $('.tech2').css('opacity','1');
         $('.tech1').css('opacity','0');
      });
    
    $('.ov_side_menu li').click(function(){
        $(this).addClass('ov_btn_active');
        $('.ov_side_menu li').not(this).removeClass('ov_btn_active');
       
    });
    
    $('.ov_quality').click(function(){
        $('.ov_quality_wrap').css('opacity','1');
        $('.ov_content_wrap > div').not('.ov_quality_wrap').css('opacity','0');
        $('.ov_wrap').css('padding-bottom',"70%");
     });
    
      $('.ov_patent').click(function(){
        $('.ov_patent_wrap').css('opacity','1');
        $('.ov_content_wrap > div').not('.ov_patent_wrap').css('opacity','0');
        $('.ov_wrap').css('padding-bottom',"20%");
     });
    
    $('.ov_cert').click(function(){
        $('.ov_cert_wrap').css('opacity','1');
        $('.ov_content_wrap > div').not('.ov_cert_wrap').css('opacity','0');
        $('.ov_wrap').css('padding-bottom',"70%");
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