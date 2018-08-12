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
    



    
   $('.com_mind_wrap .com_mind_btn li').click(function(){
       var mindTabIndex = $(this).index();
       $(this).addClass('mind_btn_action').siblings().removeClass('mind_btn_action');
     
       $('.mind_msg li').hide().eq(mindTabIndex).show();

    });

    

    


    /*ov 탭메뉴*/
    
     $('.ov_side_wrap .ov_side_menu li').click(function(){
       var ovTabIndex = $(this).index();
       $(this).addClass('ov_btn_active').siblings().removeClass('ov_btn_active');

       $('.ov_content_wrap > div').hide().eq(ovTabIndex).show();

     });

    /*quality img 탭*/

     $('.quality_sm_img li:last').hover(function(){
          $('.tech2').css('opacity','0');
         $('.tech1').css('opacity','1');
      });
    
     $('.quality_sm_img li:first').hover(function(){
          $('.tech2').css('opacity','1');
         $('.tech1').css('opacity','0');
      });
    
});
