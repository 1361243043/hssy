// JavaScript Document
/*#banner图片切换*/
$(function(){
	var $lis=$("#banner span");
	var num = $(".imgs a").size();
	$("#banner .imgs a:gt(0)").hide();
	var z;//表示页码
	for(z=1;z<=num;z++){
	  $(".list").append("<span>"+""+"</span>");
	 }   
	$(".list span").eq(0).addClass("current");
	$(".list span").mouseover(function(){
		$(this).addClass("current").siblings().removeClass("current");
		var index=$(this).index();
		$("#banner  .imgs>a").eq(index).show().siblings("a").hide();
	});
	auto = setInterval(function(){
	 var next//下一页索引值
	 var now = $(".current").index(); //当前页索引值
	 if((now+1)<num){
		 next=now+1;
		 }else{
			next=0; 
			 }
	 $(".list span").eq(next).trigger("mouseover");
	
	},2000);
		
//鼠标经过图片，停止自动切换
  $("#banner .imgs a").mouseover(function(){
		clearInterval(auto);
	  }).mouseout(function(){
		  auto = setInterval(function(){
		 var next//下一页索引值
		 var now = $(".current").index(); //当前页索引值
		 if((now+1)<num){
			 next=now+1;
			 }else{
				next=0; 
				 }
		 $(".list span").eq(next).trigger("mouseover");
	
	},2000);
	});	

	/*#cen图片切换*/
	var $lis=$("#cens span");
	var nums = $(".imgs1 a").size();
	$("#cen .imgs a:gt(0)").hide();
	var z;//表示页码
	for(z=1;z<=nums;z++){
	  $(".list1").append("<span>"+z+"</span>");
	 }   
	$(".list1 span").eq(0).addClass("current1");
	$(".list1 span").mouseover(function(){
		$(this).addClass("current1").siblings().removeClass("current1");
		var index=$(this).index();
		$("#cen .imgs1>a").eq(index).show().siblings().hide();
	});
	aut = setInterval(function(){
	 var next//下一页索引值
	 var now = $(".current1").index(); //当前页索引值
	 if((now+1)<nums){
		 next=now+1;
		 }else{
			next=0; 
			 }
	 $(".list1 span").eq(next).trigger("mouseover");
	
	},3000);
		
//鼠标经过图片，停止自动切换
  $("#cen .imgs1 a").mouseover(function(){
		clearInterval(aut);
	  }).mouseout(function(){
		  aut = setInterval(function(){
		 var next//下一页索引值
		 var now = $(".current1").index(); //当前页索引值
		 if((now+1)<num){
			 next=now+1;
			 }else{
				next=0; 
				 }
		 $(".list1 span").eq(next).trigger("mouseover");
	
	},3000);
	});	
/*#cen1鼠标经过添加样式*/
	$("#cen1 dl .spans").css("opacity","0.4");
	$("#cen1 dl .spans").hide();
	$("#cen1 dl").mouseover(function(){
			$(this).find(".spans").show();
			$(this).find(".dd1 a").css({"background-color":"#AB0008","color":"#fff"});
			$(this).find(".dd2").css("background","url(images/moreR+.jpg) no-repeat right top")
		}).mouseout(function(){
				$(this).find(".spans").hide();
				$(this).find(".dd1 a").css({"background-color":"#eee","color":"#000"});
				$(this).find(".dd2").css("background","url(images/5.png) no-repeat right top")
			})
			
/*#cen2鼠标经过添加样式*/
	$("#cen2 dl .spans").css("opacity","0.4");
	$("#cen2 dl .spans").hide();
	$("#cen2 dl").mouseover(function(){
			$(this).find(".spans").show();
			$(this).find("dt").css("border","10px #AB0008 solid")
		}).mouseout(function(){
				$(this).find(".spans").hide();
				$(this).find("dt").css("border","10px #fff solid")
			})
/*#cen3 dl鼠标经过添加样式*/	
	$("#cen3 .left dl").hover(function(){
		$(this).find("p").css("color","#AB0008");
		$(this).find(".sp1").css("color","#AB0008");
		$(this).find("dt img").css("opacity","0.7");
		},function(){
		$(this).find("p").css("color","#ADADB7");
		$(this).find(".sp1").css("color","#9B999C");
		$(this).find("dt img").css("opacity","1");
		});
/*.new_left img鼠标经过添加样式*/	
	$(".new_left img").hover(function(){
		$(this).css("opacity","0.7");
		},function(){
		$(this).css("opacity","1");
		});	
		
				/*.cen_left_2  图片切换*/
		$(".cen_left_2 .imgs dl").hover(function(){
		   clearInterval(au);//清空该自动触发
		},function(){
		   au = setInterval(function(){
			$(".animate .left").click();
			},3000)//还原该自动触发
		});//设置鼠标经过为不透明状态，鼠标离开为半透明效果
		//获取页数
		var now = 1;//当前页，默认为1
		var numss =  $(".imgs dl").length;
		var numMax = Math.ceil(numss/1);//总页数
		$(".animate .left").click(function(){
			if(!$(".animate .imgs").is(":animated")){//判断当前是否在执行动画
					if(now==1){//如果当前为第一页则向右滑动到最后一页
						var move=-173*(numMax-1)+"px";//找到最后一页
						$(".animate .imgs").stop().animate({"left":move},2000);
						now=numMax;//当前页是最后一页
						}else{//否则每次让它向左移动，每移动一次当前页减一
							$(".animate .imgs").stop().animate({"left":"+=173"},2000);
	     					 now--;
							}
				};		
		});//鼠标点击向左滑动	
		$(".animate .right").click(function(){
			if(!$(".animate .imgs").is(":animated")){//判断当前是否在执行动画
					if(now==numMax){//如果当前页是最后一页择回到第一页
						 $(".animate .imgs").stop().animate({"left":"0"},2000);
						 now=1;
						}else{//否则每次让它向右移动，每移动一次当前页加一
							$(".animate .imgs").stop().animate({"left":"-=173"},2000);
	     					 now++;
							}
				};
		});//鼠标点击向右滑动
	//自动滑动效果的实现
		au = setInterval(function(){
			$(".animate .left").click();
			},3000)//自动触发.right的点击事件
			
			//#center .cen_right dl鼠标经过添加样式
		$(".cen_right .dlList dl").find("dt span").hide();
		$(".cen_right .dlList dl").find("dt span").css("opacity","0.5")
		$(".cen_right .dlList dl").mouseover(function(){
					$(this).find("dt span").show();
				}).mouseout(function(){
						$(this).find("dt span").hide();
					})
	//.product1 img鼠标经过添加样式

		$(".product1").hover(function(){
				$(this).find("img").css("opacity","0.5");
			},function(){
				$(this).find("img").css("opacity","1")
				})

	});