// JavaScript Document
/*#bannerͼƬ�л�*/
$(function(){
	var $lis=$("#banner span");
	var num = $(".imgs a").size();
	$("#banner .imgs a:gt(0)").hide();
	var z;//��ʾҳ��
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
	 var next//��һҳ����ֵ
	 var now = $(".current").index(); //��ǰҳ����ֵ
	 if((now+1)<num){
		 next=now+1;
		 }else{
			next=0; 
			 }
	 $(".list span").eq(next).trigger("mouseover");
	
	},2000);
		
//��꾭��ͼƬ��ֹͣ�Զ��л�
  $("#banner .imgs a").mouseover(function(){
		clearInterval(auto);
	  }).mouseout(function(){
		  auto = setInterval(function(){
		 var next//��һҳ����ֵ
		 var now = $(".current").index(); //��ǰҳ����ֵ
		 if((now+1)<num){
			 next=now+1;
			 }else{
				next=0; 
				 }
		 $(".list span").eq(next).trigger("mouseover");
	
	},2000);
	});	

	/*#cenͼƬ�л�*/
	var $lis=$("#cens span");
	var nums = $(".imgs1 a").size();
	$("#cen .imgs a:gt(0)").hide();
	var z;//��ʾҳ��
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
	 var next//��һҳ����ֵ
	 var now = $(".current1").index(); //��ǰҳ����ֵ
	 if((now+1)<nums){
		 next=now+1;
		 }else{
			next=0; 
			 }
	 $(".list1 span").eq(next).trigger("mouseover");
	
	},3000);
		
//��꾭��ͼƬ��ֹͣ�Զ��л�
  $("#cen .imgs1 a").mouseover(function(){
		clearInterval(aut);
	  }).mouseout(function(){
		  aut = setInterval(function(){
		 var next//��һҳ����ֵ
		 var now = $(".current1").index(); //��ǰҳ����ֵ
		 if((now+1)<num){
			 next=now+1;
			 }else{
				next=0; 
				 }
		 $(".list1 span").eq(next).trigger("mouseover");
	
	},3000);
	});	
/*#cen1��꾭�������ʽ*/
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
			
/*#cen2��꾭�������ʽ*/
	$("#cen2 dl .spans").css("opacity","0.4");
	$("#cen2 dl .spans").hide();
	$("#cen2 dl").mouseover(function(){
			$(this).find(".spans").show();
			$(this).find("dt").css("border","10px #AB0008 solid")
		}).mouseout(function(){
				$(this).find(".spans").hide();
				$(this).find("dt").css("border","10px #fff solid")
			})
/*#cen3 dl��꾭�������ʽ*/	
	$("#cen3 .left dl").hover(function(){
		$(this).find("p").css("color","#AB0008");
		$(this).find(".sp1").css("color","#AB0008");
		$(this).find("dt img").css("opacity","0.7");
		},function(){
		$(this).find("p").css("color","#ADADB7");
		$(this).find(".sp1").css("color","#9B999C");
		$(this).find("dt img").css("opacity","1");
		});
/*.new_left img��꾭�������ʽ*/	
	$(".new_left img").hover(function(){
		$(this).css("opacity","0.7");
		},function(){
		$(this).css("opacity","1");
		});	
		
				/*.cen_left_2  ͼƬ�л�*/
		$(".cen_left_2 .imgs dl").hover(function(){
		   clearInterval(au);//��ո��Զ�����
		},function(){
		   au = setInterval(function(){
			$(".animate .left").click();
			},3000)//��ԭ���Զ�����
		});//������꾭��Ϊ��͸��״̬������뿪Ϊ��͸��Ч��
		//��ȡҳ��
		var now = 1;//��ǰҳ��Ĭ��Ϊ1
		var numss =  $(".imgs dl").length;
		var numMax = Math.ceil(numss/1);//��ҳ��
		$(".animate .left").click(function(){
			if(!$(".animate .imgs").is(":animated")){//�жϵ�ǰ�Ƿ���ִ�ж���
					if(now==1){//�����ǰΪ��һҳ�����һ��������һҳ
						var move=-173*(numMax-1)+"px";//�ҵ����һҳ
						$(".animate .imgs").stop().animate({"left":move},2000);
						now=numMax;//��ǰҳ�����һҳ
						}else{//����ÿ�����������ƶ���ÿ�ƶ�һ�ε�ǰҳ��һ
							$(".animate .imgs").stop().animate({"left":"+=173"},2000);
	     					 now--;
							}
				};		
		});//��������󻬶�	
		$(".animate .right").click(function(){
			if(!$(".animate .imgs").is(":animated")){//�жϵ�ǰ�Ƿ���ִ�ж���
					if(now==numMax){//�����ǰҳ�����һҳ��ص���һҳ
						 $(".animate .imgs").stop().animate({"left":"0"},2000);
						 now=1;
						}else{//����ÿ�����������ƶ���ÿ�ƶ�һ�ε�ǰҳ��һ
							$(".animate .imgs").stop().animate({"left":"-=173"},2000);
	     					 now++;
							}
				};
		});//��������һ���
	//�Զ�����Ч����ʵ��
		au = setInterval(function(){
			$(".animate .left").click();
			},3000)//�Զ�����.right�ĵ���¼�
			
			//#center .cen_right dl��꾭�������ʽ
		$(".cen_right .dlList dl").find("dt span").hide();
		$(".cen_right .dlList dl").find("dt span").css("opacity","0.5")
		$(".cen_right .dlList dl").mouseover(function(){
					$(this).find("dt span").show();
				}).mouseout(function(){
						$(this).find("dt span").hide();
					})
	//.product1 img��꾭�������ʽ

		$(".product1").hover(function(){
				$(this).find("img").css("opacity","0.5");
			},function(){
				$(this).find("img").css("opacity","1")
				})

	});