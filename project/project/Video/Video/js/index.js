// //打开浏览器是当前屏幕大小
// var winWidth;
// if (window.innerWidth){
// 	winWidth = window.innerWidth;
// }else if ((document.documentElement) && (document.documentElement.clientWidth)){
// 	winWidth = document.documentElement.clientWidth;
// }else if((document.body) && (document.body.clientWidth)){
// 	winWidth = document.body.clientWidth;
// }
// if (winWidth >= 400 && winWidth <= 768) {
// 	$('.zmClassify a').mouseover(function(){
// 		$(this).animate({left: '25px'},'fast');
// 	})
// 	$('.zmClassify a').mouseout(function(){
// 		$(this).animate({left: '0px'},'fast');
// 	})
// } else if (winWidth > 768 && winWidth <= 960) {
// 	$('.zmClassify a').mouseover(function(){
// 		$(this).animate({top: '-15px'},'fast');
// 	})
// 	$('.zmClassify a').mouseout(function(){
// 		$(this).animate({top: '0px'},'fast');
// 	})
// } else if(winWidth > 960){
// 	$('.zmClassify a').mouseover(function(){
// 		$(this).animate({height: '130px',lineHeight: '210px'},'fast');
// 	})
// 	$('.zmClassify a').mouseout(function(){
// 		$(this).animate({height: '100px',lineHeight: '130px'},'fast');
// 	})
// }
// //屏幕大小改变以后
// var zmWidth = document.documentElement.clientWidth;
// window.onresize = function(){
// 	if(zmWidth >= 400 && zmWidth <= 768){
// 	$('.zmClassify a').mouseover(function(){
// 	    $(this).animate({left:'25px'},'fast');
//     })
//     $('.zmClassify a').mouseout(function(){
// 	    $(this).animate({left:'0px'},'fast');
//     })
// }
// if(zmWidth >768 && zmWidth <= 960){
// 	$('.zmClassify a').mouseover(function(){
// 	    $(this).animate({top:'-15px'},'fast');
//    })
//     $('.zmClassify a').mouseout(function(){
// 	    $(this).animate({top:'0px'},'fast');
//     })
// }
// if(zmWidth > 960){
// 	$('.zmClassify a').mouseover(function(){
// 		$(this).animate({height: '130px',lineHeight: '210px'},'fast');
// 	})
// 	$('.zmClassify a').mouseout(function(){
// 		$(this).animate({height: '100px',lineHeight: '170px'},'fast');
// 	})
// }
// }


var flashvars = {
    p:0,
    e:1,
    i:'http://img.zcool.cn/community/0319a2558c11bd5a801219c778ecf82.jpg@250w_188h_1c_1e_2o_100sh.jpg'
};
var video=['http://img.ksbbs.com/asset/Mon_1605/0ec8cc80112a2d6.mp4->video/mp4'];
var video1 = ['test1.mp4->video/mp4'];
var video2 = ['test2.mp4->video/mp4'];
var support=['all'];
CKobject.embedHTML5('zmPlay1','ckplayer_a1',250,170,video,flashvars,support);
CKobject.embedHTML5('zmPlay2','ckplayer_a1',250,170,video1,flashvars,support);
CKobject.embedHTML5('zmPlay3','ckplayer_a1',250,170,video2,flashvars,support);
CKobject.embedHTML5('zmPlay4','ckplayer_a1',250,170,video,flashvars,support);
CKobject.embedHTML5('zmPlay5','ckplayer_a1',250,170,video,flashvars,support);
CKobject.embedHTML5('zmPlay6','ckplayer_a1',250,170,video,flashvars,support);
CKobject.embedHTML5('zmPlay7','ckplayer_a1',250,170,video,flashvars,support);
CKobject.embedHTML5('zmPlay8','ckplayer_a1',250,170,video,flashvars,support);
CKobject.embedHTML5('zmPlay9','ckplayer_a1',250,170,video,flashvars,support);
//CKobject.embedHTML5('zmPlay10','ckplayer_a1',360,150,video,flashvars,support);
//CKobject.embedHTML5('zmPlay11','ckplayer_a1',360,150,video,flashvars,support);




function navHover(){
    $('.titleUlLi1').mouseenter(function(){
        $('.Consultation').slideDown().css('display','inline-block')
        $('.knowledge').css('display','none')
        $('.titleUlLi2').css('border-bottom','0px solid rgba(0,0,0,0.6)')
        $('.titleUlLi3').css('border-bottom','0px solid rgba(0,0,0,0.6)')
        $('.curriculum').css('display','none')
        $('.titleUlLi4').css('border-bottom','0px solid rgba(0,0,0,0.6)')
        $('.explore').css('display','none')
    })
    $('.Consultation').mouseleave(function(){
        $('.Consultation').css('display','none')
    },function(){
        $('.titleUlLi1').mouseleave(function(){

            $('.Consultation').css('display','none')
        })
    })
    $('.titleUlLi2').mouseenter(function(){

        $('.knowledge').slideDown().css('display','inline-block')
        $('.Consultation').css('display','none')
        $('.curriculum').css('display','none')
        $('.explore').css('display','none')
    })
    $('.knowledge').mouseleave(function(){
        $('.knowledge').css('display','none')
    },function(){
        $('.titleUlLi2').mouseleave(function(){
            $('.knowledge').css('display','none')
        })
    })
    $('.titleUlLi3').mouseenter(function(){

        $('.curriculum').slideDown().css('display','inline-block')
        $('.knowledge').css('display','none')
        $('.explore').css('display','none')
        $('.knowledge').css('display','none')
        $('.Consultation').css('display','none')
    })
    $('.curriculum').mouseleave(function(){

        $('.curriculum').css('display','none')
    },function(){
        $('.titleUlLi3').mouseleave(function(){
            $('.curriculum').css('display','none')
        })
    })
    $('.titleUlLi4').mouseenter(function(){
        $('.explore').slideDown().css('display','inline-block')
        $('.curriculum').css('display','none')
        $('.knowledge').css('display','none')
        $('.Consultation').css('display','none')
    })
    $('.explore').mouseleave(function(){

        $('.explore').css('display','none')
    },function(){
        $('.titleUlLi4').mouseleave(function(){
            $('.explore').css('display','none')
        })
    })
}
navHover();