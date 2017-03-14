$(function(){
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
//		$('.Consultation').mouseleave(function(){
//			$('.Consultation').css('display','none')
//		},function(){
//			$('.titleUlLi1').mouseleave(function(){
//			$('.Consultation').css('display','none')
//			})
//		})
	$('.titleUlLi1').mouseleave(function(){
		$('.Consultation').css('display','none')
			})
		$('.titleUlLi2').mouseenter(function(){
			
			$('.knowledge').slideDown().css('display','inline-block')
			$('.Consultation').css('display','none')
			$('.curriculum').css('display','none')
			$('.explore').css('display','none')
		})
//		$('.knowledge').mouseleave(function(){
//			$('.knowledge').css('display','none')
//		})
		$('.titleUlLi2').mouseleave(function(){
				$('.knowledge').css('display','none')
			})
		$('.titleUlLi3').mouseenter(function(){
			
			$('.curriculum').slideDown().css('display','inline-block')
			$('.knowledge').css('display','none')
			$('.explore').css('display','none')
			$('.knowledge').css('display','none')
			$('.Consultation').css('display','none')
		})
//		$('.curriculum').mouseleave(function(){
//			$('.curriculum').css('display','none')
//			
//		},function(){
//			
//		})
		$('.titleUlLi3').mouseleave(function(){
			$('.curriculum').css('display','none')
			})
		$('.titleUlLi4').mouseenter(function(){
			$('.explore').slideDown().css('display','inline-block')
			$('.curriculum').css('display','none')
			$('.knowledge').css('display','none')
			$('.Consultation').css('display','none')
		})
//		$('.explore').mouseleave(function(){
//			$('.explore').css('display','none')
//			
//		},
//		})
		
			$('.titleUlLi4').mouseleave(function(){
					$('.explore').css('display','none')
			})
		
	}
	$(window).scroll(function ScrollDisplay(){
		//获取main标签距离浏览器顶部的距离
		var mTop=$('.main').offset().top-$(document).scrollTop()
	     console.log(mTop)
	     if(mTop<=110){
	     	$('.headerNav1').slideDown().css('display','inline-block')
	     }
	      if(mTop>110){
	      	$('.headerNav1').fadeOut().css('display','none')
	      }
		
	})
	
	
	navHover()
	//鼠标移动触发的动态特效
	$('.header').mousemove(function(event){
				var a = event.clientX
				var b= event.clientY
//				var c=$(this).offset().left
//				var d=$(this).offset().top
//				console.log(a+'--'+b+'--'+c+'-'+d)
				var a1 = a*0.05+'px'
				var a2 = b*0.05+'px'
				var a3 = a*0.02+'px'
				var a4 = b*0.02+'px'
				setTimeout(function(){
					$('.img2').css({'left': a1,'top': a2})
				$('.img3').css({'left':a3,'top':a4})
				},800)              
			})
	function changeImage(){
		var curIndex = 0
		var autoChange = setInterval(function(){
			if(curIndex<$(".imgList li").length-1){
				curIndex++
			}else{
				curIndex = 0
			}
			//调用变换处理的函数
			changeTo(curIndex)
		},2500)
		function changeTo(num){
			$('.imgList').find('li').remove("imgOn").hide().eq(num).fadeIn().addClass("imgOne")
			}
	}
	changeImage()
//	$('.moreMessage').mouseenter(function(){
//		$('.Home').css('animation','MoreMessage 1s linear')
//	})
})
