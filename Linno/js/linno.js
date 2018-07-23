$(document).ready(function(){
   /*메뉴 아이콘*/
     $('.b_menu').css('display','none'); 
   
    $('.all_menu').toggle(function(){ 
         $('.b_menu').stop().slideDown(); 
    $('.line-one').css({'transform':'rotate(45deg)','top':'45%','background-color':'#00976c;'});
     $('.line-two').animate({'opacity':'0'},1);    
     $('.line-thr').css({'transform':'rotate(-45deg)','top':'45%','background-color':'#00976c;'});
       
    },function(){
        $('.b_menu').stop().slideUp(); 
        $('.line-one').css({'transform':'','top':'','background-color':'#333'});
     $('.line-two').animate({'opacity':'1','background-color':'#333'},300);    
     $('.line-thr').css({'transform':'','top':'80%','background-color':'#333'});
        
    
             });
    
    /*언어*/
 $('.lang_add').hide();
    $('.lang').mouseover(function(){
          $('.lang_add').show();               
                         });
      $('.lang').mouseout(function(){
           $('.lang_add').hide();
      });
    $('.banner_btn').mouseover(function(){
        $('.banner_btn a img').stop().animate({'marginLeft':'10px'});
    });
    $('.banner_btn').mouseout(function(){
        $('.banner_btn a img').stop().animate({'marginLeft':''});
    });
    
   
    $('.mid2_btn a').mouseover(function(){
    $('.mid2_btn a').stop().animate({'backgroundColor':'#00976c','color':'#fff'},400);
    });
    $('.mid2_btn a').mouseout(function(){
    $('.mid2_btn a').stop().animate({'backgroundColor':'','color':'#333'},400);
    });
    
    /*news*/
    $('.back1, .back2, .back3').css('opacity','0');
    $('.c1 ').mouseover(function(){
        $('.c1').stop().animate({'color':'#fff'},300);
        $('.back1').stop().animate({'opacity':'1'},400);
    });
    $('.c1').mouseout(function(){
        $('.c1').stop().animate({'color':'#333'},300);
        $('.back1').stop().animate({'opacity':'0'},400);
    });
    
    $('.c2 ').mouseover(function(){
        $('.c2').stop().animate({'color':'#fff'},300);
        $('.back2').stop().animate({'opacity':'1'},400);
    });
    $('.c2').mouseout(function(){
        $('.c2').stop().animate({'color':'#333'},300);
        $('.back2').stop().animate({'opacity':'0'},400);
    });
    
    $('.c3 ').mouseover(function(){
        $('.c3').stop().animate({'color':'#fff'},300);
        $('.back3').stop().animate({'opacity':'1'},400);
    });
    $('.c3').mouseout(function(){
        $('.c3').stop().animate({'color':'#333'},300);
        $('.back3').stop().animate({'opacity':'0'},400);
    });
  
 var visual = $('#banner_img >ul > li');
    var button = $('#btn_wrap li');
    var current = 0;
    var setIntervalId;
    
    button.on({
        click:function(){
            var tg = $(this);
            var i = tg.index();

            button.removeClass('on');
            tg.addClass('on');

            move(i);
        }
    });
    /*
    $('#banner_wrap').on({
        mouseover:function(){
            clearInterval(setIntervalId); //setInterval(대기시간 이후 함수 반복실행) 중지
        },
        mouseout:function(){
            timer();
        }
    });
    
    timer();
    function timer(){
        setIntervalId = setInterval(function(){
            var n = current + 1;
            if(n == visual.size()){
                n = 0;
            }
            
            button.eq(n).trigger('click');
        }, 5000);
    }
    
    function move(i){
        if(current == i) return;
        
        var currentEl = visual.eq(current);
        var nextEl = visual.eq(i);
        
        currentEl.css({left:0}).stop().animate({left:'-100%'});
        nextEl.css({left:'100%'}).stop().animate({left:0});

        current = i;
    } 
*/
  
    $('.line_box').hide();
    $('.one,.one > div').mouseover(function(){	//실행
		$('.line_box1').show();
        $('.line_top').stop().animate({width:'96%'},500);
        $('.line_bot').stop()
        .animate({width:'96%'},500);
        $('.line_left').stop()
        .animate({height:'96%'},500);
        
        $('.line_right').stop()
        .animate({height:'96%'},500);
	});
	$('.one').mouseout(function(){	//멈추기
		
        $('.line_top').stop().animate({width:''});
        $('.line_bot').stop().animate({width:''});
        $('.line_left').stop().animate({height:''});
        $('.line_right').stop().animate({height:''});
        $('.line_box1').hide(600);
	});
    
    $('.two').mouseover(function(){	//실행
		$('.line_box2').show();
        $('.line_top').stop().animate({width:'96%'},500);
        $('.line_bot').stop()
        .animate({width:'96%'},500);
        $('.line_left').stop()
        .animate({height:'96%'},500);
        
        $('.line_right').stop()
        .animate({height:'96%'},500);
	});
	$('.two').mouseout(function(){	//멈추기
		$('.line_top').stop().animate({width:''});
        $('.line_bot').stop().animate({width:''});
        $('.line_left').stop().animate({height:''});
        $('.line_right').stop().animate({height:''});
        $('.line_box2').hide(600);
	});
    
     $('.thr').mouseover(function(){	//실행
		$('.line_box3').show();
        $('.line_top').stop().animate({width:'96%'},500);
        $('.line_bot').stop()
        .animate({width:'96%'},500);
        $('.line_left').stop()
        .animate({height:'96%'},500);
        
        $('.line_right').stop()
        .animate({height:'96%'},500);
	});
	$('.thr').mouseout(function(){	//멈추기
		$('.line_top').stop().animate({width:''});
        $('.line_bot').stop().animate({width:''});
        $('.line_left').stop().animate({height:''});
        $('.line_right').stop().animate({height:''});
        $('.line_box3').hide(600);
	});
    
     $('.fou').mouseover(function(){	//실행
		$('.line_box4').show();
        $('.line_top').stop().animate({width:'96%'},500);
        $('.line_bot').stop()
        .animate({width:'96%'},500);
        $('.line_left').stop()
        .animate({height:'96%'},500);
        
        $('.line_right').stop()
        .animate({height:'96%'},500);
	});
	$('.fou').mouseout(function(){	//멈추기
		$('.line_top').stop().animate({width:''});
        $('.line_bot').stop().animate({width:''});
        $('.line_left').stop().animate({height:''});
        $('.line_right').stop().animate({height:''});
        $('.line_box4').hide(600);
	});
   
    

});