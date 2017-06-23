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

		thirdData = data.third;
		var thirdHtml = $.templates("#thirdTmpl").render(thirdData)
		$(".cnt-cnt").append(thirdHtml);


		ctrlNum();
		Continue();
		Back();
	});

	$.getJSON("../json/signup.json", function(data) {
        betOneData = data.bet;
        var betOneHtml = $.templates("#betOneTmpl").render(betOneData);
        $(".third").append(betOneHtml);
    });

    $.getJSON("../json/signin.json", function(data) {
        betTwoData = data.bet;
        var betTwoHtml = $.templates("#betTwoTmpl").render(betTwoData);
        $(".third").append(betTwoHtml);
    });

	$.getJSON("index.json",function(data){

		footData = data.foot;
		var footHtml = $.templates("#footTmpl").render(footData)
		$(".booking").append(footHtml);

		ctrlRadio();

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
			$(".cnt-num-first").siblings().css("color","#ccc");
			$(".cnt-num-first").css("color","#696969");
			$(".agreeing-text").hide();
			$(".back-button").hide();
			$(".third").hide();
		}
	if(num == 2){
			$(".cnt-num-second").siblings().css("font-size","20px");
			$(".cnt-num-second").css("font-size","30px");
			$(".cnt-num-second").siblings().css("color","#ccc");
			$(".cnt-num-second").css("color","#696969");
			$(".agreeing-text").show();
			$(".back-button").show();
			$(".third").hide();
		}
	if(num == 3){
			$(".cnt-num-third").siblings().css("font-size","20px");
			$(".cnt-num-third").css("font-size","30px");
			$(".cnt-num-third").siblings().css("color","#ccc");
			$(".cnt-num-third").css("color","#696969");
			$(".third").show();
		}
	if(num == 4){
			$(".cnt-num-fourth").siblings().css("font-size","20px");
			$(".cnt-num-fourth").css("font-size","30px");
			$(".cnt-num-fourth").siblings().css("color","#ccc");
			$(".cnt-num-fourth").css("color","#696969");
			$(".third").hide();
		}
    
}

function ctrlRadio(){
	$("#customer").on("click",function(event){
		$("#betOne").show();
		$("#betTwo").hide();
	});
	$("#account").on("click",function(event){
		$("#bettwo").show();
		$("#betOne").hide();
	});
		
}