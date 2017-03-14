/**
 * Created by Administrator on 2017/3/7.
 */
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

