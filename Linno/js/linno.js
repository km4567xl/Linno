jQuery(function($){
    $('.menu_ico_wrap').on('click',function(){
        $(this).toggleClass('nav_btn_on');
        $('.nav_wrap').toggleClass('nav_btn_on');
    })
})