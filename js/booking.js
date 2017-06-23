/**
 * 
 * @authors Your Name (you@example.org)
 * @date    2017-06-22 16:21:13
 * @version $Id$
 */
$(initPage);

var num=1;

function initPage(){

	$.getJSON("index.json",function(data){

		menuData = data.menu;
		var menuHtml = $.templates("#menuTmpl").render(menuData)
		$(".booking").append(menuHtml);

		headData = data.head;
		var headHtml = $.templates("#headTmpl").render(headData)
		$(".booking").append(headHtml);

        showMenu();
        hideMenu();

	}); 
	$.getJSON("booking.json",function(data){
		cntData = data.cnt;
		var cntHtml = $.templates("#cntTmpl").render(cntData)
		$(".booking").append(cntHtml);

		ctrlNum();
		Continue();
		Back();
	});
	$.getJSON("index.json",function(data){

		footData = data.foot;
		var footHtml = $.templates("#footTmpl").render(footData)
		$(".booking").append(footHtml);

	}); 
	
}
function Continue(){
	$(".continue-button").click(function(){
		num++;
		console.log(num);
		ctrlNum();
});
}

function Back(){
	$(".back-button").click(function(){
		if(num==1)
			num=1;
		else
			num--;
		console.log(num);
		ctrlNum();

	});
}

function ctrlNum(){
	console.log(num);
	if(num == 1){
			$(".cnt-num-first").siblings().css("font-size","20px");
			$(".cnt-num-first").css("font-size","30px");
		}
	if(num == 2){
			$(".cnt-num-second").siblings().css("font-size","20px");
			$(".cnt-num-second").css("font-size","30px");
		}
	if(num == 3){
			$(".cnt-num-third").siblings().css("font-size","20px");
			$(".cnt-num-third").css("font-size","30px");
		}
	if(num == 4){
			$(".cnt-num-fourth").siblings().css("font-size","20px");
			$(".cnt-num-fourth").css("font-size","30px");
		}
    
}