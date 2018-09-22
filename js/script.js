$(function(){	
// 弹出层
	// 登录链接事件
	
	$('.loginLink').click(function(){
		var loginHtml=$('.login').html();
		showLayer(loginHtml,closeCallback);
		// 登录表单校验
		$('.button').click(function(){
			var username = $('input[name="username"]').val();
			var password = $('input[name="password"]').val();
			if(username === 'imooc' && password === 'imooc'){
				alert('登录成功');
				closeCallback();
			}else if(username != 'imooc'){
				$('.error-id').css('display','block');
			}else if(password != 'imooc'){
				$('.error-psw').css('display','block');
			};
		});
	});

	// 注册链接事件
	$('.regiLink').click(function(){
		// 获取注册窗体代码
		var regiHtml = $('.register').html();
		showLayer(regiHtml,closeCallback);

		// 注册表单校验
		$('.button').click(function(){
			var username = $('input[name="username"]').val();
			var verify = $('input[name="verify"]').val();
			var repassword = $('input[name="repassword"]').val();
			if(username === 'imooc' && verify === 'gyyd' || verify === 'GYyd' || verify === 'GYYD'){
				alert('注册成功');
				closeCallback();
			}else if(username != 'imooc'){
				$('.error-id').css('display','block');
			}else if(verify !='gyyd' && verify != 'GYyd' && verify != 'GYYD'){
				$('.error-verify').css('display','block');
			};
		});
	});

	$('.popLogin').click(function(){
		console.log('hello');
	});

	// 弹出层关闭回调函数
	function closeCallback(){
		$('.error-id').html('');
		$('.error-psw').html('');
		$('.error-verify').html('');
	};

	// 隐藏弹出层
	function hideLayer(){
		// 弹出层关闭
		$('.layer-mask').hide();
		$('.layer-pop').hide();
	};
	
	// 显示弹出层
	function showLayer(html,closeCallback){
		$('.layer-mask').show();
		$('.layer-pop').show();
		$('.layer-content').html(html);
		$('.layer-close').click(function(){
			hideLayer();
			closeCallback();
		});
	};
	
//鼠标滑过登录部分右侧区域下拉菜单显示
var timer1 = null;
$(".headLogin>.right>li").stop().hover(function(){
	$(this).css({"background-color":"#fff","color":"#f00"});
	$(".topList>ul").eq($(this).index()).css("display","block");	
},function(){
	var This = $(this);
	timer1 = setTimeout(function(){
		This.css({"background-color":"","color":"#666"});
		$(".topList>ul").eq(This.index()).css("display","none");
	},50);
})
$(".topList>ul").stop().hover(function(){
	clearTimeout(timer1);
	$(this).css("display","block");
},function(){
	$(".headLogin>.right>li").eq($(this).index()).css({"background-color":"","color":"#666"});
	$(this).css("display","none");
})

//banner区左侧列表区域
$(".banLeft>.list").stop().hover(function(){
	$(this).css("background-color","#CC0000");
	$(".listContent>.list").eq($(this).index()).css("display","block");
},function(){
		$(this).css("background-color","#f01414");
		$(".listContent>.list").eq($(this).index()).css("display","none");
})
$(".listContent>.list").stop().hover(function(){
	$(this).css("display","block");
},function(){
	$(".banLeft>.list").eq($(this).index()).css("background-color","#CC0000");
	$(this).css("display","none");
})

// 左侧导航栏随滚动条出现消失
	$(window).bind("scroll", function () {  
	    var sTop = $(window).scrollTop();  
	    var sTop = parseInt(sTop);  
	    if (sTop >= 700 && sTop<=3200) {  
	        if ($(".navLeft").is(":hidden")) {  
	                $(".navLeft").slideDown();  
	                $(".navLeft").show();                       
	        }  
	    }  
	    else {  
	        if ($(".navLeft").is(":visible")) {  
	                $(".navLeft").slideUp();  
	                $(".navLeft").hide();                        
	        }  
	    };    
	});
	
//banner区轮播图
	var index=0;
	var timer3=null;
	var $list=$('.banPic');
	var $listd=$('.dot')
	var len=$list.length;
	//左右箭头划过时的背景颜色显示出来
	$('.prev').hover(function(){
		$(this).addClass('hove');
	},function(){
		$(this).removeClass('hove');
	})//点击箭头更换图片
	.click(function(){
		prevImg(index);
		index--;
		if(index<=(-len)){
			index=0;
			$list.eq(0).addClass('activeP');
			$listd.eq(0).addClass('activeD');			
		};
		console.log(index);
	});
	//右箭头划过时的背景颜色显示出来
	$('.next').hover(function(){
		$(this).addClass('hove');
	},function(){
		$(this).removeClass('hove');
	})//点击箭头更换图片
	.click(function(){
		nextImg(index);
		index++;
		if(index>=len){
			index=0;
			$list.eq(0).addClass('activeP');
			$listd.eq(0).addClass('activeD');			
		};
	});
	//点击圆点切换图片
	$('.dot').click(function(){
		$list.eq(index).removeClass('activeP');
		$listd.eq(index).removeClass('activeD');
		index=$listd.index(this);	
		$list.eq(index).addClass('activeP');
		$listd.eq(index).addClass('activeD');
	})
	//添加动画轮播效果
		//鼠标进入时停止播放
		$('.ban').hover(function(){
			clearInterval(timer3);
		},function(){
			//鼠标未进入时自动开始播放
			timer3 = setInterval(function(){
				nextImg(index);
				index++;
				if(index>=len){
					index=0;
					$list.eq(0).addClass('activeP');
					$listd.eq(0).addClass('activeD');
				};
			},2000);
		})
		.trigger('mouseleave');
	function nextImg(index){
		$list.eq(index).removeClass('activeP');
		$listd.eq(index).removeClass('activeD');
		index++;
		$list.eq(index).addClass('activeP');
		$listd.eq(index).addClass('activeD');
		
	};
	function prevImg(index){	
		$list.eq(index).removeClass('activeP');
		$listd.eq(index).removeClass('activeD');			
		index--;
		$list.eq(index).addClass('activeP');
		$listd.eq(index).addClass('activeD');
	};
	
	$(".textBox>input").keyup(function(){
		$.ajax({
		      url: "https://suggest.taobao.com/sug?code=utf-8&q="+$(this).val()+"&_ksTS=1531295280935_312&callback=result&k=1&area=c2c&bucketid=5",
		      type: "GET",
		      dataType: "jsonp",
		      jsonpCallback: "result", 
		      success: function(data){
		      	$(".textBox>ul").empty();
				for(var i=0;i<data.result.length;i++){
		           $(".textBox>ul").append("<li><a target='_blank' href='https://s.taobao.com/search?initiative_id=tbindexz_20170306&ie=utf8&spm=a21bo.2017.201856-taobao-item.2&sourceId=tb.index&search_type=item&ssid=s5-e&commend=all&imgfile=&q="+data.result[i][0]+"&suggest=0_1&_input_charset=utf-8&wq=%E4%B9%A6%E5%8C%85&suggest_query=%E4%B9%A6%E5%8C%85&source=suggest'>"+data.result[i][0]+"</a></li>")
		      	}
				}
			})
	})

});
